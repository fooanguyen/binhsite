
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

var jpgimg = [];
var hrefelement;
loadgallery();

function loadgallery(){

	var gal = document.getElementsByClassName("gallery");

	
	//specify number of images is 5 in folder
	for (var i = 0; i < 5; i++) {
		var jpgsrc = "gallery/" + (i + 1) + '.jpg';
		jpgimg[i] = new Image();
		jpgimg[i].src = jpgsrc;
		
		hrefelement = document.createElement("a");
		//hrefelement.setAttribute("href", jpgimg[i].src);

		
		var imgelement = document.createElement("img");
		imgelement.setAttribute("class", "galleryimage cursor");
		imgelement.setAttribute("src", jpgimg[i].src);
		
		imgelement.setAttribute("onclick", "openimage("+i+")");
		hrefelement.appendChild(imgelement);
		gal[0].appendChild(hrefelement);
	}
}

function openimage(i){
	// Get the modal
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("img01");
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