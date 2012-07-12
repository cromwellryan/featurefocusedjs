define(['./creditsview', 'mainregion', 'keyboard'], function(view, mainregion, keyboard) {

  function start() {
    keyboard.bind.key('shift + forwardslash', view.show, view.hide)
  };

  return {
    start: start
  };
});
