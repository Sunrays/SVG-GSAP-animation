var rakutenAnimDone = {
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0
};
var tSlide1, tSlides;


/* VALIDATION  --------------------------------------------*/
/* VALIDATE EMAIL  --------------------------------*/
function validateEmail(emailDom) {
	var boolean = true;
    var email = emailDom.val();
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regex2 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(freolabs|wuaki|kobo|slice|viber|rakuten)\.+[a-zA-Z]{2,}$/;
    var errorMsg = 'Please enter the correct email address';
    emailDom.closest('.form-row').removeClass('error-msg');
    emailDom.next('.error-field').empty();
    if(email === '') {
        errorMsg = 'Please enter the email address';
        emailDom.closest('.form-row').addClass('error-msg');
        emailDom.next('.error-field').html(errorMsg);
        boolean = false;
        //return false;
    } else if(!regex.test(email)) {
        errorMsg = 'Email address is incorrect';
        emailDom.closest('.form-row').addClass('error-msg');
        emailDom.next('.error-field').html(errorMsg);
        boolean = false;
        //return false;
    } else if(!regex2.test(email)) {
        errorMsg = 'Please enter your Rakuten domain e-mail ID';
        emailDom.closest('.form-row').addClass('error-msg');
        emailDom.next('.error-field').html(errorMsg);
        boolean = false;
    } else {
        //return true;
    }
    return boolean;
}


/* CHECK FOR EMPTY FIELDS  --------------------------------*/
function checkEmptyFields(form) {
	var boolean = true;
    var errorMsg = 'Please fill this field';

    $('.signup-form :input').map(function(index) {
        $(this).closest('.form-row').removeClass('error-msg');
        $(this).next('.error-field').empty();
        if ($(this).val() === '' || !$(this).val()) {
            switch ($(this).attr('id')) {
                case 'regName':
                    errorMsg = 'Please type your name'
                    break;
                case 'regCompany':
                    errorMsg = 'Please type your company name'
                    break;
                case 'regEmail':
                    errorMsg = 'Please type your e-mail ID'
                    break;
            }

            $(this).closest('.form-row').addClass('error-msg');
            $(this).next('.error-field').html(errorMsg);
            console.log('No value for #' + $(this).attr('id'));
            boolean = false;
            // return false;
        } else {
            $(this).closest('.form-row').removeClass('error-msg');
	        $(this).next('.error-field').empty();
            // return true;
        }
    });
    return boolean;
}

/* VALIDATE REGISTERATION  --------------------------------*/
function validateRegister(regData) {
    var url = 'http://admin.rakutenmarketers.com/comingsoonsignup';
    var settings = {
        url: url,
        type: 'POST',
        dataType: 'json',
        data: regData,
    };

    $('html').removeClass('page-loaded');
    $.ajax(settings).done(function(response) {
        $('html').addClass('page-loaded');
        if(response.status === true) {
            $('#thanksPopup').show();
            /*TweenMax.to($('#thanksPopup'), 0.3, {
                display: 'block',
                autoAlpha: 1,
                ease: Linear.easeNone
            });*/
        } else {
            $('#responsePopup').show();
            /*TweenMax.to($('#responsePopup'), 0.3, {
                display: 'block',
                autoAlpha: 1,
                ease: Linear.easeNone
            });
*/        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        $('html').removeClass('page-loaded');
        if(jqXHR.status == 403 || jqXHR.status == 405){
            $('.preloader-txt').html('Server error. ' + jqXHR.status + '. ' + textStatus + '. Please wait...');
            console.log('Server error. ' + jqXHR.status + '. ' + textStatus + '. ' + errorThrown);
            validateRegister(regData);
        }
        console.log('Server error. Please try again.');
    });}


/* SOUND EFFECTS  --------------------------------*/
var downSound = new Howl({
  src: ['sound/down-arrow.mp3', 'sound/down-arrow.ogg'],
/*  autoplay: true,
  loop: true,*/
  volume: 0.5,
  onend: function() {
    console.log('Down arrow sound played');
  }
});

var upSound = new Howl({
  src: ['sound/up-arrow.mp3', 'sound/up-arrow.ogg'],
  volume: 0.5,
  onend: function() {
    console.log('Up arrow sound played');
  }
});

var soapboxSound = new Howl({
  src: ['sound/soapbox.mp3', 'sound/soapbox.ogg'],
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Soapbox sound played');
  }
});

