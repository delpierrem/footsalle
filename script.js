function ask (numeroTeam) {
  for (i=1; i<=5 ; i++){
    var player = document.getElementById("team"+numeroTeam + "Player"+ i +"Name").value;
    document.getElementById("team"+numeroTeam + "Player"+i).innerHTML = player;

  }
   var team = document.getElementById("inputTeam"+numeroTeam).value;
   document.getElementById("team"+numeroTeam).innerHTML = team;

  }
