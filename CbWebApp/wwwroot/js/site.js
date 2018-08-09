// Google Maps

//function myMap() {
//    var myCenter = new google.maps.LatLng(-22.986742, -43.320850);
//    var mapTypeId = new google.maps.MapTypeId.HYBRID;
//    var mapCanvas = document.getElementById("map");
//    var mapOptions = { center: myCenter, zoom: 15, type: mapTypeId };
//    var map = new google.maps.Map(mapCanvas, mapOptions);
//    var marker = new google.maps.Marker({ position: myCenter });

//    marker.setMap(map);
//    // Zoom to 9 when clicking on marker
//    google.maps.event.addListener(marker, 'click', function () {
//        map.setZoom(20);
//        map.setCenter(marker.getPosition());
//    });
//}

// End Google Maps

// Clock canvas

//var canvas = document.getElementById("canvas");
//var ctx = canvas.getContext("2d");
//var radius = canvas.height / 2;
//ctx.translate(radius, radius);
//radius = radius * 0.90;
//setInterval(drawClock, 1000);


//function drawClock() {
//    drawFace(ctx, radius);
//    drawNumbers(ctx, radius);
//    drawTime(ctx, radius);
//}

//function drawFace(ctx, radius) {
//    var grad;
//    ctx.beginPath();
//    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
//    ctx.fillStyle = 'white';

//    ctx.fill();
//    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
//    grad.addColorStop(0, '#333');
//    grad.addColorStop(0.5, 'white');
//    grad.addColorStop(1, '#333');
//    ctx.strokeStyle = grad;
//    ctx.lineWidth = radius * 0.1;
//    ctx.stroke();
//    ctx.beginPath();
//    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
//    ctx.fillStyle = '#333';
//    ctx.fill();

//}

//function drawNumbers(ctx, radius) {
//    var ang;
//    var num;

//    ctx.font = radius * 0.15 + "px arial";
//    ctx.textBaseline = "middle";
//    ctx.textAlign = "center";
//    for (num = 1; num < 13; num++) {
//        ang = num * Math.PI / 6;
//        ctx.rotate(ang);
//        ctx.translate(0, -radius * 0.85);
//        ctx.rotate(-ang);
//        ctx.fillText(num.toString(), 0, 0);
//        ctx.rotate(ang);
//        ctx.translate(0, radius * 0.85);
//        ctx.rotate(-ang);
//    }
//    ctx.font = 'bold 14px Calibri';
//    ctx.fillStyle = 'black'; 
//    ctx.fillText('Brazil', 0, 20);

//}

//function drawTime(ctx, radius) {
//    var now = new Date();
//    var hour = now.getHours();
//    var minute = now.getMinutes();
//    var second = now.getSeconds();
//    //hour
//    hour = hour % 12;
//    hour = (hour * Math.PI / 6) +
//        (minute * Math.PI / (6 * 60)) +
//        (second * Math.PI / (360 * 60));
//    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
//    //minute
//    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
//    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
//    // second
//    second = (second * Math.PI / 30);
//    drawHand(ctx, second, radius * 0.9, radius * 0.02);
//}

//function drawHand(ctx, pos, length, width) {
//    ctx.beginPath();
//    ctx.lineWidth = width;
//    ctx.lineCap = "round";
//    ctx.moveTo(0, 0);
//    ctx.rotate(pos);
//    ctx.lineTo(0, -length);
//    ctx.stroke();
//    ctx.rotate(-pos);
//}

// end Clock canvas

// Página principal

$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                
            });
        }
        $('html, body').animate({ scrollTop: 0 }, 'fast');
     });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

// End da Página Principal

// Mudar o background do Body

//my_element_jq = $("video");
//comment = document.createComment(my_element_jq.get(0).outerHTML);
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            //my_element_jq = $("video");
            //my_element_jq.replaceWith(comment);
            $("body").addClass("changeColor")
            $("video").addClass("video2")
        }
        if ($(this).scrollTop() < 50) {
            //$(comment).replaceWith(comment.nodeValue);
            $("body").removeClass("changeColor")
            $("video").addClass("video")
            $("video").removeClass("video2")
        }
    });
});

 // End Mudar background do body


