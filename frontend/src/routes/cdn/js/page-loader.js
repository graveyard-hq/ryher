const routes = [{ route: '404', content: '<script>revaui.app.render([revaui.components.Text({content: \'404 not found\',})]);</script>' }];

fetch('/partial/view-notes')
  .then(async (res) => {
    const pageBody = await res.text();
    routes.push({ route: '/view-notes/', content: pageBody });
    routes.push({ route: '/view-notes',  content: pageBody });
  });

fetch('/partial/create-note')
  .then(async (res) => {
    const pageBody = await res.text();
    routes.push({ route: '/create-note/', content: pageBody });
    routes.push({ route: '/create-note',  content: pageBody });
  });

fetch('/partial/settings')
  .then(async (res) => {
    const pageBody = await res.text();
    routes.push({ route: '/settings/', content: pageBody });
    routes.push({ route: '/settings',  content: pageBody });
  });

function refreshLinkEventListeners() {
  const aTags = document.getElementsByTagName('a');
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].addEventListener('click', (e) => {
      e.preventDefault();
      window.history.pushState(undefined, undefined, aTags[i].href);

      for (let i = 0; i < routes.length; i++)
        if (routes[i].route === window.location.pathname) {
          document.getElementById('page').innerHTML = routes[i].content;
          eval(document.getElementById('page').getElementsByTagName('script')[0].innerHTML);
          return;
        }

      document.getElementById('page').innerHTML = routes[0].content;
      eval(document.getElementById('page').getElementsByTagName('script')[0].innerHTML);
    });
  }
}
