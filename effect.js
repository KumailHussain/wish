$(window).load(function () {
  $(".loading").fadeOut("fast");
});
var width = 100;
var audio = $(".song")[0];
$("document").ready(function () {
  var vw;
  var gap = 0;
  $(window).resize(function () {
    vw = $(window).width() / 2;
    gap = 0;
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
    $("#b11").animate({ top: 240, left: vw - 350 }, 500);
    $("#b22").animate({ top: 240, left: vw - 250 + gap }, 500);
    $("#b33").animate({ top: 240, left: vw - 150 + gap }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 + gap }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 + gap }, 500);
    $("#b66").animate({ top: 240, left: vw + 150 + gap }, 500);
    $("#b77").animate({ top: 240, left: vw + 250 + gap }, 500);
    console.log("resize");
  });
  $("#login").click(function () {
    const username = $("#username").val();
    const password = $("#password").val();

    if (username === 'sidra' && password === 'PeTrA') {
    $("#wrapper").hide();
    $("#container").css("display", "block");
    $(".container").fadeIn("fast");
    $("#bannar").show();
    $("#turn_on").show();
    } else {
    	alert('Invalid credentials, you suck doody');
    }
  });
  $("#turn_on").click(function () {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    $("body").addClass("peach");
    $(this)
      .fadeOut("slow")
      .delay(2000)
      .promise()
      .done(function () {
        $("#play").fadeIn("slow");
      });
  });
  $("#play").click(function () {
    audio.play();
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("backgroud-color", "#FFF");
    $("body").addClass("peach-after");
    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#bannar_coming").fadeIn("slow");
      });
  });

  $("#bannar_coming").click(function () {
    $(".bannar").addClass("bannar-come");
    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#balloons_flying").fadeIn("slow");
      });
  });

  function loopOne() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b1").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopOne();
    });
  }
  function loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b2").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopTwo();
    });
  }
  function loopThree() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b3").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopThree();
    });
  }
  function loopFour() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b4").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFour();
    });
  }
  function loopFive() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b5").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFive();
    });
  }

  function loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b6").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSix();
    });
  }
  function loopSeven() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $("#b7").animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSeven();
    });
  }

  $("#balloons_flying").click(function () {
    $(".balloon-border").animate({ top: -500 }, 8000);
    $("#b1,#b4,#b5,#b7").addClass("balloons-rotate-behaviour-one");
    $("#b2,#b3,#b6").addClass("balloons-rotate-behaviour-two");
    // $('#b3').addClass('balloons-rotate-behaviour-two');
    // $('#b4').addClass('balloons-rotate-behaviour-one');
    // $('#b5').addClass('balloons-rotate-behaviour-one');
    // $('#b6').addClass('balloons-rotate-behaviour-two');
    // $('#b7').addClass('balloons-rotate-behaviour-one');
    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();

    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#cake_fadein").fadeIn("slow");
      });
  });

  $("#cake_fadein").click(function () {
    $(".cake").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#light_candle").fadeIn("slow");
      });
  });

  $("#light_candle").click(function () {
    $(".fuego").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .promise()
      .done(function () {
        $("#wish_message").fadeIn("slow");
      });
  });

  $("#wish_message").click(function () {
    console.log($(window).width());
    vw = $(window).width() / 2;
    var gap = 0,
      gap1 = 0,
      gap2 = 0,
      gap3 = 0,
      gap4 = 0,
      gap5 = 0,
      gap6 = 0;
    if (vw <= 500) {
      vw = $(window).width() / 2;
	  $(".balloons").css("background-size", "60px 100px");
      $(".balloons").css("width", "62px");
      gap = vw - 20;
      gap1 = 100;
      gap2 = 80;
      gap3 = 40;
      gap4 = 20;
      gap5 = -10;
      gap6 = -60;
      console.log("worked", vw);
    }

    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();
    $("#b1").attr("id", "b11");
    $("#b2").attr("id", "b22");
    $("#b3").attr("id", "b33");
    $("#b4").attr("id", "b44");
    $("#b5").attr("id", "b55");
    $("#b6").attr("id", "b66");
    $("#b7").attr("id", "b77");
    $("#b11").animate({ top: 240, left: vw - 350 + gap }, 500);
    $("#b22").animate({ top: 240, left: vw - 250 + gap1 }, 500);
    $("#b33").animate({ top: 240, left: vw - 150 + gap2 }, 500);
    $("#b44").animate({ top: 240, left: vw - 50 + gap3 }, 500);
    $("#b55").animate({ top: 240, left: vw + 50 + gap4 }, 500);
    $("#b66").animate({ top: 240, left: vw + 150 + gap5 }, 500);
    $("#b77").animate({ top: 240, left: vw + 250 + gap6 }, 500);
    $(".balloons").css("opacity", "0.9");
    $(".balloons h2").fadeIn(3000);
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#story").fadeIn("slow");
      });
  });

  $("#story").click(function () {
    $(this).fadeOut("slow");
    $(".cake")
      .fadeOut("fast")
      .promise()
      .done(function () {
        $(".message").fadeIn("slow");
      });

    var i;

    function msgLoop(i) {
      $("p:nth-child(" + i + ")")
        .fadeOut("slow")
        .delay(500)
        .promise()
        .done(function () {
          i = i + 1;
          $("p:nth-child(" + i + ")")
            .fadeIn("slow")
            .delay(550);
          if (i == 109) {
            $("p:nth-child(108)")
              .fadeOut("slow")
              .promise()
              .done(function () {
                $("#end").fadeIn("slow");
              });
          } else {
            msgLoop(i);
          }
        });
      // body...
    }

    msgLoop(0);
  });

  $("#end").click(function () {
    console.log("clicked..");
    var currentAudio = $(".song")[0];

    // Stop the current audio
    currentAudio.pause();
    currentAudio.currentTime = 0;

    // Change the source to the new song (assuming we have a second audio element)
    var newAudio = $(".song")[1];

    // Play the new song
    newAudio.play();
    $("#container").css("display", "none");
    $("#wrapper2").css("display", "block !important");
    $(".ballonsP").css("display", "none");
    $("#wrapper2").fadeIn("slow");
    $("body").removeClass("peach");
  });

  $("#adored").click(function () {
    $("#wrapper2").hide();
    $("#wrapper2").css("display", "none");

    $("#wrapper3").fadeIn("slow");
    $("#wrapper3").css("display", "block !important");
  });

  $("#loved").click(function () {
    $("#wrapper3").hide();
    $("#wrapper3").css("display", "none");
    $("#wrapper4").fadeIn("slow");
    $("#wrapper5").css("display", "block !important");
  });
});

//alert('hello');
