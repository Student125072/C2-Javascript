
LINKS = 37,
RECHTS = 39,
BOVEN = 38,
BENEDEN = 40;
var loc = 22;

document.getElementById(loc).style.backgroundColor = "#1B63DF";
function Block(Block) {

  if(loc == 5 )
    loc -= 1;
  }
  else if (loc == 15) {
     loc -= 1;
  }
  else if (loc == 25) {
     loc -= 1;
  }
  else if (loc == 35) {
     loc -= 1;
  }
  else if (loc == 45) {
     loc -= 1;
  }
  else if (loc == -1) {
     loc += 1;
  }
  else if (loc == 9) {
     loc += 1;
  }
  else if (loc == 19) {
     loc += 1;
  }
  else if (loc == 29) {
     loc += 1;
  }
  else if (loc == 39) {
     loc += 1;
  }
  else if (loc == 49) {
     loc += 1;
  }
  else if (loc == -10) {
     loc += 10;
  }
  else if (loc == -9) {
     loc += 10;
  }
  else if (loc == -8) {
     loc += 10;
  }
  else if (loc == -7) {
     loc += 10;
  }
  else if (loc == -6) {
     loc += 10;
  }
  else if (loc == 50) {
     loc -= 10;
  }
  else if (loc == 51) {
     loc -= 10;
  }
  else if (loc == 52) {
     loc -= 10;
  }
  else if (loc == 53) {
     loc -= 10;
  }
  else if (loc == 54) {
     loc -= 10;
  }

     else {
       switch (Block) {
         case LINKS:
           loc -= 10;
            document.getElementById(loc).style.backgroundColor = "#1B63DF";
            document.getElementById(loc+10).style.backgroundColor = "#1D1515";
            document.querySelector("#geen").innerHTML = "<h1>" + loc + "</h1>";
          break;
          case RECHTS:
           loc += 10;
            document.getElementById(loc).style.backgroundColor = "#1B63DF";
            document.getElementById(loc-10).style.backgroundColor = "#1D1515";
            document.querySelector("#geen").innerHTML = "<h1>" + loc + "</h1>";
          break;
          case BOVEN:
           loc += 1;
            document.getElementById(loc).style.backgroundColor = "#1B63DF";
            document.getElementById(loc-1).style.backgroundColor = "#1D1515";
            document.querySelector("#geen").innerHTML = "<h1>" + loc + "</h1>";
          break;
          case BENEDEN:
           loc -= 1;
            document.getElementById(loc).style.backgroundColor = "#1B63DF";
            document.getElementById(loc+1).style.backgroundColor = "#1D1515";
            document.querySelector("#geen").innerHTML = "<h1>" + loc + "</h1>";
          break;
          default:
           document.querySelector("#geen").innerHTML = "<h1>geen arrow key</h1><br>";
          break;
         }
      }
  }

    function check(event) {
      var indruk = event || window.event,
        knop = (indruk.which) ? indruk.which : indruk.keyCode;

        Block(knop);

        return false;
    }
    document.onkeydown = check;
