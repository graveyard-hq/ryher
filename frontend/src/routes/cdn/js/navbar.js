function navbar(pressed) {
  return revaui.components.Navbar({
    content: [
      (pressed === 'Home' ?
        revaui.components.Text({
          content: 'Home',
        }) :
        revaui.components.Link({
          to: '/view-notes',
          content: 'Home'
        })
      ),
      revaui.components.Padding({
        padding: '16px',
        content: [],
      }),
      (pressed === 'Create note' ?
        revaui.components.Text({
          content: 'Create note',
        }) :
        revaui.components.Link({
          to: '/create-note',
          content: 'Create note'
        })
      ),
      revaui.components.Padding({
        padding: '16px',
        content: [],
      }),
      (pressed === 'Settings' ?
        revaui.components.Text({
          content: 'Settings',
        }) :
        revaui.components.Link({
          to: '/settings',
          content: 'Settings'
        })
      ),
      revaui.components.Padding({
        padding: '32px',
        content: [],
      }),
    ],
  });
}