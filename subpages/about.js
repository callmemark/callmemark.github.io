if (screen.width <= 900){
	document.querySelector("#phone_card").style.margin = " 10% 0%"
	document.querySelector("#text_area").style.height = "70vh"
}

const date = new Date();
const system_time = date.getHours() + ":" + date.getMinutes()

document.querySelector("#current_time").innerHTML = system_time