var paperSound = new Howl({
  src: ['sound/paper.mp3', 'sound/paper.ogg'],
  volume: 0.5,
  onend: function() {
    console.log('Paper sound played');
  }
});

var radioSound = new Howl({
  src: ['sound/radio.mp3', 'sound/radio.ogg'],
  volume: 0.5,
  loop: true,
  onend: function() {
    console.log('Radio sound played');
  }
});

var noiceSound = new Howl({
  src: ['sound/noice.mp3', 'sound/noice.ogg'],
  loop: true,
  onend: function() {
    console.log('Noice sound played');
  }
});

var sipSound = new Howl({
  src: ['sound/sipping.mp3', 'sound/sipping.ogg'],
  volume: 0.5,
  onend: function() {
    console.log('Sipping sound played');
  }
});

var swishSound = new Howl({
  src: ['sound/swish.mp3', 'sound/swish.ogg'],
  volume: 0.5,
  onend: function() {
    console.log('Swish sound played');
  }
});

var popSound = new Howl({
  src: ['sound/pop.mp3', 'sound/pop.ogg'],
  onend: function() {
    console.log('Pop sound played');
  }
});

var swirlSound = new Howl({
  src: ['sound/swirl.mp3', 'sound/swirl.ogg'],
  volume: 0.2,
  onend: function() {
    console.log('Swirl sound played');
  }
});

var btnSound = new Howl({
  src: ['sound/btn.mp3', 'sound/btn.ogg'],
  onend: function() {
    console.log('Button sound played');
  }
});


$(function() {
    var timestamp = Date.now();
    $("head").append($("<link/>", { rel: "stylesheet", href: "css/main.css?v="+timestamp, type: "text/css", name: "main-styles" }));

	input_interaction();

    var tPreloader = setTimeout(function() {
                        loaderAnim();
                    }, 500);

	$('.signup-link').click(function() {
        btnSound.play();
		var tSignup = new TimelineMax();

// HIDE NAVIGATION
		$('.side.right').hide();

// DISALLOW SLIDING TO OTHER SCREENS
		window.allowSlide = 0;

		tSignup.to('.signup-screen-1', 0.5, {
					autoAlpha: 0,
					display: 'none',
					ease: Power1.easeOut
				})
				.to('.signup-screen-2', 0.5, {
					autoAlpha: 1,
					display: 'block',
					ease: Power1.easeOut
				});
	});

	$('.ok-btn').click(function() {
        btnSound.play();
		location.reload();
	});

	$('#signupBtn').click(function(e) {
		e.preventDefault();
        btnSound.play();

		var regData = $('.signup-form :input').serialize();
		if(checkEmptyFields($('.signup-form'))) {
			if(validateEmail($('#regEmail'))) {
				validateRegister(regData);
			}
		}
		/*checkEmptyFields($('.signup-form'))
	        && validateEmail($('#regEmail'))`
	            && validateRegister(regData);*/
	});

// CHANGE SLIDE AUTOMATICALLY
    tSlide1 = setTimeout(function() {
        window.changeSlide('increase');
        tSlides = setInterval(function() {
            console.log('tSlides setInterval -> ' + tSlides);
            window.changeSlide('increase');
            console.log('tSlides setInterval cleared -> ' + tSlides);
        }, 12000);
    }, 3000);

    $('.scroll-down').on('mouseup touchstart', function() {
        clearInterval(tSlide1);
        clearInterval(tSlides);
        tSlides = 0;
        tSlide1 = 0;
        downSound.play();
    });
    $('.prevSlide, .nextSlide').on('mouseup touchstart', function() {
        clearInterval(tSlide1);
        clearInterval(tSlides);
        tSlides = 0;
        tSlide1 = 0;
    });
    $('.prevSlide').on('mouseup touchstart', function() {
        upSound.play();
    });
    $('.nextSlide').on('mouseup touchstart', function() {
        downSound.play();
    });
});


