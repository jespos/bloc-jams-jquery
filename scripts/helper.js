class Helper {
  playPauseAndUpdate(song){
    player.playPause(song);
    //const duration = player.getDuration();
    //const prettyDurationTime = player.prettyTime(duration);
    const prettyDurationTime = player.prettyTime(player.currentlyPlaying.duration);
    $('#time-control .total-time').text(prettyDurationTime);
  };
};

const helper = new Helper();
