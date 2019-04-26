e=[];
$("button").on("click",function(){
    i=0;
$("input").each(function(index,value){
    e[i]=$(this).val();
    $("#username").text($("#first_name").val()+" "+$("#last_name").val())
    i++
})
console.log(JSON.parse(`{ "first-name": "${e[0]}","last-name": "${e[1]}","city-name": "${e[2]}"}`))
})