window.setHashLink = 0;
// window.disableOnScroll = 1;

$(window).on('slideChange',function(event, number, element){
	//Your code here, for example:
	// console.log( "Current slide is " + $(element).data('title') + " #" + number);

    if(number === 1) {  
        $('.header').addClass('slide1-header');
        soapboxSound.stop();
        homeAnim();
    } else if(number > 1) {        
		$('.header-num').html('0' + (number - 1));
		$('.header').removeClass('slide1-header');
		// $('.slide[name="slide1"]').remove();
		// $('body').removeClass('firstSlide');

        switch (number) {
            case 2:
                paperSound.stop();
                radioSound.pause();
                sipSound.stop();
                sipSound.mute();
                noiceSound.stop();
                if(rakutenAnimDone['2'] === 0) {
                    soapAnim();
                    rakutenAnimDone['2'] = 1;
                } else if(rakutenAnimDone['2'] === 1) {
                    soapboxSound.play();
                }
                break;
            case 3:
                paperSound.stop();
                sipSound.stop();
                soapboxSound.stop();
                noiceSound.stop();
                if(rakutenAnimDone['3'] === 0) {
                    printTvAnim();
                    rakutenAnimDone['3'] = 1;
                } else if(rakutenAnimDone['3'] = 1) {
                    radioSound.play();
                }
                break;
            case 4:
                paperSound.stop();
                radioSound.pause();
                soapboxSound.stop();
                if(rakutenAnimDone['4'] === 0) {
                    marketersAnim();
                    rakutenAnimDone['4'] = 1;
                } else if (rakutenAnimDone['4'] === 1) {
                    noiceSound.play();
                    sipSound.mute();
                }
                break;
            case 5:
                soapboxSound.stop();
                paperSound.stop();
                radioSound.pause();
                sipSound.stop();
                sipSound.mute();
                noiceSound.stop();
                if(rakutenAnimDone['5'] === 0) {
                    wwwAnim();
                    rakutenAnimDone['5'] = 1;
                }
                break;
            case 6:
                paperSound.stop();
                radioSound.pause();
                sipSound.stop();
                soapboxSound.stop();
                noiceSound.stop();
                if(rakutenAnimDone['6'] === 0) {
                    ratingAnim();
                    rakutenAnimDone['6'] = 1;
                }
                break;
            case 7:
                paperSound.stop();
                radioSound.pause();
                sipSound.stop();
                soapboxSound.stop();
                noiceSound.stop();
                if(rakutenAnimDone['7'] === 0) {
                    togetherAnim();
                    rakutenAnimDone['7'] = 1;
                }
                break;
            default:
                paperSound.stop();
                radioSound.pause();
                sipSound.stop();
                soapboxSound.stop();
                noiceSound.stop();
                break;
        }
	}
});


// ANIMATIONS ---------------------------
function homeAnim() {
    var tHome = new TimelineMax();
    tHome.staggerFrom($('.header-name div'), 0.4, {
                x: 30,
                ease: Power1.easeOut
            }, 0.1, 0.6)
            .to($('.scroll-down__arr'), 0.8, {
                y: 10,
                repeat: -1,
                yoyo: true,
                ease: Linear.easeOut
            });
}


