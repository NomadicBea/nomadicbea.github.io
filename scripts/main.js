//load nav bar placeholder html file
$(function(){

    //$('.navbar').data('size','big');

    $("#nav-placeholder").load("nav.html");


    $('#action1, #action2, #action3, #action4, #action5, #action6, #action7').click(function () {
        if (this.id == 'action1') {
            var div1 = $('#showOrHideDiv1');
            div1.fadeToggle(500);
        }
        else if (this.id == 'action2') {
            var div2 = $('#showOrHideDiv2');
            div2.fadeToggle(500);
        }
        else if (this.id == 'action3') {
            var div3 = $('#showOrHideDiv3');
            div3.fadeToggle(500);
        }
        else if (this.id == 'action4') {
            var div4 = $('#showOrHideDiv4');
            div4.fadeToggle(500);
        }
        else if (this.id == 'action5') {
            var div4 = $('#showOrHideDiv5');
            div4.fadeToggle(500);
        }
        else if (this.id == 'action6') {
            var div4 = $('#showOrHideDiv6');
            div4.fadeToggle(500);
        }
        else if (this.id == 'action7') {
            var div7 = $('#showOrHideDiv7');
            div7.fadeToggle(500);
        }
    });


    $('.portfolio-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

});

//shrinking navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $(".navbar").css("padding", "10px");
        document.getElementById("logo").style.width = "75px";
        document.getElementById("nav-brand").style.fontSize = "1.2rem";
        document.getElementById("navbar-navv").style.fontSize = "1em";
    } else {
        $(".navbar").css("padding", "30px");
        document.getElementById("logo").style.width = "100px";
        document.getElementById("nav-brand").style.fontSize = "1.8rem";
        document.getElementById("navbar-navv").style.fontSize = "1.2em";

    }
}

function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.getElementById('pf-img').scrollTop;
    console.log(winScroll);
    var height = document.getElementById('pf-img').scrollHeight - document.getElementById('pf-img').clientHeight;
    console.log(height);
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled);
    document.getElementById("myBar").style.width = scrolled + "%";
}

