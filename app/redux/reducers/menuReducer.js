const defaults = {
  menuVisible: false,
  menuItems: [
    { path: '/map', text: 'Map', icon: 'map', color: '#f9d6ff' },
    { path: '/group', text: 'Group', icon: 'users', color: '#dddaff' },
    { path: '/agenda', text: 'Agenda', icon: 'pencil-square-o', color: '#ddffd6' },
    { path: '/schedule', text: 'Schedule', icon: 'clock-o', color: '#fffecc' },
    { path: '/chat', text: 'Chat', icon: 'comment-o', color: '#ffd5d5' },
    { path: '/settings', text: 'Profile', icon: 'user', color: '#FFF' }
  ]
};

export default function menuReducer(state = defaults, action) {
  switch (action.type) {
    case 'TOGGLE_MENU': {
      return {
        ...state,
        menuVisible: !state.menuVisible
      };
    }
  }

  return state;
};
