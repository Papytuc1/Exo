/* var panda = document.querySelectorAll(".panda");
for(i=0;i<panda.length;i++){
    panda[i].onclick=function(){
        alert("data-type : "+this.getAttribute("data-type")+" data-tendance : "+this.getAttribute('data-tendance'))
    }
}
console.log(panda) */

$('.panda').on("click",function() {
    alert( "data-type : "+$(this).data('type')+" data-tendance : "+$(this).data('tendance'));
});