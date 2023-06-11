$(document).ready(function () {
    $('.alert_btn').on("click",function () {
        alert('Hellow World');
    });
    $('.hide_btn').on("click",function () {
        $('.hide_msg').hide();
    });
    $('.show_btn').on("click",function () {
        $('.hide_msg').show();
    });
    $('.toggle_btn').on("click",function () {
        $('.hide_msg').toggle();
    });

    $('.fadeIn_btn').on("click",function () {
        $('.fade-text').fadeOut();
    });
    $('.fadeOut_btn').on("click",function () {
        $('.fade-text').fadeIn();
    });
    $('.fadeToggle_btn').on("click",function () {
        $('.fade-text').fadeToggle(1000);
    });
    $('.ques').on("click",function () {
        $('.ans').slideToggle(1000);
    });
    $(".animation_btn").on("click",function(){
        $(".animation").animate({left: '250px'});
    });
    $(".slide_btn").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
    $("#btn1").on("click",function(){
        $("#test1").text("Hello world!");
      });
      $("#btn2").on("click",function(){
        $("#test2").html("<b>Hello world!</b>");
      });
      $(".btn3").on("click",function(){
        $("#test3").val('jquery');
      });
      $("#app_btn").on("click",function(){
        $("ol").append("<li>Jquery</li>");
      });
      $("#app_btn2").on("click",function(){
        $(".app_text").append("Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
      });
      $("#pre_btn").on("click",function(){
        $("#pre_ol").prepend("<li>HTML</li>");
      });
      $("#before_text").on("click",function(){
        $("img").before("<i>After</i>");

        //$(".img").before("<img src='./images/javascript-images-3.png'>");
      });
    
      $("#after_text").on("click",function(){
        $("img").after("<i>After</i>");
        //$(".img").after("<img src='./images/PHP-logo.png'>");

      });
      $(".color_btn").on("click",function(){
        $("p").css({"background-color": "yellow", "font-size": "200%"});
      });
      $(".remove-btn").on("click",function(){
        $("#div1").remove();
      });
      $(".empty-btn").on("click",function(){
        $("#div2").empty();
      });
      $(".h1").on("mouseenter",function(){
        $(".h1").addClass("red");
      });
      $(".h1").on("mouseleave",function(){
        $(".h1").removeClass("red");
      });
      $(".h2").on("mouseenter",function(){
        $(".h2").addClass("font_size");
      });
      $(".h2").on("mouseleave",function(){
        $(".h2").removeClass("font_size");
      });
      $(".p").on("mouseenter",function(){
        $(".p").addClass("bg_color");
      });
      $(".p").on("mouseleave",function(){
        $(".p").removeClass("bg_color");
      });
})
