$(document).ready(function() {
  $("img#dog").click(function() {
    $("ul#dogtalk").prepend("<li>barko boi why you so mean pussy</li>");
    $("ul#cattalk").prepend("<li>bc i am mean cat suck it </li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();

      });
    });

  $("img#cat").click(function() {
    $("ul#dogtalk").prepend("<li>woof that's sum bull shit</li>");
    $("ul#cattalk").prepend("<li>i am lord of my domain and i will ruin your life, you dumb boiiiiiiiii</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();

      });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();

      });
  });
});
