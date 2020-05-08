var scores = 0;
$('.middle-container').fadeIn();
$('.result-container').css('display', 'none');
$('.you').text('KAMU');
$('.enemy').text('LAWAN');
for (var i = 0; i < document.querySelectorAll(".spr").length; i++) {
  document.querySelectorAll(".spr")[i].addEventListener("click", function() {

    var randomIndex = Math.floor(Math.random() * 3) + 1;
    var scissors_img = "images/icon-scissors.svg";
    var paper_img = "images/icon-paper.svg";
    var rock_img = "images/icon-rock.svg";

    if (this == document.querySelectorAll('.spr')[0] && randomIndex === 1) {
      scores += 1;
      $(".score-score").text(scores);
      $(".middle-container").css('display', 'none');
      $(".result-container").fadeIn().css('display', "flex");
      $(".pick").addClass('pick-result-scissors');
      $(".pick-img").attr('src', scissors_img);
      $(".house-img").attr('src', paper_img);
      $(".house").addClass('house-result-paper');
      $(".result-text").text('YOU WIN');
    } else if (this == document.querySelectorAll('.spr')[0] && randomIndex === 2) {
      scores -= 1;
      $(".score-score").text(scores);
      $(".middle-container").css('display', 'none');
      $(".result-container").fadeIn().css('display', 'flex');
      $(".pick").addClass('pick-result-scissors');
      $(".pick-img").attr('src', scissors_img);
      $(".house-img").attr('src', rock_img);
      $(".house").addClass('house-result-rock');
      $(".result-text").text('YOU LOSS');
    } else if (this == document.querySelectorAll('.spr')[0] && randomIndex === 3) {
      $(".middle-container").css('display', 'none');
      $(".result-container").fadeIn().css('display', 'flex');
      $(".pick").addClass('pick-result-scissors');
      $(".pick-img").attr('src', scissors_img);
      $(".house-img").attr('src', scissors_img);
      $(".house").addClass('house-result-scissors');
      $(".result-text").text('DRAW');

    } else if (this == document.querySelectorAll('.spr')[1] && randomIndex === 1) {
      $(".middle-container").css('display', 'none');
      $(".result-container").fadeIn().css('display', 'flex');
      $(".pick").addClass('pick-result-paper');
      $(".pick-img").attr('src', paper_img);
      $(".house-img").attr('src', paper_img);
      $(".house").addClass('house-result-paper');
      $(".result-text").text('DRAW');

    } else if (this == document.querySelectorAll('.spr')[1] && randomIndex === 2) {
      scores += 1;
      $(".score-score").text(scores);
      $(".middle-container").css('display', 'none');
      $(".result-container").fadeIn().css('display', 'flex');
      $(".pick").addClass('pick-result-paper');
      $(".pick-img").attr('src', paper_img);
      $(".house-img").attr('src', rock_img);
      $(".house").addClass('house-result-rock');
      $(".result-text").text('YOU WIN');

    } else if (this == document.querySelectorAll('.spr')[1] && randomIndex === 3) {
      scores -= 1;
      $(".score-score").text(scores);
      $(".middle-container").css('display', 'none');

      $(".result-container").fadeIn().css('display', 'flex');
      $(".pick").addClass('pick-result-paper');
      $(".pick-img").attr('src', paper_img);
      $(".house-img").attr('src', scissors_img);
      $(".house").addClass('house-result-scissors');
      $(".result-text").text('YOU LOSS');

    } else if (this == document.querySelectorAll('.spr')[2] && randomIndex === 1) {
      scores -= 1;
      $(".score-score").text(scores);
      $(".middle-container").css('display', 'none');

      $(".result-container").fadeIn().css('display', 'flex');

      $(".pick").addClass('pick-result-rock');
      $(".pick-img").attr('src', rock_img);
      $(".house-img").attr('src', paper_img);
      $(".house").addClass('house-result-paper');
      $(".result-text").text('YOU LOSS');

    } else if (this == document.querySelectorAll('.spr')[2] && randomIndex === 2) {
      $(".middle-container").css('display', 'none');

      $(".result-container").fadeIn().css('display', 'flex');

      $(".pick").addClass('pick-result-rock');
      $(".pick-img").attr('src', rock_img);
      $(".house-img").attr('src', rock_img);
      $(".house").addClass('house-result-rock');
      $(".result-text").text('DRAW');

    } else if (this == document.querySelectorAll('.spr')[2] && randomIndex === 3) {
      scores += 1;
      $(".score-score").text(scores);
      $(".middle-container").css('display', 'none');

      $(".result-container").fadeIn().css('display', 'flex');

      $(".pick").addClass('pick-result-rock');
      $(".pick-img").attr('src', rock_img);
      $(".house-img").attr('src', scissors_img);
      $(".house").addClass('house-result-scissors');
      $(".result-text").text('YOU WIN');

    }

  });

}

document.querySelector("button").addEventListener("click", function() {

  $('.result-container').fadeOut();
  $('.middle-container').fadeIn().css('display', 'flex');
  $('.pick').removeClass('pick-result-scissors pick-result-paper pick-result-rock');
  $('.house').removeClass('house-result-scissors house-result-paper house-result-rock');


});
