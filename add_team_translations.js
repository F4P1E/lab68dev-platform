const fs = require('fs');

let content = fs.readFileSync('lib/i18n.ts', 'utf8');
const lines = content.split('\n');

// Chinese (around line 1978)
const zhTranslations = `      role: "角色",
      selectRole: "选择角色",
      roleOwner: "所有者",
      roleAdmin: "管理员",
      roleEditor: "编辑者",
      roleViewer: "查看者",
      permissions: "权限",
      canEdit: "可以编辑",
      canDelete: "可以删除",
      canInvite: "可以邀请",
      canManageRoles: "可以管理角色",
      canViewActivity: "可以查看活动",
      activity: "活动",
      recentActivity: "最近活动",
      noActivity: "无最近活动",
      lastActive: "最后活跃",
      addedBy: "添加者",
      changeRole: "更改角色",
      member: "成员",
      members: "成员",`.split('\n');

// Japanese (around line 2245)
const jaTranslations = `      role: "役割",
      selectRole: "役割を選択",
      roleOwner: "所有者",
      roleAdmin: "管理者",
      roleEditor: "編集者",
      roleViewer: "閲覧者",
      permissions: "権限",
      canEdit: "編集可能",
      canDelete: "削除可能",
      canInvite: "招待可能",
      canManageRoles: "役割管理可能",
      canViewActivity: "活動閲覧可能",
      activity: "活動",
      recentActivity: "最近の活動",
      noActivity: "最近の活動はありません",
      lastActive: "最終アクティブ",
      addedBy: "追加者",
      changeRole: "役割を変更",
      member: "メンバー",
      members: "メンバー",`.split('\n');

// Portuguese (around line 2513)
const ptTranslations = `      role: "Função",
      selectRole: "Selecionar função",
      roleOwner: "Proprietário",
      roleAdmin: "Administrador",
      roleEditor: "Editor",
      roleViewer: "Observador",
      permissions: "Permissões",
      canEdit: "Pode editar",
      canDelete: "Pode excluir",
      canInvite: "Pode convidar",
      canManageRoles: "Pode gerenciar funções",
      canViewActivity: "Pode ver atividade",
      activity: "Atividade",
      recentActivity: "Atividade Recente",
      noActivity: "Sem atividade recente",
      lastActive: "Última atividade",
      addedBy: "Adicionado por",
      changeRole: "Mudar Função",
      member: "membro",
      members: "membros",`.split('\n');

// Russian (around line 2781)
const ruTranslations = `      role: "Роль",
      selectRole: "Выбрать роль",
      roleOwner: "Владелец",
      roleAdmin: "Администратор",
      roleEditor: "Редактор",
      roleViewer: "Наблюдатель",
      permissions: "Разрешения",
      canEdit: "Может редактировать",
      canDelete: "Может удалять",
      canInvite: "Может приглашать",
      canManageRoles: "Может управлять ролями",
      canViewActivity: "Может просматривать активность",
      activity: "Активность",
      recentActivity: "Последняя Активность",
      noActivity: "Нет недавней активности",
      lastActive: "Последняя активность",
      addedBy: "Добавлено",
      changeRole: "Изменить Роль",
      member: "участник",
      members: "участники",`.split('\n');

// Vietnamese (around line 3049)
const viTranslations = `      role: "Vai trò",
      selectRole: "Chọn vai trò",
      roleOwner: "Chủ sở hữu",
      roleAdmin: "Quản trị viên",
      roleEditor: "Biên tập viên",
      roleViewer: "Người xem",
      permissions: "Quyền hạn",
      canEdit: "Có thể chỉnh sửa",
      canDelete: "Có thể xóa",
      canInvite: "Có thể mời",
      canManageRoles: "Có thể quản lý vai trò",
      canViewActivity: "Có thể xem hoạt động",
      activity: "Hoạt động",
      recentActivity: "Hoạt Động Gần Đây",
      noActivity: "Không có hoạt động gần đây",
      lastActive: "Hoạt động lần cuối",
      addedBy: "Được thêm bởi",
      changeRole: "Thay Đổi Vai Trò",
      member: "thành viên",
      members: "thành viên",`.split('\n');

// Insert in reverse order to maintain line numbers
lines.splice(3050, 0, ...viTranslations);
lines.splice(2782, 0, ...ruTranslations);
lines.splice(2514, 0, ...ptTranslations);
lines.splice(2246, 0, ...jaTranslations);
lines.splice(1978, 0, ...zhTranslations);

content = lines.join('\n');
fs.writeFileSync('lib/i18n.ts', content, 'utf8');

console.log('Added all remaining team translations!');
console.log('- Chinese: 20 new keys');
console.log('- Japanese: 20 new keys');
console.log('- Portuguese: 20 new keys');
console.log('- Russian: 20 new keys');
console.log('- Vietnamese: 20 new keys');
