new WOW().init();

const repo = document.querySelector("#repo");
const aiWebsite = document.querySelector("#aiWebsite");
const html_graph_canvas = document.querySelector("#html_chart");
const css_graph_canvas = document.querySelector("#css_chart");
const javascript_graph_canvas = document.querySelector("#javascript_chart");
const python_graph_canvas = document.querySelector("#python_chart");
const overall_chart = document.querySelector("#overall_chart");
const overall_graph = document.querySelector("#overall_graph");
const github_button = document.querySelector("#github_button");
const html_icon = document.querySelector("#html_icon");
const css_icon = document.querySelector("#css_icon");
const js_icon = document.querySelector("#js_icon");
const python_icon = document.querySelector("#python_icon");
const web_dev_sample_card = document.querySelector(".web_dev_sample_card");
const image_card_1 = document.querySelector("#image_card_1");
const image_card_2 = document.querySelector("#image_card_2");
const image_card_3 = document.querySelector("#image_card_3");
const more_about_btn = document.querySelector("#more_about_btn");
const mygittext = document.querySelector("#mygittext");

const openPage = (element, link)=>{
	element.onclick = ()=>{
		window.open(link)
	}

	element.style.cursor =  "pointer";
}

openPage(repo, "https://github.com/callmemark")
openPage(aiWebsite, "http://projectai.epizy.com/")
openPage(github_button, "https://github.com/callmemark")
openPage(more_about_btn, "subpages/about.html")




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
	            label: labels,
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


const cssschema = 'rgba(47, 146, 245, .7)';
const htmlschema = 'rgba(245, 73, 47, .7)';
const jsschema = 'rgba(245, 222, 47, .7)';
const pythonschema = 'rgba(41, 88, 217, .7)';
const goalschema = 'rgba(163, 163, 163, .7)';
const goalborderschema =  'rgba(163, 163, 163, 1)';

const html_data = [90, 20];
const html_background_colors = [htmlschema, goalborderschema];
const html_label = ["html Proficientcy", "goal"];
const html_border_color = [htmlschema, goalborderschema];
 

const css_data = [80, 20];
const css_background_colors = [cssschema, goalborderschema];
const css_label = ["css Proficientcy", "goal"];
const css_border_color = [cssschema, goalborderschema];



const js_data = [70, 40];
const js_background_colors = [jsschema, goalborderschema];
const js_label = ["javascript Proficientcy", "goal"];
const js_border_color = [jsschema, goalborderschema];


const python_data = [80, 20]
const python_background_colors = [pythonschema, goalborderschema];
const python_label = ["python Proficientcy", "goal"];
const python_border_color = [pythonschema, goalborderschema];



const all_data = [100, 90, 80, 70, 80];
const all_labels = ["goal", "css", "js", "python", "html"];
const all_backgrounds = [goalschema,
						cssschema, 
						jsschema,
						pythonschema,
						htmlschema,];

const all_border_colors = ['rgba(66, 66, 66, .5)',
							'rgba(66, 66, 66, .5)',
							'rgba(66, 66, 66, .5)',
							'rgba(66, 66, 66, .5)',
							'rgba(66, 66, 66, .5)'];



barGraph(overall_graph, all_data, all_labels, all_backgrounds, all_border_colors)
polarAreaGraph(overall_chart, all_data, all_labels, all_backgrounds, all_border_colors)



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


new gridjs.Grid({
  columns: ["langugae", "mastery"],
  data: [
    ["jS", "70%"],
    ["python", "80%"],
    ["css", "80%"],
    ["html", "90%"],
    ["goal", "100%"]
  ],
  style: {
    th: {
      'background-color': 'rgba(74, 74, 74, 1)',
      color: '#e6e3e3',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
    td: {
      'background-color': 'rgba(227, 227, 227, 1)',
      color: '#242424',
    }
  }
}).render(document.getElementById("graph_table"));


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


const frontend_title = new WOW({
	boxClass: "web_dev_title",
	mobile: true,
	offset: 3,
	callback: function(){
		anime({
			targets: ".web_dev_title",
			translateX: 40,
 			easing: 'easeInOutQuad',
 			delay: 100
		})
	}
})


const python_title = new WOW({
	boxClass: "python_title",
	mobile: true,
	offset: 3,
	callback: function(){
		anime({
			targets: ".python_title",
			translateX: 40,
 			easing: 'easeInOutQuad',
 			delay: 200
		})
	}
})


reveal.init();
webdev_card_reveal.init()
frontend_title.init()
python_title.init()

new gridjs.Grid({
  columns: ["skill", "mastery"],
  data: [
    ["GUI programming", "86%"],
    ["Data Manipulation", "80%"],
    ["Data Visualisation", "90%"],
    ["Artificial Intilligence", "67%"]
  ],
  style: {
    th: {
      'background-color': 'rgba(36, 36, 36, 1)',
      color: '#e6e3e3',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
    td: {
      'background-color': 'rgba(227, 227, 227, 1)',
      color: '#242424',
    }
  }
}).render(document.getElementById("python_table"));
