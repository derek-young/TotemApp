const defaults = {
  menuVisible: false,
  menuItems: [
    { path: '/map', text: 'Map', icon: 'map-o' },
    { path: '/group', text: 'Group', icon: 'users' },
    { path: '/agenda', text: 'Agenda', icon: 'pencil-square-o' },
    { path: '/schedule', text: 'Schedule', icon: 'clock-o' },
    { path: '/chat', text: 'Chat', icon: 'comment-o' },
    { path: '/settings', text: 'Profile', icon: 'user' }
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
