var shock = new Audio(chrome.extension.getURL("ElecEnergy_ImpactSpark03.wav"));
var light = new Audio(chrome.extension.getURL("elbuzz.wav"));

shock.volume = 0.3;
light.volume = 0.3;

$("div[data-event-action='upvote']").click(function(){
	stopAll();
	light.play();
});

$("div[data-event-action='downvote']").click(function(){
	stopAll();
	shock.play();
});

function stop(sound)
{
	sound.pause();
	sound.currentTime = 0;
}

function stopAll()
{
	stop(shock);
	stop(light);
}