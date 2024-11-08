import './styles/normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

// Menu

function openModal() {
    document.getElementById("modal").style.top = "-80px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-4000px";
}