const fs = require('fs');
const content = fs.readFileSync('lib/i18n.ts', 'utf8');
const lines = content.split('\n');

// Find and replace patterns for remaining languages
const replacements = [
  // Chinese (zh)
  {
    searchStart: 1975,
    searchEnd: 1980,
    pattern: /noCollaborators:.*\n\s*\},/,
    replacement: `noCollaborators: "暂无协作者",
      role: "角色",
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
      members: "成员",
    },`
  },
  // Japanese (ja)
  {
    searchStart: 2200,
    searchEnd: 2250,
    pattern: /noCollaborators:.*\n\s*\},/,
    replacement: `noCollaborators: "まだ協力者がいません",
      role: "役割",
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
      members: "メンバー",
    },`
  },
  // Portuguese (pt)
  {
    searchStart: 2470,
    searchEnd: 2520,
    pattern: /noCollaborators:.*\n\s*\},/,
    replacement: `noCollaborators: "Ainda não há colaboradores",
      role: "Função",
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
      members: "membros",
    },`
  },
  // Russian (ru)
  {
    searchStart: 2740,
    searchEnd: 2790,
    pattern: /noCollaborators:.*\n\s*\},/,
    replacement: `noCollaborators: "Пока нет сотрудников",
      role: "Роль",
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
      members: "участники",
    },`
  },
  // Vietnamese (vi)
  {
    searchStart: 3010,
    searchEnd: 3060,
    pattern: /noCollaborators:.*\n\s*\},/,
    replacement: `noCollaborators: "Chưa có cộng tác viên",
      role: "Vai trò",
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
      members: "thành viên",
    },`
  }
];

let modified = content;

replacements.forEach((repl, idx) => {
  const section = lines.slice(repl.searchStart, repl.searchEnd).join('\n');
  const match = section.match(repl.pattern);
  
  if (match) {
    console.log(`Found pattern ${idx + 1} in lines ${repl.searchStart}-${repl.searchEnd}`);
    // Find the exact position in full content
    const searchText = match[0];
    const startPos = modified.indexOf(searchText, lines.slice(0, repl.searchStart).join('\n').length);
    
    if (startPos !== -1) {
      modified = modified.substring(0, startPos) + repl.replacement + modified.substring(startPos + searchText.length);
      console.log(`Replaced pattern ${idx + 1}`);
    }
  } else {
    console.log(`Pattern ${idx + 1} not found in lines ${repl.searchStart}-${repl.searchEnd}`);
  }
});

fs.writeFileSync('lib/i18n.ts', modified, 'utf8');
console.log('All remaining translations added!');
