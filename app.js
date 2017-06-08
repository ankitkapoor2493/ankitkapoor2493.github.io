var photosContainer;
var homeContainer;
var melaContainer;
var logo;


 $(document).ready(function(){
      $('.your-class').slick({
          appendArrows:$('#bottom-navigation-container'),
          dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
         autoplay:true,
        autoplaySpeed: 2000,
        fade:false
      });

      var gallery = document.getElementById('gallery');
		for (var i = 0; i < 53; i++) {
			gallery.append(img_create("./assets/gallery/IMG"+i+".jpg"));
		}
		jQuery("#gallery").unitegallery({
			tile_enable_image_effect: true,
			tile_image_effect_reverse: true,
			tile_image_effect_type: "blur",
			tile_enable_icons: false,
			tile_enable_textpanel: false,
			lightbox_show_textpanel: false,
			lightbox_show_numbers: false
		});
    });


function onLoad() {
    photosContainer = document.getElementById('photos-container');
    homeContainer = document.getElementById('home-container');
    melaContainer = document.getElementById('mela-container');
    logo = document.getElementById('logo');
}

function onHomeClick() {
   photosContainer.style.visibility = 'hidden';
   homeContainer.style.visibility = 'visible';
   melaContainer.style.visibility = 'visible';
  //  logo.style.visibility = 'visible';
   photosContainer.style.display = 'none';
} 

function onPhotosClick() {
  homeContainer.style.visibility = 'hidden';
  melaContainer.style.visibility = 'hidden';
  photosContainer.style.visibility = 'visible';
  // logo.style.visibility = 'hidden';
  photosContainer.style.display = 'block';
}


function img_create(src) {
		var img = document.createElement('img');
		img.src = src;
		img.alt = src;
		return img;
	}

  function onMelaButtonClick() {
    // window.scrollTo(0,1000);
    $('html, body').animate({scrollTop:1000}, 'slow');
  }