// SPEAKER - SOAPBOX ANIMATION
function soapAnim() {
    var tSoap = new TimelineMax({
        repeat: -1,
    });
    var coneIllus = $('.cone-illus');
    var soundLines = $('.sound-lines path');
    var twinklers = $('.twinklers polygon');

    soapboxSound.play();

    TweenMax.set(['.sound-lines path', '.twinklers polygon'], {
                    autoAlpha:0,
                    transformOrigin: 'center center'});

    TweenMax.fromTo('.soapbox-illus', 0.6, {
                        autoAlpha: 0,
                        y: -60,
                        ease: Power1.easeOut
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        ease: Power1.easeOut
                    });
    TweenMax.from(coneIllus, 0.4, {
            y: -30,
            transformOrigin: 'left bottom',
            ease: Bounce.easeOut,
            onComplete: function() {
                TweenMax.to(coneIllus, 0.4, {
                        scale: 1.02,
                        rotation: '-3', 
                        ease: Bounce.easeOut,
                        repeat: -1,
                        yoyo: true
                    });
            }
        }, '-=0.3');
    TweenMax.to([soundLines, twinklers], 0.3, {
            autoAlpha: 1,
            ease: Power1.easeOut
        });
    tSoap.staggerTo(soundLines, 0.4, {
            ease: Bounce.easeOut,
            scale: 1.3
        }, 0.1)
        .staggerTo(twinklers, 0.4, {
            ease: Bounce.easeOut,
            rotation: '-3', 
            scale: 1.4
        }, 0.1, 0);
}


// PRINT TV
function printTvAnim() {
    var tPrintTv = new TimelineMax();
    var tPrintTv2 = new TimelineMax({
                    repeat: -1,
                    yoyo: true,
                });
    var tPrintTv3 = new TimelineMax({
                    repeat: -1,
                    yoyo: true,
                });
    var onePaper = $('.one-paper');
    var paperStack = $('.paper-stack');
    var radio = $('.radio');
    var tv = $('.tv');
    var radioWaves = $('.radio-waves');
    var radioStars = $('.radio-star');
    var tvStars = $('.tv-stars polygon');
    var tvShine = $('.tv-shine3');
    var tvScreen = $('.tv-screen-white');
    var tvGlare1 = $('.tv-glare1');
    var tvGlare2 = $('.tv-glare2');

    TweenMax.set([paperStack, onePaper, radio, tv], {autoAlpha: 0, y: -60});
    TweenMax.set([radio, tv], {autoAlpha: 0, y: -100});
    TweenMax.set([radioWaves, radioStars], {autoAlpha: 0, transformOrigin: 'center center'});
    TweenMax.set(tvStars, {autoAlpha: 0});

    paperSound.play();
    tPrintTv.to(paperStack, 0.6, {
                autoAlpha: 1,
                y: 0,
                ease: Power1.easeOut,
                onComplete: function(){
                }
            })
        .to(onePaper, 0.6, {
                autoAlpha: 1,
                y: 0,
                ease: Power1.easeOut
            }, '-=0.2')
        .to(radio, 0.6, {
                autoAlpha: 1,
                y: 0,
                ease: Power1.easeOut,
                onComplete: function() {
                    TweenMax.to([radioWaves, radioStars], 0.2, {
                        autoAlpha: 1,
                    });
                    radioSound.play();
                }
            }, '0.6')
        .to(tv, 0.6, {
                autoAlpha: 1,
                y: 0,
                ease: Power1.easeOut,
                onComplete: function() {
                    TweenMax.to(tvStars, 0.3, {autoAlpha: 1, scale: 1.4});
                    TweenMax.staggerTo(tvStars, 0.6, {
                                    scale: 0.8,
                                    transformOrigin: 'center center',
                                    repeat: -1,
                                    repeatDelay: 0.6
                                }, 0.3);
                    TweenMax.set(tvScreen, {autoAlpha: 0});
                    TweenMax.to(tvScreen, 0.3, {
                                    autoAlpha: 1,
                                    ease: Bounce.easeOut,
                                    repeat: -1,
                                    repeatDelay: 2,
                                    // ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),
                                });
                    TweenMax.to(tvGlare1, 4, {
                                    y: -80,
                                    ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),
                                    repeat: -1,
                                });
                    TweenMax.to(tvGlare2, 10, {
                                    y: -60,
                                    ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),
                                    repeat: -1,
                                });

                }
            }, '0.8');

    tPrintTv2.staggerTo(radioWaves, 0.1, {
                        scale: 1.2,
                        ease: Bounce.easeOut
                    }, '-=0.05')
    tPrintTv3.staggerTo(radioStars, 0.2, {
                    scale: 1.4,
                    ease: Bounce.easeOut
                }, 0.08);
