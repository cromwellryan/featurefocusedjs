require.config({
	priority: [],
  paths: {
    text: 'lib/text',
    keyboard: 'lib/keyboard.0.2.2.min',
    ko: 'lib/knockout-2.1.0'
  }
}); 

require( [ 'credits/creditsmodule' ]
, function(credits) {

  credits.start();

});
