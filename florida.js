// 27.6648° N, 81.5158° W -> 27.6648, -81,5158/
let map = L.map("map", {
  center: [27.6648, -81.5158],
  zoom:15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    max/zoom:19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// everglades: coordinates: 25.2866° N, 80.8987° W-->25.2866, -80.8987/
l.circle([25.2866, -80.8987], {
  fillcolor: 'blue',
  color: 'black',
  radius: 1000
}).addto(map);
