define([], function() {
  function show(text) {
    var el = document.getElementById('mainregion');

    var container = document.createElement('div');
    container.innerHTML = text;

    el.appendChild(container);

    return container;
  }

  return { 
    show: show
  };

});