// PRINT TV ENDS
}


// MARKETERS ANIMATION - STAGE 4
function marketersAnim() {
    var tMarket1 = new TimelineMax({
        repeat: -1,
        yoyo: true,
        repeatDelay: 2,
    });
    var tMarket2 = new TimelineMax({
        repeat: -1
    });
    var tMarket3 = new TimelineMax({
        repeat: -1,
        // repeatDelay: 0.8,
    });

    var handCup = $('.hand-cup');
    var arm = $('.arm-illus');
    var steam = $('.steam-illus path');
    var leftArr = $('.left-arrows path');
    var rightArr = $('.right-arrows path');
    var leftArrMarks = $('.left-arrows polygon');
    var rightArrMarks = $('.right-arrows polygon');

    noiceSound.play();

    TweenMax.set(arm, {transformOrigin: '0, 60',  rotation: 15});
    TweenMax.set(handCup, {x:13, y: 19});
    TweenMax.set(leftArr, {drawSVG:'0%', autoAlpha: 0});
    TweenMax.set(rightArr, {drawSVG:'0%', autoAlpha: 0});
    TweenMax.set(leftArrMarks, {autoAlpha: 0});
    TweenMax.set(rightArrMarks, {autoAlpha: 0});

    tMarket1.to(arm, 3, {
                transformOrigin: '0, 60',
                rotation: 0,
                ease: Power1.easeInOut,
                /*repeat: -1,
                yoyo: true*/
            })
        .to(handCup, 3, {
                x: 0,
                y: 0,
                ease: Power1.easeInOut,
                onComplete: function() {
                    if($('body').hasClass('stage-4')) {
                        sipSound.volume(1.0);                    
                        sipSound.play();
                    }
                }
            }, 0)
        .to('.head-illus', 3, {
                y: 5,
                ease: Power1.easeInOut,
                }, 0);

    tMarket2.staggerTo(leftArr, 0.4, {
            autoAlpha: 1,
            ease: Power1.easeNone,
        })
        .staggerTo(leftArr, 0.6, {
            drawSVG:'100%',
            ease: Power0.easeNone,
        }, 0.1)
        .to(leftArrMarks, 0.1, {
            autoAlpha: 1,
            ease: Power0.easeNone,
        }, '-=0.3')
        .to(leftArrMarks, 0.1, {
            autoAlpha: 0,
            ease: Power0.easeNone,
            delay: 0.2,
        }, 'arrMarksHide')
        .to(leftArr, 0.4, {
            autoAlpha: 0,
            ease: Power0.easeNone,
        }, 'arrMarksHide')
        .staggerTo(rightArr, 0.1, {
            autoAlpha: 1,
            ease: Power0.easeNone,
        })
        .staggerTo(rightArr, 0.6, {
            drawSVG:'100%',
            ease: Power0.easeNone,
        }, 0.1)
        .to(rightArrMarks, 0.1, {
            autoAlpha: 1,
            ease: Power0.easeNone,
        }, '-=0.1')
        .to(rightArrMarks, 0.1, {
            autoAlpha: 0,
            ease: Power0.easeNone,
        });

    TweenMax.set(steam, {drawSVG:'0%'});
    tMarket3.to(steam, 2, {
                drawSVG:'100%',
                delay: 1
            })
            .to(steam, 0.6, {
                autoAlpha: 0,
                delay: 0.8,
            })
            .to(steam, 0.6, {
                drawSVG: '0%',
                delay: 1
            });
}


