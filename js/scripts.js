$(document).ready(function(){

  $("form#survey").submit(function(event) {

    event.preventDefault();
    $("#output").show();
    $("form#survey").hide();

    $("input:checkbox[name=work]:checked").each(function() {
      var workInput = $(this).val();
      $("#output").append(workInput + "<br>");
      });

      $("#output2").show();

      $("input:checkbox[name=recreation]:checked").each(function(){
        var fun = $(this).val();
        $("#output2").append(fun + "<br>");
      });
  });
});
