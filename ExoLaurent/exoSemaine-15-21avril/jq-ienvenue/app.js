$("button").on("click",function(){
$("input").each(function(){
    $("#username").text($("#first_name").val()+" "+$("#last_name").val())
})

})