// WWW ANIMATION - STAGE 5
function wwwAnim() {
    var tWww = new TimelineMax({
                        repeat: -1,
                        repeatDelay: 3
                    });
    var tWww2 = new TimelineMax({
                        repeat: -1,
                        yoyo: true,
                    });
    var yChat = $('#yellowChat');
    var gChat = $('#greenChat');
    var rChat = $('#redChat');
    var wwwUser = $('.www-user');
    var textLine1 = $('.text-line1');
    var textLine2 = $('.text-line2');
    var textLine3 = $('.text-line3');
    var textLine4 = $('.text-line4');
    var mapSize = $('.globe-map')[0].getBBox().width;
    $('.globe-map').clone().appendTo('.map-holder').css('transform', 'translateX('+ mapSize +'px)');

    TweenMax.set(yChat, {transformOrigin: 'bottom right'});
    TweenMax.set(gChat, {transformOrigin: 'top right'});
    TweenMax.set(rChat, {transformOrigin: 'bottom left'});

    tWww.staggerFromTo([gChat, yChat, rChat], 0.6, {
                scale: 0,
                ease: Power1.easeOut,
            }, {
                scale: 1,
                ease: Power1.easeOut,
                onComplete: function() {
                    if($('body').hasClass('stage-5')) {
                        popSound.play();
                    }
                }
            }, 0.2)
        .fromTo(wwwUser, 0.3, {
                scale: 0,
                transformOrigin: 'center center',
                ease: Power1.easeOut
            }, {
                scale: 1,
                ease: Power1.easeOut
            }, 'afterUser')
        .fromTo(textLine1, 0.3, {
                drawSVG: 0,
            }, {
                drawSVG: '100%',
            }, 'afterUser')
        .fromTo(textLine2, 0.3, {
                drawSVG: 0,
            }, {
                drawSVG: '100%',
            })
        .fromTo(textLine3, 0.3, {
                drawSVG: 0,
            }, {
                drawSVG: '100%',
            })
        .fromTo(textLine4, 0.3, {
                drawSVG: 0,
            }, {
                drawSVG: '100%',
            })
        .staggerTo([gChat, yChat, rChat], 0.6, {
                scale: 0,
                ease: Power1.easeOut,
                delay: 5
            }, 0.2);

    tWww2.staggerFromTo([$('#stars2 path'), $('#stars4 path'), $('#stars1 path'), $('#stars3 path')], 0.3, {
            transformOrigin: 'center center',
            scale: 1.2,
            ease: Power1.easeOut
        }, {
            transformOrigin: 'center center',
            scale: 0.8,
            ease: Linear.easeNone
        }, 0.1, 0);

    TweenMax.fromTo($('.www-cloud1'), 10, {
            x: 30,
            repeat: -1,
            yoyo: true,
            ease: Linear.easeNone
        }, {
            x: -20,
            repeat: -1,
            yoyo: true,
            ease: Linear.easeNone
        });

    TweenMax.fromTo($('.www-cloud2'), 7, {
            x: 5,
            repeat: -1,
            yoyo: true,
            ease: Linear.easeNone
        }, {
            x: -30,
            repeat: -1,
            yoyo: true,
            ease: Linear.easeNone
        });

    // ROTATE THE GLOBE
    TweenMax.fromTo($('.map-holder'), 20, {
                x: '-' + mapSize,
                ease: Linear.easeNone,
                repeat: -1,
            }, {
                x: 0,
                ease: Linear.easeNone,
                repeat: -1,
            });
}



