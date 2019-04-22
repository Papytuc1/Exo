$("#cree").on("click", function () {
    var color = $('input').val() || $('input').val("yellow");
    var div = $(`<div class='manip'></div>`).css("height", "50px").css("width", "50px")
        .css("background", "yellow").css("background", color).attr("data", color);

    $("#cadre").append(div);
})

$("#suprr").on("click", function () {
    var color = $('input').val();
    $("#cadre div").remove(`div[data=${color}]`)
})

$("#destroy").on("click", function () {
    $("#cadre").html("")
})
$("#write").on("click", function () {
    $("#cadre div").text($('input').val())
})
$("#empty").on("click", function () {
    $('input').val("")
    $("#cadre").html("")
})

$("#shake").on("click", function () {
    $("#cadre div").effect("shake", 2000)
    /* $("#cadre div").toggleClass("shake") */
})

$("#cadre").on("click", ".manip", function () {
    if ($(this).attr("data") == "red") {
        $(this).effect("explode", 1000, function () {
            $(this).remove();
        })
    } else if ($(this).attr("data") != "green" && $(this).attr("data") != "red" && $(this).attr("data") != "blue") {
        /* $(this).css("transition-delay","2s").css("background","red").attr("data","red") */
    }
})
$("#cadre").on("mouseover", ".manip", function () {
    if ($(this).attr("data") == "green") {
        $(this).css("background", "blue")
    }
})

$("#cadre").on("dblclick", ".manip", function () {
    let i = 0;
    let color = $(this).attr("data");
    $(`div[data=${color}]`).each(function () {
        i++
    })
    $("#dialog").dialog({
        modal: true,
        title: "Il y'a " + i + " Div de couleur " + color
    });
})
function remove() {
    if ($(".flocon").offset().top > $("body").innerHeight() * 2) {
        $(".flocon").remove();
    }
}

function flocon() {
    var body = $("body")
    $("<div class='flocon'></div>").prependTo("body");

    for (i = 0; i < body.innerHeight(); i++) {
            $(".flocon").animate({
                right: `${Math.floor(Math.random()*body.innerWidth())}px`
            }, 1000);
            $(".flocon").animate({
                top: `+=${Math.floor(Math.random()*body.innerHeight())}px`
            }, 1000);
        }
    }
flocon()
/* setInterval(flocon, 1000) */