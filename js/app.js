console.log("javascript is loaded!")

var response ={};
var ZipCode = prompt("Enter A Zip-Code");
var body = document.body

$.ajax({
	url: 'http://api.openweathermap.org/data/2.5/weather?q=chicago&APPID=04849f8464f4937fdef24c56eb5cee01',
	type: "GET",
	dataType: 'json',
	success: function(data){
		console.log(data);
	response = data;
	var city = response.main.name;
	var temp = response.temp;
	var high = response.temp_max;
	var low =  response.temp_min;
	var description = response.description;

	var body = document.getElementsByTagName("body")[0];  //display city
	var whichCity = document.createElement("h1");
	document.body.appendChild(whichCity);
    whichCity.innerHTML = data.name;
   
    var temp = document.createElement("h2")  //display current tempin F degrees
    body.appendChild(temp);
    temp.innerHTML = "Now: " + Math.ceil(data.main.temp * (9/5)-459.67);
    console.log(temp.innerHTML)

    //display high and low temp in F degrees
    var high = document.createElement("p");
    body.appendChild(high);
    high.innerHTML = "High: " + Math.ceil(data.main.temp_max * (9/5)-459.67);
    console.log(high.innerHTML);

    var low = document.createElement("p");
    body.appendChild(low)
    low.innerHTML = "Low: " + Math.ceil(data.main.temp_min * (9/5)-459.67); 
    console.log(low.innerHTML);

    //display current weather description
    var description = document.createElement("p");
    body.appendChild(description);
    description.innerHTML = data.weather[0].description;
    console.log(description.innerHTML);


	},
	fail: function(error){
		console.log('error');
	}
});

