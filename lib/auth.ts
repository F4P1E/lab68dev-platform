// Simple client-side authentication using localStorage
// In production, this would be replaced with a proper backend

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
  language?: string
  bio?: string
  location?: string
  website?: string
  avatar?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Get all users from localStorage
export function getAllUsers(): User[] {
  if (typeof window === "undefined") return []
  const users = localStorage.getItem("lab68_users")
  return users ? JSON.parse(users) : []
}

// Save users to localStorage
function saveUsers(users: User[]): void {
  localStorage.setItem("lab68_users", JSON.stringify(users))
}

// Get current user session
export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null
  const session = localStorage.getItem("lab68_session")
  return session ? JSON.parse(session) : null
}

// Sign up a new user
export function signUp(
  email: string,
  password: string,
  name: string,
  language?: string,
): { success: boolean; error?: string; user?: User } {
  const users = getAllUsers()

  // Check if user already exists
  if (users.find((u) => u.email === email)) {
    return { success: false, error: "User already exists" }
  }

  // Create new user
  const newUser: User = {
    id: crypto.randomUUID(),
    email,
    name,
    createdAt: new Date().toISOString(),
    language: language || "en",
  }

  // Store password separately (in production, this would be hashed on backend)
  const passwords = JSON.parse(localStorage.getItem("lab68_passwords") || "{}")
  passwords[email] = password

  users.push(newUser)
  saveUsers(users)
  localStorage.setItem("lab68_passwords", JSON.stringify(passwords))

  return { success: true, user: newUser }
}

// Sign in user
export function signIn(
  email: string,
  password: string,
  rememberMe = false,
): { success: boolean; error?: string; user?: User } {
  const users = getAllUsers()
  const passwords = JSON.parse(localStorage.getItem("lab68_passwords") || "{}")

  const user = users.find((u) => u.email === email)

  if (!user) {
    return { success: false, error: "User not found" }
  }

  if (passwords[email] !== password) {
    return { success: false, error: "Invalid password" }
  }

  // Create session
  localStorage.setItem("lab68_session", JSON.stringify(user))

  if (rememberMe) {
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + 30) // 30 days
    localStorage.setItem("lab68_remember", JSON.stringify({ email, expiration: expirationDate.toISOString() }))
  } else {
    localStorage.removeItem("lab68_remember")
  }

  return { success: true, user }
}

// Sign out user
export function signOut(): void {
  localStorage.removeItem("lab68_session")
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}

// Update user profile
export function updateUserProfile(
  userId: string,
  updates: Partial<Omit<User, "id" | "email" | "createdAt">>,
): { success: boolean; error?: string; user?: User } {
  const users = getAllUsers()
  const userIndex = users.findIndex((u) => u.id === userId)

  if (userIndex === -1) {
    return { success: false, error: "User not found" }
  }

  users[userIndex] = { ...users[userIndex], ...updates }
  saveUsers(users)

  // Update session
  const currentUser = getCurrentUser()
  if (currentUser && currentUser.id === userId) {
    localStorage.setItem("lab68_session", JSON.stringify(users[userIndex]))
  }

  return { success: true, user: users[userIndex] }
}

export function checkRememberMe(): User | null {
  if (typeof window === "undefined") return null

  const remember = localStorage.getItem("lab68_remember")
  if (!remember) return null

  try {
    const { email, expiration } = JSON.parse(remember)
    const expirationDate = new Date(expiration)

    // Check if remember me has expired
    if (new Date() > expirationDate) {
      localStorage.removeItem("lab68_remember")
      return null
    }

    // Check if user still exists
    const users = getAllUsers()
    const user = users.find((u) => u.email === email)

    if (user) {
      // Restore session
      localStorage.setItem("lab68_session", JSON.stringify(user))
      return user
    }
  } catch (error) {
    localStorage.removeItem("lab68_remember")
  }

  return null
}
