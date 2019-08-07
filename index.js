window.onload = function() {
	let agree=document.querySelector("#agree")
	agree.onclick=function(){
		alert("给你买糖吃 o(*￣︶￣*)o")
	}

	let disagree=document.querySelector("#disagree")
	disagree.onmouseenter=function(){
		let x=Math.random()*600
		let y=Math.random()*300
		disagree.style.left=x+"px"
		disagree.style.top=y+"px"
	}
}