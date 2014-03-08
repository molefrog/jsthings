$(function() {
	var canvas = document.getElementById('videoCanvas');
	
	var client = new WebSocket( 'ws://steviewhale.com:3030/mesto' );
	var player = new jsmpeg(client, {canvas:canvas});
});