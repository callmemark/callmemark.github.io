new WOW().init();


const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const repo = document.querySelector("#repo")
const aiWebsite = document.querySelector("#aiWebsite")
const html_graph_canvas = document.querySelector("#html_chart")
const css_graph_canvas = document.querySelector("#css_chart")
const javascript_graph_canvas = document.querySelector("#javascript_chart")
const python_graph_canvas = document.querySelector("#python_chart")
const overall_chart = document.querySelector("#overall_chart")
const overall_graph = document.querySelector("#overall_graph")
const github_button = document.querySelector("#github_button")
const html_icon = document.querySelector("#html_icon")
const css_icon = document.querySelector("#css_icon")
const js_icon = document.querySelector("#js_icon")
const python_icon = document.querySelector("#python_icon")
const web_dev_sample_card = document.querySelector(".web_dev_sample_card")
const image_card_1 = document.querySelector("#image_card_1")
const image_card_2 = document.querySelector("#image_card_2")
const image_card_3 = document.querySelector("#image_card_3")


const openPage = (element, link)=>{
	element.onclick = ()=>{
		window.open(link)
	}

	element.style.cursor =  "pointer";
}

const stand_by = null

openPage(about, stand_by)
openPage(contact, stand_by)
openPage(repo, "https://github.com/callmemark")
openPage(aiWebsite, "http://projectai.epizy.com/")
openPage(github_button, "https://github.com/callmemark")



const dougnutGraph = (element, data_set, background_colors, border_color, label)=>{
	data = {
	    datasets: [{data: data_set,
	    backgroundColor: background_colors,
	    borderColor: border_color
	}],
	    labels: label,
	};

	const dougnut = new Chart(element, {
	    type: 'doughnut',
	    data: data,
	});
}



const polarAreaGraph = (element, data_set, labels, background_color, border_color)=>{
	data = {
	    datasets: [{ data: data_set,
	    backgroundColor: background_color,
	    borderColor: border_color
	}],
	    labels: labels};


	const polar_area = new Chart(element, {
	    data: data,
	    type: 'polarArea',
	});
}



const barGraph = (element, data_set, labels, background_color, border_color)=>{
	var ctx = document.getElementById('myChart');
	var myChart = new Chart(element, {
	    type: 'bar',
	    data: {
	        labels: labels,
	        datasets: [{
	            label: "GOAL",
	            data: data_set,
	            backgroundColor: background_color,
	            borderColor: border_color,
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});
}


const html_data = [90, 20]
const html_background_colors = ['rgba(255, 76, 36, 1)', 'rgba(224, 224, 224, 1)'] 
const html_label = ["html Proficientcy", "goal"]
const html_border_color = ['rgba(255, 47, 0, 1)', 'rgba(212, 212, 212, 1)']
 

const css_data = [80, 20]
const css_background_colors = ['rgba(3, 226, 255, 1)', 'rgba(224, 224, 224, 1)']
const css_label = ["css Proficientcy", "goal"]
const css_border_color = ['rgba(0, 198, 224, 1)', 'rgba(212, 212, 212, 1)']



const js_data = [70, 40]
const js_background_colors = ['rgba(255, 234, 0, 1)', 'rgba(224, 224, 224, 1)']
const js_label = ["javascript Proficientcy", "goal"]
const js_border_color = ['rgba(224, 206, 0, 1)', 'rgba(212, 212, 212, 1)']



const python_data = [80, 20]
const python_background_colors = ['rgba(92, 163, 255, 1)', 'rgba(224, 224, 224, 1)']
const python_label = ["python Proficientcy", "goal"]
const python_border_color = ['rgba(25, 125, 255, 1)', 'rgba(212, 212, 212, 1)']



const all_data = [100, 90, 80, 70, 80]
const all_labels = ["goal", "css", "js", "python", "html"]
const all_backgrounds = ['rgba(212, 212, 212, 1)',
						'rgba(3, 226, 255, 1)', 
						'rgba(255, 234, 0, 1)',
						'rgba(92, 163, 255, 1)',
						'rgba(255, 76, 36, 1)',]

const all_border_colors = ['rgba(212, 212, 212, .5)',
							'rgba(0, 198, 224, .5)',
							'rgba(224, 206, 0, .5)',
							'rgba(25, 125, 255, .5)',
							'rgba(255, 47, 0, .5)']

const all_borders = ["rgba(171, 171, 171, 1)",
						"rgba(171, 171, 171, 1)",
						"rgba(171, 171, 171, 1)",
						"rgba(171, 171, 171, 1)",
						"rgba(171, 171, 171, 1)"]	


barGraph(overall_graph, all_data, all_labels, all_backgrounds, all_border_colors)
polarAreaGraph(overall_chart, all_data, all_labels, all_backgrounds, all_borders)



const reveal = new WOW({
	boxClass: "doughnut_graph_scroll_trigger",
	offset: 0,
	callback: function(){
		html_icon.style.opacity = "1"
		css_icon.style.opacity = "1"
		js_icon.style.opacity = "1"
		python_icon.style.opacity = "1"
		dougnutGraph(python_graph_canvas, python_data, python_background_colors, python_border_color, python_label)
		dougnutGraph(javascript_graph_canvas, js_data, js_background_colors, js_border_color, js_label)
		dougnutGraph(css_graph_canvas, css_data, css_background_colors, css_border_color, css_label)
		dougnutGraph(html_graph_canvas, html_data, html_background_colors, html_border_color, html_label)	
	}
})


web_dev_sample_card.onmouseover = ()=>{
	anime({
		targets: "#image_card_2, #image_card_3",
		translateY: 50,
		translateX:  50
	})
}

web_dev_sample_card.onmouseout = ()=>{
	anime({
		targets: "#image_card_2 , #image_card_3",
		translateY: 0,
		translateX: 0
	})
}

const webdev_card_reveal = new WOW({
	boxClass: 'web_dev_sample_card',
	mobile: true,
	callback: function(){
		anime({
			targets: "#image_card_2, #image_card_3",
			translateY: 50,
			translateX:  50,
			delay: 300
		})
		setTimeout(()=>{
			anime({
				targets: "#image_card_2 , #image_card_3",
				translateY: 0,
				translateX: 0,
			})
		}, 2000)
	}
})


reveal.init();
webdev_card_reveal.init()