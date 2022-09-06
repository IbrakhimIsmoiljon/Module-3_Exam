"use strict";

// O'zgaruvchilar
const formSelect = document.querySelector('.form-select');
const circle1 = document.querySelector('.col-3');
const circle2 = document.querySelector('#thirty');
const circle3 = document.querySelector('#thirty_five');
const pomidor = document.querySelector('#pomidor');
const kurka = document.querySelector('#kurka');
const zaytun = document.querySelector('#zaytun');
const tuzlangan = document.querySelector('#tuzlangan');
const qoziqorin = document.querySelector('#qoziqorin');
const qazi = document.querySelector('#qazi');
const achchiq = document.querySelector('#achchiq');
const sosiskali = document.querySelector('#sosiskali');
const non = document.querySelector('#non_span');
const kattaligi = document.querySelector('#kattalik_span');
const ustida = document.querySelector('#usti_span');
const advance = document.querySelector('#advance_span');
const btn = document.querySelector('.btn-danger');

// form select
formSelect.addEventListener('click', () => {
    non.innerHTML = formSelect.value;
});


// Pitsaning hajmi
circle1.addEventListener('click', () => {
    kattaligi.innerHTML = 25 + ' ' + 'sm';
});

circle2.addEventListener('click', () => {
    kattaligi.innerHTML = 30 + ' ' + 'sm';
});

circle3.addEventListener('click', () => {
    kattaligi.innerHTML = 35 + ' ' + 'sm';
});


// Qo'shimchalar
// function checkbbox() {
//     pomidor.classList.toggle("first_p");
// }

pomidor.addEventListener('click', () => {
    ustida.innerHTML = '-' + ' ' + 'Pomidor';
});

kurka.addEventListener('click', () => {
    ustida.innerHTML = '-' + ' ' + 'Kurka go`shti';
});

zaytun.addEventListener('click', () => {
    ustida.innerHTML = '-' + ' ' + 'Zaytun';
});

tuzlangan.addEventListener('click', () => {
    ustida.innerHTML = '-' + ' ' + 'Tuzlangan bodring';
});

qoziqorin.addEventListener('click', () => {
    ustida.innerHTML = '-' + ' ' + 'Qo`ziqorin';
});

qazi.addEventListener('click', () => {
    ustida.innerHTML = '-' + ' ' + 'Qazi';
});

achchiq.addEventListener('click', () => {
    advance.innerHTML = '-' + ' ' + 'Achchiq';
});

sosiskali.addEventListener('click', () => {
    advance.innerHTML = '-' + ' ' + 'Sosiskali';
});




btn.addEventListener('click' , () => {
    alert("Sizning buyurtmangiz qabul qilindi!!!");
})