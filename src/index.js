import './styles/normalize.css'
import './styles/main.scss';


var modal = document.getElementById('modal')
var btnOpen = document.getElementById('btnBurger')
var btnClose = document.getElementById('btnClose')
var container = document.getElementById('container')
var header = document.getElementById('header')
var backColor = document.getElementById('backColor')

btnOpen.onclick = function () {
    modal.style.display = "block";
    window.scrollTo (0,0);
    container.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)"
    backColor.style.filter = "blur(5px)"
}
btnClose.onclick = function () {
    modal.style.display = "none";
    container.style.filter = "none";
    header.style.filter = "none"
    backColor.style.filter = "none"
}

var modalFormBanner = document.getElementById('modalFormBanner')
var modalFormFirst = document.getElementById('modalFormFirst')
var modalFormSecond = document.getElementById('modalFormSecond')
var modalFormThird = document.getElementById('modalFormThird')
var formBntCloseBanner = document.getElementById('formBntCloseBanner')
var formBntCloseFirst = document.getElementById('formBntCloseFirst')
var formBntCloseSecond = document.getElementById('formBntCloseSecond')
var formBntCloseThird = document.getElementById('formBntCloseThird')
var formBntOpenBanner = document.getElementById('formBntOpenBanner')
var formBntOpenFirst = document.getElementById('formBntOpenFirst')
var formBntOpenSecond = document.getElementById('formBntOpenSecond')
var formBntOpenThird = document.getElementById('formBntOpenThird')

formBntOpenBanner.onclick = function () {
    modalFormBanner.style.display = "block";
    document.querySelector("#modalFormBanner").scrollIntoView({
        behavior: 'smooth'
      });
    container.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)"
    backColor.style.filter = "blur(5px)"
}

formBntCloseBanner.onclick = function () {
    modalFormBanner.style.display = "none";
    container.style.filter = "none";
    header.style.filter = "none"
    backColor.style.filter = "none"
    document.querySelector("#formBntOpenBanner").scrollIntoView({
        behavior: 'smooth'
      });
}

formBntOpenFirst.onclick = function () {
    modalFormFirst.style.display = "block";
    document.querySelector("#modalFormFirst").scrollIntoView({
        behavior: 'smooth'
      });
    container.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)"
    backColor.style.filter = "blur(5px)"
}

formBntCloseFirst.onclick = function () {
    modalFormFirst.style.display = "none";
    container.style.filter = "none";
    header.style.filter = "none"
    backColor.style.filter = "none"
    document.querySelector("#formBntOpenFirst").scrollIntoView({
        behavior: 'smooth'
      });
}

formBntOpenSecond.onclick = function () {
    modalFormSecond.style.display = "block";
    document.querySelector("#modalFormSecond").scrollIntoView({
        behavior: 'smooth'
      });
    container.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)"
    backColor.style.filter = "blur(5px)"
}

formBntCloseSecond.onclick = function () {
    modalFormSecond.style.display = "none";
    container.style.filter = "none";
    header.style.filter = "none"
    backColor.style.filter = "none"
    document.querySelector("#formBntOpenSecond").scrollIntoView({
        behavior: 'smooth'
      });
}

formBntOpenThird.onclick = function () {
    modalFormThird.style.display = "block";
    document.querySelector("#modalFormThird").scrollIntoView({
        behavior: 'smooth'
      });
    container.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)"
    backColor.style.filter = "blur(5px)"
}

formBntCloseThird.onclick = function () {
    modalFormThird.style.display = "none";
    container.style.filter = "none";
    header.style.filter = "none"
    backColor.style.filter = "none"
    document.querySelector("#formBntOpenThird").scrollIntoView({
        behavior: 'smooth'
      });
}