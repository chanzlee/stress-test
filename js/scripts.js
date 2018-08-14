$(document).ready(function(){
  $("form#stresstest").submit(function(event){
    event.preventDefault();

    var total = 0;
    var userInput = $("input:checkbox[name=warning-signs]:checked").each(function(){
      total +=1;
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      total +=1;
    });

    if (total > 5) {
      for (var i = 0; i<5; i++) {
        var suggestion = $("li").eq(i);
        $("#result").append("<p>" + suggestion.text() + "</p>");
      }
    } else if ( total > 3) {
      for (var i = 0; i<3; i++) {
        var suggestion = $("li").eq(i);
        $("#result").append("<p>" + suggestion.text() + "</p>");
      }
    } else {
        $("#result").append("<p>" + "GJ"+ "</p>");
    }
  });
});
