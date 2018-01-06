$(document).ready(function(){


  var playlist = [
   {
      title:"体面-于文文",
      artist:"",
      mp3:"timian.m4a",
      // poster: "https://img.alicdn.com/imgextra/i2/645383876/TB2rB1AXDAKh1JjSZFDXXbKlFXa_!!645383876.jpg"
 poster:"./img/50-50.png"    
  }]
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});
	

  
  
  
  
  
