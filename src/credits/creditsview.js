define(['text!./creditsview.htm'], function(text) {
  var el = document.createElement('div');
  el.innerHTML = text;

  function show() {
    document.body.appendChild(el);
  };

  function hide() {
    document.body.removeChild(el);
  };

  return {
    show: show,
    hide: hide
  };
});
