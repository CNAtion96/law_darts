//Product Info 
$.ajax({url:'https://json-data.herokuapp.com/darts/info',
    success: function(response){
        console.log(response);
        $(`.title`).html(`<p>${response.data.product.title}</p>`)
        $(`.description`).html(`<p>${response.data.product.description}</p>`)
    }
});
//Company List
$.ajax({url:'https://json-data.herokuapp.com/darts/companies',
    success: function(response){
        console.log(response);
        response.results.forEach(function(company){
            $(".companies").append(`<div class="compImg col-md-4">
            <img src="${company.image_url}">
            </div>`)
        })
    }
});
//Testimonial (image/name)
$.ajax({url: 'https://randomuser.me/api/?results=3',
  success: function(response) {
        console.log(response);
        response.results.forEach(function(person,idx) {
            $(".containTest" + idx).html(`<div class="image">
            <img src="${person.picture.large}"/></div>
            <p>${person.name.first} ${person.name.last}</p>`);

  }
});
//Testimonials
 setTimeout(function(){
    $.ajax({url:'https://json-data.herokuapp.com/darts/testimonials',
        success: function(response){
            console.log(response);
            response.results.forEach(function(testimonial,idx) {
                $(".containTest" + idx).append(`<p>${testimonial.review}</p>`);
            }); 
        }
    });
 }100);
 
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

//initiate variables
var imageNum = ['<img src="img/jarts.jpg"/>','<img src="img/jarts2.jpg"/>','<img src="img/jarts3.jpg"/>','<img src="img/jarts4.jpg"/>']
var imageLen = imageNum.length;
var currentIndex = 0;
var next = document.getElementById("next");
var prev = document.getElementById("previous");

//enable buttons to move to next/previous picture
next.addEventListener("click", function(){
	if(currentIndex >= imageLen - 1){
		currentIndex = 0;
		document.getElementById("sliderImg").innerHTML = imageNum[currentIndex];
	}
	else {
		currentIndex += 1;
		document.getElementById("sliderImg").innerHTML = imageNum[currentIndex];
	}
})

prev.addEventListener("click", function(){
	if(currentIndex <= 0){
		currentIndex = imageLen - 1;
		document.getElementById("sliderImg").innerHTML = imageNum[currentIndex];
	}
	else {
		currentIndex -= 1;
		document.getElementById("sliderImg").innerHTML = imageNum[currentIndex];
	}
})
Contact GitHub API Training Shop Blog About
