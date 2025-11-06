# Team Management Implementation Guide

## Overview
This guide explains the enhancements made to add comprehensive team management with roles, permissions, and activity tracking to the lab68dev platform.

## 1. Core Infrastructure

### Files Created
- **`lib/team.ts`** - Core team management utilities
  - Role types: `owner`, `admin`, `editor`, `viewer`
  - Permission system with granular controls
  - Activity logging and retrieval
  - Helper functions for role management

### Translation Updates
- **`lib/i18n.ts`** - Added 20 new keys for team management
  - Role names and selection
  - Permission descriptions
  - Activity tracking labels
  - Fully translated across all 9 languages

## 2. Data Structure Changes

### Updated Project Interface
```typescript
interface Project {
  id: string
  name: string
  description: string
  status: string
  tech: string[]
  lastUpdated: string
  userId: string // Project owner
  collaborators?: CollaboratorWithRole[] // Enhanced with roles
}
```

### New CollaboratorWithRole Interface
```typescript
interface CollaboratorWithRole {
  email: string
  role: Role // "owner" | "admin" | "editor" | "viewer"
  addedAt: string // ISO timestamp
  addedBy: string // Email of user who added them
  lastActive?: string // ISO timestamp of last activity
}
```

## 3. Permission System

### Role Capabilities

**Owner** (Project Creator)
- ✅ Can edit project
- ✅ Can delete project
- ✅ Can invite collaborators
- ✅ Can manage roles
- ✅ Can view activity

**Admin**
- ✅ Can edit project
- ❌ Cannot delete project
- ✅ Can invite collaborators
- ✅ Can manage roles
- ✅ Can view activity

**Editor**
- ✅ Can edit project
- ❌ Cannot delete project
- ❌ Cannot invite collaborators
- ❌ Cannot manage roles
- ✅ Can view activity

**Viewer**
- ❌ Cannot edit project
- ❌ Cannot delete project
- ❌ Cannot invite collaborators
- ❌ Cannot manage roles
- ✅ Can view activity

## 4. Activity Tracking

### Tracked Activities
- Project created
- Project updated
- Project deleted
- Collaborator added
- Collaborator removed
- Role changed
- Status changed
- Project accessed

### Activity Data Structure
```typescript
interface Activity {
  id: string
  projectId: string
  userId: string
  userName: string
  action: string
  timestamp: string
  details?: string
}
```

### Storage
- Activities stored in `localStorage` under key `lab68_activities`
- Maximum 1000 activities retained
- Older activities automatically pruned

## 5. Projects Page Enhancements

### Adding Collaborators with Roles
1. User clicks "Collaborators" button on project card
2. Modal shows existing collaborators with their roles
3. Owner/Admin can add new collaborators:
   - Enter email address
   - Select role from dropdown (Admin/Editor/Viewer)
   - System validates and adds with timestamp
4. Activity is logged: "Added [email] as [role]"

### Role Management
1. Owner/Admin sees "Change Role" button next to each collaborator
2. Clicking opens role selector dropdown
3. Changing role:
   - Updates collaborator's role
   - Logs activity: "Changed [email] role from [old] to [new]"
   - Updates `lastUpdated` timestamp

### Permission Guards
- Edit button: Disabled for Viewers
- Delete button: Only visible to Owner
- Add Collaborator: Only visible to Owner/Admin
- Manage Roles: Only visible to Owner/Admin

## 6. Collaborators Page Enhancements

### Enhanced Collaborator Cards
Each card now shows:
- **Role Badge**: Color-coded by role
  - Owner: Primary color (green)
  - Admin: Blue
  - Editor: Green
  - Viewer: Gray
- **Last Active**: Time since last project access
- **Added By**: Who invited them
- **Added Date**: When they were invited
- **Project Count**: Number of projects they can access

### Activity Timeline
- Dedicated "Recent Activity" section per collaborator
- Shows last 10 activities
- Filterable by action type
- Includes timestamps and details

### Role Management UI
- "Change Role" dropdown for each collaborator
- Only visible to users with `canManageRoles` permission
- Confirmation dialog for sensitive changes (e.g., Admin → Viewer)

## 7. Implementation Steps

