function red(){
	let a=document.getElementById("h1");
	a.style.background="red";
}


function blue(){
	let a=document.getElementById("h1");
	a.style.background="blue";
}

function as(){
	let aa=prompt("ingrese un numero:","");
	let bb=prompt("ingrese otro numero:","");
	let cc=Number(aa)+Number(bb);
	alert("el resultado es: "+cc);
}

//as();

function sumaa(){
	var a=document.getElementById("A").value
	var b=document.getElementById("B").value
	var elem = document.getElementById('as');
	//elem.style.background='blue'
	//elem.style.color="white"
	elem.textContent=(Number(a)+Number(b))
}

function contpal(){
	let aa="hola"
	aa=document.getElementById("A").value
	var s=document.getElementById("as")
	s.textContent=aa.length
}
