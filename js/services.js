var pedi = document.getElementsByClassName("pedi");
var mani = document.getElementsByClassName("mani");
var sns = document.getElementsByClassName("sns");
var face = document.getElementsByClassName("face");
var wax = document.getElementsByClassName("wax");
var eyelash = document.getElementsByClassName("eyelash");
var microblade = document.getElementsByClassName("microblade");
var addservices = document.getElementsByClassName("addservices");

pedicures();
function pedicures(){
	document.getElementsByClassName("feet")[0].style.display = "block";
	document.getElementsByClassName("hands")[0].style.display = "none";
	document.getElementsByClassName("snshn")[0].style.display = "none";
	document.getElementsByClassName("fac")[0].style.display = "none";
	document.getElementsByClassName("waxser")[0].style.display = "none";
	document.getElementsByClassName("eyelashex")[0].style.display = "none";
	document.getElementsByClassName("microb")[0].style.display = "none";
	document.getElementsByClassName("additionalser")[0].style.display = "none";
	
	pedi[0].setAttribute("style","	background-image: url(servicesimg/pedicure.jpg);background-repeat: no-repeat;background-position: center center;background-size: 100% 150%;color: rgba(0, 0, 0, 0);");
	mani[0].setAttribute("style","none");
	sns[0].setAttribute("style", "none");
	face[0].setAttribute("style", "none");
	wax[0].setAttribute("style", "none");
	eyelash[0].setAttribute("style", "none");
	microblade[0].setAttribute("style", "none");
	addservices[0].setAttribute("style", "none");
}

function manicures(){
	document.getElementsByClassName("feet")[0].style.display = "none";
	document.getElementsByClassName("hands")[0].style.display = "block";
	document.getElementsByClassName("snshn")[0].style.display = "none";;
	document.getElementsByClassName("fac")[0].style.display = "none";
	document.getElementsByClassName("waxser")[0].style.display = "none";
	document.getElementsByClassName("eyelashex")[0].style.display = "none";
	document.getElementsByClassName("microb")[0].style.display = "none";
	document.getElementsByClassName("additionalser")[0].style.display = "none";
	
	pedi[0].setAttribute("style","none");
	mani[0].setAttribute("style","background-image: url(servicesimg/manicure.jpeg);background-repeat: no-repeat;background-position: center center;background-size: 100% 200%;color: rgba(0, 0, 0, 0);");
	sns[0].setAttribute("style", "none");
	face[0].setAttribute("style", "none");
	wax[0].setAttribute("style", "none");
	eyelash[0].setAttribute("style", "none");
	microblade[0].setAttribute("style", "none");
	addservices[0].setAttribute("style", "none");
}

function snshealthynail(){
	document.getElementsByClassName("feet")[0].style.display = "none";
	document.getElementsByClassName("hands")[0].style.display = "none";
	document.getElementsByClassName("snshn")[0].style.display = "block";
	document.getElementsByClassName("fac")[0].style.display = "none";
	document.getElementsByClassName("waxser")[0].style.display = "none";
	document.getElementsByClassName("eyelashex")[0].style.display = "none";
	document.getElementsByClassName("microb")[0].style.display = "none";
	document.getElementsByClassName("additionalser")[0].style.display = "none";
	
	pedi[0].setAttribute("style","none");
	mani[0].setAttribute("style","none");
	sns[0].setAttribute("style", "background-image: url(servicesimg/sns.jpg);background-repeat: no-repeat;background-position: center center;background-size: 100% 150%;color: rgba(0, 0, 0, 0); ");
	face[0].setAttribute("style", "none");
	wax[0].setAttribute("style", "none");
	eyelash[0].setAttribute("style", "none");
	microblade[0].setAttribute("style", "none");
	addservices[0].setAttribute("style", "none");
}

function facial(){
	document.getElementsByClassName("feet")[0].style.display = "none";
	document.getElementsByClassName("hands")[0].style.display = "none";
	document.getElementsByClassName("snshn")[0].style.display = "none";
	document.getElementsByClassName("fac")[0].style.display = "block";
	document.getElementsByClassName("waxser")[0].style.display = "none";
	document.getElementsByClassName("eyelashex")[0].style.display = "none";
	document.getElementsByClassName("microb")[0].style.display = "none";
	document.getElementsByClassName("additionalser")[0].style.display = "none";
	
	pedi[0].setAttribute("style","none");
	mani[0].setAttribute("style","none");
	sns[0].setAttribute("style", "none");
	face[0].setAttribute("style", "background-image: url(servicesimg/facial.png);background-repeat: no-repeat;background-position: center center;background-size: 100% 150%;color: rgba(0, 0, 0, 0); ");
	wax[0].setAttribute("style", "none");
	eyelash[0].setAttribute("style", "none");
	microblade[0].setAttribute("style", "none");
	addservices[0].setAttribute("style", "none");
}

