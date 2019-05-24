var linksarray = [];
var rechtsarray = [];
$(document).ready(function(){
  $("#toevoegen").click(function(){
    if($("#naam").val() != ""){
      linksarray.push($("#naam").val() + "<br/>");
      document.getElementById('blok1').innerHTML = linksarray.join("");
    }
  });
  $("#rechts").click(function(){
    rechtsarray.push(linksarray.join(""));
    rechtsarray.join("");
    linksarray = [];
    document.getElementById('blok1').innerHTML = linksarray.join("");
    document.getElementById('blok2').innerHTML = rechtsarray;
  });
  $("#links").click(function(){
    linksarray.push(rechtsarray.join(""));
    linksarray.join("");
    rechtsarray = [];
    document.getElementById('blok1').innerHTML = linksarray;
    document.getElementById('blok2').innerHTML = rechtsarray.join("");
  });
});
