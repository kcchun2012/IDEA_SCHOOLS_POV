/*This is a fix for initial mute that we set through dialog is not working for the flash video player in IE*/
jQuery(window).load(function() {  
  jQuery('.video-js').each(function() {                //searching for all the videos on the page 
      var vPlayer = videojs(jQuery(this).attr('id'));  //finds each players id and sends it videojs method
      if(jQuery(this).attr('muted')){                  //For flash video player, find muted and if found make it trigger the mute again
            vPlayer.muted(true);
      }
   });
});
