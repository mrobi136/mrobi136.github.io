// 27.6648° N, 81.5158° W -> 27.6648, -81,5158/
let map = L.map("map", {
  center: [27.6648, -81.5158],
  zoom:15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// everglades: coordinates: 25.2866° N, 80.8987° W-->25.2866, -80.8987/
L.circle([25.2866, -80.8987], {
  fillcolor: 'blue',
  color: 'black',
  radius: 1000
}).bindPopup(`<iframe width="200" height="160" src="https://www.youtube.com/embed/BDHWpkcpvPo?si=27Md3zqWiZQaDvUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
}).addTo(map);
