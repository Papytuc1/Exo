$(document).ready(function(){
	let i =0;
	$(".cake").on("click",function(){
		i++
		$(".counter").text(i)
		if(i==20){
			alert("trouve une activité plus intéréssante")
		}
		else if(i%20==0){
			alert(randStr())
		}
	})
});

function randStr(){
	let i = Math.floor(Math.random()*10);
	let str;
	switch(i){
		case 1:
		str = "Ca commence à faire long prend toi un café"
		break;
		case 2:
		str = "Tu as que ca à faire ?"
		break;
		case 3:
		str = "Wow tous ca de click INCROYABLE..."
		break;
		case 4:
		str = "tu dois bien t'embété quand même"
		break;
		case 5:
		str = "tu n'as pas de vie ?"
		break;
		case 6:
		str = "tu veux du cake ?"
		break;
		case 7:
		str = "ZzZZZzzzZZZZzzZZz"
		break;
		case 8:
		str = "C... et il click il click encore et toujours"
		break;
		case 9:
		str = "ca va ?"
		break;
		case 10:
		str = "Hello Darkness My Old Friend !!!"
		break;
		default: str = "err"
		break;
	}
	return str;
}