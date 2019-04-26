$("input").each(function(){
    let color = $(this).data("color")
    $(this).css("background-color",color)
})

$("input").on("click",function(){
    let color = $(this).data("color");
    if($("#modify-text").is(":checked")){
        $("section *").css("color",color)
    }
    else{
    $("section").css("background-color",color)
    }
})

