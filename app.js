function imgSlider(anything){
    document.querySelector('.rubik').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function menuBurger(){
	var burger = document.querySelector('.burger');
	var navigasi = document.querySelector('.navigasi');
	burger.classList.toggle('active');
	navigasi.classList.toggle('active');
}