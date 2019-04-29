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
    if ($(".flocon").css("top") > screen) {
        $(".flocon").remove();
    }
}
var screen = 500;

function flocon() {
    var body = $("body")
    var rand = Math.floor(Math.random()*100);
    var div = $("<div class='flocon'></div>");
    div.css("right",`${rand}%`);
    div.prependTo("body");

    for (i = 0; i < body.innerHeight(); i++) {
            div.animate({
                right: `+=${Math.floor(Math.random()*0.1*body.innerWidth()*(Math.pow(-1,i)))}px`,
                top: `+=${Math.floor(Math.random()*body.innerHeight())}px`
            }, 1000);
            remove();
        }
    }
    flocon()
/* setInterval(flocon, 1000) */