// RATING - MARKETERS LISTEN
function ratingAnim() {
    var tRating = new TimelineMax();
    var tRating2 = new TimelineMax({
        repeat: -1,
        repeatDelay: -1
    });
    var tablet = $('.tablet');
    var ratingHand = $('.rating-hand');
    var emoji = $('.emoji');
    var smileyActive = $('.smiley-active');

    TweenMax.set(emoji, {autoAlpha: 0, scale: 0.7, transformOrigin: 'center center'});
    TweenMax.set(tablet, {autoAlpha: 0, transformOrigin: 'left bottom', rotation: -20});
    TweenMax.set(ratingHand, {autoAlpha: 0, y: 30});
    TweenMax.set(smileyActive, {autoAlpha: 0});

    tRating.to(tablet, 0.5, {
                autoAlpha: 1,
                onComplete: function() {
                    swishSound.play();
                }
            })
            .to(tablet, 1, {
                rotation: 0
            }, 0)
            .staggerTo(emoji, 0.2, {
                autoAlpha: 1,
                scale: 1,
                ease: Power1.easeOut
            }, 0.1)
            .to(ratingHand, 0.3, {
                autoAlpha: 1,
            });

    tRating2.to(ratingHand, 0.3, {
                y: 0,
                delay: 2.4          
            }, '-=0.2')
            .to(ratingHand, 1, {
                x: -100,
                repeat: 1,
                yoyo: true,
                ease: Power1.easeOut
            })
            .to(ratingHand, 0.6, {
                x: 40,
                repeat: 1,
                yoyo: true,
                ease: Power1.easeOut
            })
            .to(ratingHand, 0.1, {
                y: -2,
                repeat: 1,
                yoyo: true,
            })
            .to(smileyActive, 0.2, {
                autoAlpha: 1,
                onComplete: function() {
                    if($('body').hasClass('stage-6')) {
                        popSound.play();
                    }
                }
            }, '-=0.1')
            .to(ratingHand, 0.3, {
                y: 30            
            })
            .to(smileyActive, 0.2, {
                autoAlpha: 0,
                delay: 1
            });
}
// RATING - MARKETERS LISTEN ENDS


// COME TOGETHER 
function togetherAnim() {
    var tTogether = new TimelineMax();
    var ctCircleGrp = $('.together-circle');
    var ctCircle = $('#togetherCircle');
    var ctShapes = $('#togetherShapes');
    TweenMax.set(ctCircleGrp, {scale: 0.8, transformOrigin: 'center center'});
    TweenMax.set(ctShapes, {scale: 0.3, transformOrigin: 'center center', autoAlpha: 0});

    tTogether.to(ctCircleGrp, 0.6, {
                    scale: 1,
                    ease: Power1.easeOut
                }, 2)
                .to(ctShapes, 0.6, {
                    autoAlpha: 1,
                    scale: 1,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        swirlSound.play();
                    }
                }, 2)
                .to(ctShapes, 1, {
                    rotation: 360,
                    scale: 0.3,
                })
                .to(ctCircle, 0.6, {
                    fill: '#ae262c',
                    ease: Power1.easeOut,
                })
                .to($('#togetherR'), 0.6, {
                    opacity: 1
                });
}
// COME TOGETHER ENDS


function loaderAnim() {
    tl = new TimelineMax({repeat:-1,});
    TweenMax.set(".ripple1",
        {
            scale:0.4
        });
    TweenMax.set(".ripple2",
        {
            scale:0.6,
        });
    TweenMax.set(".ripple3",
        {
            scale:0.8
        });
    TweenMax.to('.ripple3', 0.5, {
        scale: 1,
        opacity:1,
        repeat: -1,
        yoyo: true,
        onStart: function(){
            TweenMax.to('.ripple2', 0.5, {
                scale: 1.4,
                opacity:0.6,
                repeat: -1,
                yoyo: true,
                onStart: function(){
                    TweenMax.to('.ripple1', 0.5, {
                        scale: 1.7,
                        yoyo: true,
                        repeat: -1,
                        opacity:0.3,
                    });
                }
            });
        }
    });
    loaderBgChange();
}

function loaderBgChange(){
    TweenMax.to('.ripple', 0.5,{
        backgroundColor: '#be0000',
        onComplete:function(){
            TweenMax.to('.ripple', 0.5,{
                backgroundColor: '#f16429',
                onComplete:function(){
                    TweenMax.to('.ripple', 0.5,{
                        backgroundColor: '#ffcc30',
                        onComplete:function(){
                            TweenMax.to('.ripple', 0.5,{
                                backgroundColor: '#48af4a',
                                onComplete:function(){
                                    TweenMax.to('.ripple', 0.5,{
                                        backgroundColor: '#27bbb7',
                                        onComplete: function(){
                                            TweenMax.to('.ripple', 0.5,{
                                                backgroundColor:'#8f68ab',
                                                onComplete: function(){
                                                    loaderBgChange()
                                                }
                                            })

                                        }
                                    });
                                }
                            })
                        }
                    });
                }
            })
        }

    });
}