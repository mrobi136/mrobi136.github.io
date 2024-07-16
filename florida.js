// 27.6648° N, 81.5158° W -> 27.6648, -81,5158/
let map = L.map("map", {
  center: [27.6648, -81.5158],
  zoom:15
});

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
