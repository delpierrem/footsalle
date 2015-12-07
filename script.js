
function onLoadPlayers() {
  if(typeof localStorage!='undefined') {
    for (numeroTeam=1; numeroTeam<=6 ; numeroTeam++) {
      var team = localStorage.getItem("team"+numeroTeam);
      if (team != null) {
        document.getElementById("team"+numeroTeam).innerHTML = team;
      }

      for (i=1; i<=5 ; i++) {
        var player = localStorage.getItem("team" + numeroTeam + "Player"+i);
        if (player != null) {
          document.getElementById("team"+ numeroTeam +"Player"+i).innerHTML = player;
        }
      }
    }
  }
}

function onLoadMatchs() {
  if(typeof localStorage!='undefined') {
    for (numeroTeam=1; numeroTeam<=6 ; numeroTeam++) {
      var team = localStorage.getItem("team"+numeroTeam);
      if (team != null) {
        document.getElementById("team"+numeroTeam).innerHTML = team;
      }
    }
  }
}

function ask(numeroTeam) {
  for (i=1; i<=5 ; i++){
    var player = document.getElementById("team"+numeroTeam + "Player"+ i +"Name").value;
    document.getElementById("team"+numeroTeam + "Player"+i).innerHTML = player;

    localStorage.setItem("team"+numeroTeam + "Player"+i, player);
    player = localStorage.getItem("team"+numeroTeam + "Player"+i);




  }  // end for

    var team = document.getElementById("inputTeam"+numeroTeam).value;
    document.getElementById("team"+numeroTeam).innerHTML = team;
    localStorage.setItem("team"+numeroTeam, team);
}

// ****************************************************************************
