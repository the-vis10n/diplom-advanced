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

var modalForm = document.getElementById('modalForm')
var formBntClose = document.getElementById('formBntClose')
var formBntOpenBanner = document.getElementById('formBntOpenBanner')
var formBntOpenFirst = document.getElementById('formBntOpenFirst')
var formBntOpenSecond = document.getElementById('formBntOpenSecond')
var formBntOpenThird = document.getElementById('formBntOpenThird')

formBntOpenBanner.onclick = function () {
    modalForm.style.display = "block";
    window.scrollTo (0,0);
    container.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)"
    backColor.style.filter = "blur(5px)"
}
formBntOpenFirst.onclick = function () {
    modalForm.style.display = "block";
    window.scrollTo (0,0);
    container.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)"
    backColor.style.filter = "blur(5px)"
}
formBntOpenSecond.onclick = function () {
    modalForm.style.display = "block";
    window.scrollTo (0,0);
    container.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)"
    backColor.style.filter = "blur(5px)"
}
formBntOpenThird.onclick = function () {
    modalForm.style.display = "block";
    window.scrollTo (0,0);
    container.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)"
    backColor.style.filter = "blur(5px)"
}
formBntClose.onclick = function () {
    modalForm.style.display = "none";
    window.scrollTo (0,0);
    container.style.filter = "none";
    header.style.filter = "none"
    backColor.style.filter = "none"
}