// Set the date we're counting down to

var CountDownDate = new Date("May 31,2019 15:37:25").getTime();

var countdownfunction = setInterval(function(){

	// Update the count down every 1 second
	var now = new Date().getTime();

	var distance = CountDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000*60*60*24));
	var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
	var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
	var seconds = Math.floor((distance % (1000*60)) / (1000));

	// Output the result in an element with id="demo"
	document.getElementById("demo").innerHTML = days +"d" + hours + "h" + minutes + "m" + seconds + "s";

	// If the count down is over, write some text 
	if(distance <0 ) {
		
		clearInterval(countdownfunction);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);
