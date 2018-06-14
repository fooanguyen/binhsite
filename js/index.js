
/*
	Beginning of slideshow
*/
var index = 0;
loadImg();

function loadImg(){
	var img = document.getElementsByClassName("slideimage");
	var jpgimg = [];
	
	//specify number of images is 3 in folder
	for (var i = 0; i < 3; i++) {
		var jpgsrc = "slides/" + (i + 1) + '.jpg';
		jpgimg[i] = new Image();
		jpgimg[i].src = jpgsrc;
	}
	
	if(index >= jpgimg.length){
		index = 0;
	}
	
	img[0].src = jpgimg[index].src;
	index++;
	
	var fadeEffect = setInterval(function () {
        if (!img[0].style.opacity) {
            img[0].style.opacity = 1;
        }
		if (img[0].style.opacity < 0.3) {
            clearInterval(fadeEffect);
        }
		else {
            img[0].style.opacity -= 0.1;
			img[0].style.opacity -= 0.1;
        }
		
    }, 550);
	img[0].style.opacity = 1;
    setTimeout(loadImg, 3000);
}


/*
	Ending of slideshow
*/




/*
	Beginning of Gallery
*/
//check image if exists

var jpgimg = [];
var numimg = 65;
var loopsize = 9;
var num = 0;
var imgelement;
loadgallery();

function loadgallery(){

	var gal = document.getElementsByClassName("gallery");

	if(numimg < loopsize){
		loopsize = numimg;
	}
	if(numimg < 9){
		document.getElementsByClassName("previous")[0].style.visibility = "hidden";
		document.getElementsByClassName("next")[0].style.visibility = "hidden";
	}
	//specify number of images is 64 in folder
	for (var i = num; i < loopsize; i++) {
		var jpgsrc = "gallery/image(" + (i + 1) + ').jpg';
		
		jpgimg[i] = new Image();
		jpgimg[i].src = jpgsrc;
		
		var hrefelement = document.createElement("a");
		//hrefelement.setAttribute("href", jpgimg[i].src);
		
		imgelement = document.createElement("img");
		imgelement.setAttribute("class", "galleryimage cursor");
		imgelement.setAttribute("src", jpgimg[i].src);
		imgelement.setAttribute("onerror", "this.style.display='none';");
		imgelement.setAttribute("onclick", "openimage("+i+")");
		hrefelement.appendChild(imgelement);
		gal[0].appendChild(hrefelement);
	}

}

function next(){
	//console.log(num);
	if(num < numimg){
		if((numimg - num) >= 9){
			num = num + 9;
			if((numimg - loopsize) >= 9){
				loopsize = loopsize + 9;
			}
			else{
				loopsize = loopsize + (numimg - loopsize);
			}

		}
		else{
			num = num + (numimg - num);
			loopsize = loopsize + (numimg - num);
		}
	}
	if(num >= 9){
		document.getElementsByClassName("previous")[0].style.visibility = "visible";
		
	}
	else{
		document.getElementsByClassName("previous")[0].style.visibility = "hidden";
	}
	
	if(loopsize < numimg){
		document.getElementsByClassName("next")[0].style.visibility = "visible";
		
	}
	else{
		document.getElementsByClassName("next")[0].style.visibility = "hidden";
	}
	//console.log("num: " + num);
	//console.log("loopsize: " + loopsize);
	var imgclass = document.querySelectorAll(".galleryimage");
	//console.log(imgclass.length);
	imgclass.forEach(function(element){
		element.parentNode.removeChild(element);
	});
	
	loadgallery();
}

function previous(){
	//console.log(num);
	if(num >= 9){
		if((num - 9) >= 9){
			if((loopsize - num) >= 9){
				loopsize = loopsize - 9;
				num = num - 9;
			}
			else{
				loopsize = num;
				num = num - 9;
			}
		}
		else{
			num = num - 9;
			loopsize = loopsize - 9;
		}
	}
	
	if(num >= 9){
		document.getElementsByClassName("previous")[0].style.visibility = "visible";
		
	}
	else{
		document.getElementsByClassName("previous")[0].style.visibility = "hidden";
	}
	
	if(loopsize < numimg){
		document.getElementsByClassName("next")[0].style.visibility = "visible";
		
	}
	else{
		document.getElementsByClassName("next")[0].style.visibility = "hidden";
	}
	//console.log("num: " + num);
	//console.log("loopsize: " + loopsize);
	var imgclass = document.querySelectorAll(".galleryimage");
	//console.log(imgclass.length);
	//for(var i = 0; i < 9; i++){
	imgclass.forEach(function(element){
		element.parentNode.removeChild(element);
	});
	
	loadgallery();
}
function openimage(i){
	// Get the modal
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("modimg");
	modal.style.display = "block";
	modalImg.src = jpgimg[i].src;
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
		modal.style.display = "none";
	}
}

/*
	Ending of Gallery
*/