function waxservices(){
	document.getElementsByClassName("feet")[0].style.display = "none";
	document.getElementsByClassName("hands")[0].style.display = "none";
	document.getElementsByClassName("snshn")[0].style.display = "none";
	document.getElementsByClassName("fac")[0].style.display = "none";
	document.getElementsByClassName("waxser")[0].style.display = "block";
	document.getElementsByClassName("eyelashex")[0].style.display = "none";
	document.getElementsByClassName("microb")[0].style.display = "none";
	document.getElementsByClassName("additionalser")[0].style.display = "none";
	
	pedi[0].setAttribute("style","none");
	mani[0].setAttribute("style","none");
	sns[0].setAttribute("style", "none");
	face[0].setAttribute("style", "none");
	wax[0].setAttribute("style", "background-image: url(servicesimg/wax.jpeg);background-repeat: no-repeat;background-position: center center;background-size: 100% 150%;color: rgba(0, 0, 0, 0); ");
	eyelash[0].setAttribute("style", "none");
	microblade[0].setAttribute("style", "none");
	addservices[0].setAttribute("style", "none");
}

function eyelashextension(){
	document.getElementsByClassName("feet")[0].style.display = "none";
	document.getElementsByClassName("hands")[0].style.display = "none";
	document.getElementsByClassName("snshn")[0].style.display = "none";
	document.getElementsByClassName("fac")[0].style.display = "none";
	document.getElementsByClassName("waxser")[0].style.display = "none";
	document.getElementsByClassName("eyelashex")[0].style.display = "block";
	document.getElementsByClassName("microb")[0].style.display = "none";
	document.getElementsByClassName("additionalser")[0].style.display = "none";
	
	pedi[0].setAttribute("style","none");
	mani[0].setAttribute("style","none");
	sns[0].setAttribute("style", "none");
	face[0].setAttribute("style", "none");
	wax[0].setAttribute("style", "none");
	eyelash[0].setAttribute("style", "background-image: url(servicesimg/eyelash.jpg);background-repeat: no-repeat;background-position: center center;background-size: 100% 300%;color: rgba(0, 0, 0, 0); ");
	microblade[0].setAttribute("style", "none");
	addservices[0].setAttribute("style", "none");
}

function microblading(){
	document.getElementsByClassName("feet")[0].style.display = "none";
	document.getElementsByClassName("hands")[0].style.display = "none";
	document.getElementsByClassName("snshn")[0].style.display = "none";
	document.getElementsByClassName("fac")[0].style.display = "none";
	document.getElementsByClassName("waxser")[0].style.display = "none";
	document.getElementsByClassName("eyelashex")[0].style.display = "none";
	document.getElementsByClassName("microb")[0].style.display = "block";
	document.getElementsByClassName("additionalser")[0].style.display = "none";
	
	pedi[0].setAttribute("style","none");
	mani[0].setAttribute("style","none");
	sns[0].setAttribute("style", "none");
	face[0].setAttribute("style", "none");
	wax[0].setAttribute("style", "none");
	eyelash[0].setAttribute("style", "none");
	microblade[0].setAttribute("style", "background-image: url(servicesimg/eyebrows.jpg);background-repeat: no-repeat;background-position: center center;background-size: 120% 100%;color: rgba(0, 0, 0, 0); ");
	addservices[0].setAttribute("style", "none");
}

function additionalservices(){
	document.getElementsByClassName("feet")[0].style.display = "none";
	document.getElementsByClassName("hands")[0].style.display = "none";
	document.getElementsByClassName("snshn")[0].style.display = "none";
	document.getElementsByClassName("fac")[0].style.display = "none";
	document.getElementsByClassName("waxser")[0].style.display = "none";
	document.getElementsByClassName("eyelashex")[0].style.display = "none";
	document.getElementsByClassName("microb")[0].style.display = "none";
	document.getElementsByClassName("additionalser")[0].style.display = "block";
	
	pedi[0].setAttribute("style","none");
	mani[0].setAttribute("style","none");
	sns[0].setAttribute("style", "none");
	face[0].setAttribute("style", "none");
	wax[0].setAttribute("style", "none");
	eyelash[0].setAttribute("style", "none");
	microblade[0].setAttribute("style", "none");
	addservices[0].setAttribute("style", "background-image: url(servicesimg/addservices.jpeg);background-repeat: no-repeat;background-position: center center;background-size: 100% 100%;color: rgba(0, 0, 0, 0); ");
}