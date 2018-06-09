
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


loadgallery();

function loadgallery(){

	var gal = document.getElementsByClassName("gallery");
	var jpgimg = [];
	
	//specify number of images is 4 in folder
	for (var i = 0; i < 5; i++) {
		var jpgsrc = "gallery/" + (i + 1) + '.jpg';
		jpgimg[i] = new Image();
		jpgimg[i].src = jpgsrc;
		var imgelement = document.createElement("img");
		imgelement.className = "galleryimage";
		imgelement.src = jpgsrc;
		gal[0].appendChild(imgelement);
	}

}

/*
	Ending of Gallery
*/