const letters = [
	document.querySelector("#letter_l").innerHTML,
	document.querySelector("#letter_o").innerHTML,
	document.querySelector("#letter_a").innerHTML,
	document.querySelector("#letter_d").innerHTML,
	document.querySelector("#letter_i").innerHTML,
	document.querySelector("#letter_n").innerHTML,
	document.querySelector("#letter_n").innerHTML
	]

const loading_anim = ()=>{
	anime({
	  targets: "#letter_l",
	  translateY: -50,
	  direction: 'alternate',
	  delay: 100,
	  loop: true,
	  easing: 'easeInOutSine'
	});

	anime({
	  targets: "#letter_o",
	  translateY: -50,
	  direction: 'alternate',
	  delay: 150,
	  loop: true,
	  easing: 'easeInOutSine'
	});
	anime({
	  targets: "#letter_a",
	  translateY: -50,
	  direction: 'alternate',
	  delay: 200,
	  loop: true,
	  easing: 'easeInOutSine'
	});
	anime({
	  targets: "#letter_d",
	  translateY: -50,
	  direction: 'alternate',
	  delay: 250,
	  loop: true,
	  easing: 'easeInOutSine'
	});
	anime({
	  targets: "#letter_i",
	  translateY: -50,
	  direction: 'alternate',
	  delay: 300,
	  loop: true,
	  easing: 'easeInOutSine'
	});
	anime({
	  targets: "#letter_n",
	  translateY: -50,
	  direction: 'alternate',
	  delay: 350,
	  loop: true,
	  easing: 'easeInOutSine'
	});
	anime({
	  targets: "#letter_g",
	  translateY: -50,
	  direction: 'alternate',
	  delay: 400,
	  loop: true,
	  easing: 'easeInOutSine'
	});
}


loading_anim()

const loader_off = ()=>{
	loader.style.display = "none"
}

const loading_func = ()=>{
	loader_off()
	loading_anim()
}