### Step 1: Update Projects Page

```typescript
// Import team utilities
import {
  type Role,
  type CollaboratorWithRole,
  getPermissions,
  hasPermission,
  getUserRole,
  logActivity,
  updateLastActive,
  getRoleDisplayName,
  getRoleColorClass,
} from "@/lib/team"

// Update interface
interface Project {
  // ... existing fields
  collaborators?: CollaboratorWithRole[]
}

// Add state for role selection
const [selectedRole, setSelectedRole] = useState<Role>("viewer")

// Update handleAddCollaborator
const handleAddCollaborator = () => {
  // ... validation
  
  const newCollaborator: CollaboratorWithRole = {
    email: collaboratorEmail,
    role: selectedRole,
    addedAt: new Date().toISOString(),
    addedBy: currentUser.email,
  }
  
  // Log activity
  logActivity({
    projectId: selectedProject.id,
    userId: currentUser.email,
    userName: currentUser.name,
    action: "collaborator_added",
    details: `Added ${collaboratorEmail} as ${selectedRole}`,
  })
  
  // Update project
  // ... rest of logic
}

// Add handleChangeRole
const handleChangeRole = (email: string, newRole: Role) => {
  const collab = selectedProject.collaborators?.find(c => c.email === email)
  if (!collab) return
  
  logActivity({
    projectId: selectedProject.id,
    userId: currentUser.email,
    userName: currentUser.name,
    action: "role_changed",
    details: `Changed ${email} from ${collab.role} to ${newRole}`,
  })
  
  // Update collaborator role
  // ... update logic
}
```

### Step 2: Update Collaborators Modal UI

```tsx
{/* Role Selection Dropdown */}
<div className="space-y-2">
  <label className="text-sm font-medium">{t.projects.role}</label>
  <select
    value={selectedRole}
    onChange={(e) => setSelectedRole(e.target.value as Role)}
    className="w-full bg-card border border-border px-4 py-2 text-sm"
  >
    <option value="admin">{t.projects.roleAdmin}</option>
    <option value="editor">{t.projects.roleEditor}</option>
    <option value="viewer">{t.projects.roleViewer}</option>
  </select>
</div>

{/* Collaborator List with Roles */}
{selectedProject.collaborators?.map((collab) => {
  const userRole = getUserRole(selectedProject, currentUser.email)
  const permissions = getPermissions(userRole!)
  
  return (
    <div key={collab.email} className="border border-border p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">{collab.email}</p>
            <span className={`text-xs border px-2 py-0.5 ${getRoleColorClass(collab.role)}`}>
              {getRoleDisplayName(collab.role)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {t.projects.addedBy} {collab.addedBy} • {getTimeAgo(collab.addedAt)}
          </p>
          {collab.lastActive && (
            <p className="text-xs text-muted-foreground">
              {t.projects.lastActive}: {getTimeAgo(collab.lastActive)}
            </p>
          )}
        </div>
        
        {permissions.canManageRoles && (
          <select
            value={collab.role}
            onChange={(e) => handleChangeRole(collab.email, e.target.value as Role)}
            className="text-sm border border-border px-2 py-1"
          >
            <option value="admin">{t.projects.roleAdmin}</option>
            <option value="editor">{t.projects.roleEditor}</option>
            <option value="viewer">{t.projects.roleViewer}</option>
          </select>
        )}
      </div>
    </div>
  )
})}
```

### Step 3: Add Permission Guards

```tsx
{/* Edit Button - Disabled for Viewers */}
<Button
  variant="outline"
  size="sm"
  onClick={() => handleOpenModal(project)}
  disabled={!hasPermission(userRole, 'canEdit')}
  className="flex-1"
>
  <Pencil className="h-3 w-3" />
  {t.projects.edit}
</Button>

{/* Delete Button - Only for Owner */}
{hasPermission(userRole, 'canDelete') && (
  <Button
    variant="outline"
    size="sm"
    onClick={() => handleDeleteProject(project.id)}
    className="flex-1 border-destructive text-destructive"
  >
    <Trash2 className="h-3 w-3" />
    {t.projects.delete}
  </Button>
)}
```

### Step 4: Update Collaborators Page

