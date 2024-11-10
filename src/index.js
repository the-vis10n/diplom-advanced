import './styles/normalize.css'
import './styles/main.scss';


var modal = document.getElementById('modal')
var btnOpen = document.getElementById('btnBurger')
var btnClose = document.getElementById('btnClose')

btnOpen.onclick = function () {
    modal.style.display = "block";
}
btnClose.onclick = function () {
    modal.style.display = "none";
}

var modalForm = document.getElementById('modalForm')
var formBntClose = document.getElementById('formBntClose')
var formBntOpenBanner = document.getElementById('formBntOpenBanner')
var formBntOpenFirst = document.getElementById('formBntOpenFirst')
var formBntOpenSecond = document.getElementById('formBntOpenSecond')
var formBntOpenThird = document.getElementById('formBntOpenThird')

formBntOpenBanner.onclick = function () {
    modalForm.style.top = "403px";
}
formBntOpenFirst.onclick = function () {
    modalForm.style.top = "5031px";
}
formBntOpenSecond.onclick = function () {
    modalForm.style.top = "5371px";
}
formBntOpenThird.onclick = function () {
    modalForm.style.top = "5748px";
}
formBntClose.onclick = function () {
    modalForm.style.top = "-4000px";
}