```typescript
// Import team utilities
import {
  type CollaboratorWithRole,
  type Activity,
  getProjectActivities,
  getUserActivities,
  getTimeAgo,
  getRoleDisplayName,
  getRoleColorClass,
} from "@/lib/team"

// Update interface
interface CollaboratorInfo {
  email: string
  name?: string
  projectCount: number
  projects: { id: string; name: string; role: Role }[]
  isRegistered: boolean
  lastActive?: string
  activities?: Activity[]
}

// Load collaborator activities
const loadCollaborators = () => {
  // ... existing logic
  
  collabArray.forEach(collab => {
    collab.activities = getUserActivities(collab.email, 10)
    // Find most recent lastActive across all projects
    collab.lastActive = collab.projects.reduce((latest, project) => {
      // Get project data and check collaborator's lastActive
      // Return most recent
    }, undefined)
  })
}
```

## 8. Activity Logging Examples

```typescript
// When project is created
logActivity({
  projectId: newProject.id,
  userId: user.email,
  userName: user.name,
  action: "project_created",
  details: `Created project: ${newProject.name}`,
})

// When project is updated
logActivity({
  projectId: project.id,
  userId: user.email,
  userName: user.name,
  action: "project_updated",
  details: "Updated project details",
})

// When status changes
logActivity({
  projectId: project.id,
  userId: user.email,
  userName: user.name,
  action: "status_changed",
  details: `Changed status from ${oldStatus} to ${newStatus}`,
})

// When collaborator is removed
logActivity({
  projectId: project.id,
  userId: user.email,
  userName: user.name,
  action: "collaborator_removed",
  details: `Removed ${removedEmail}`,
})
```

## 9. Migration Strategy

### For Existing Projects
Run migration script to convert old collaborators format:

```javascript
const migrateProjects = () => {
  const projects = JSON.parse(localStorage.getItem("lab68_projects") || "[]")
  
  const migrated = projects.map(project => {
    if (project.collaborators && Array.isArray(project.collaborators)) {
      // Check if already migrated
      if (project.collaborators[0]?.role) {
        return project
      }
      
      // Convert string[] to CollaboratorWithRole[]
      project.collaborators = project.collaborators.map(email => ({
        email,
        role: "editor", // Default role for existing collaborators
        addedAt: project.lastUpdated || new Date().toISOString(),
        addedBy: project.userId,
      }))
    }
    return project
  })
  
  localStorage.setItem("lab68_projects", JSON.stringify(migrated))
}
```

## 10. Testing Checklist

### Role Permissions
- [ ] Owner can perform all actions
- [ ] Admin can edit but not delete
- [ ] Editor can edit but not manage roles/collaborators
- [ ] Viewer can only view

### Activity Tracking
- [ ] All actions are logged correctly
- [ ] Timestamps are accurate
- [ ] Activity feed displays properly
- [ ] Old activities are pruned at 1000 limit

### UI/UX
- [ ] Role badges display with correct colors
- [ ] Last active timestamps update
- [ ] Permission guards prevent unauthorized actions
- [ ] Role selection dropdown works
- [ ] Confirmation dialogs for role changes

### Multi-language
- [ ] All new labels translate correctly
- [ ] Role names display in selected language
- [ ] Activity messages translate properly

## 11. Future Enhancements

1. **Email Notifications**
   - Notify users when added to projects
   - Alert on role changes
   - Daily/weekly activity digests

2. **Advanced Permissions**
   - Custom role creation
   - Per-project permission overrides
   - Resource-level permissions (files, boards, etc.)

3. **Activity Analytics**
   - Most active members dashboard
   - Project engagement metrics
   - Collaboration heatmaps

4. **Real-time Collaboration**
   - WebSocket integration for live updates
   - Online presence indicators
   - Real-time activity feed

5. **Audit Logs**
   - Export activity logs to CSV
   - Compliance reports
   - Security audit trail

## 12. Security Considerations

- Always validate user permissions server-side (when backend is added)
- Never trust client-side permission checks alone
- Log all sensitive actions for audit trail
- Implement rate limiting for role changes
- Add confirmation for destructive actions
- Sanitize all user inputs in activity logs
