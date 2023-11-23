
// functie voor image carrousel

const imageSoucres = [
  'img1.jpg',
  'img2.jpg',
]

const timeOut = 200 
const loop = false //true = door, false = stopt
let images = Array.from(document.querySelectorAll('.image-carousel img')) 
let img
function carousel () {
  if (img) img.classList.toggle('current')
  img = images.shift() //eerste element van de array - daarna is de array 1 korter (20 ipv 21)
  img.classList.toggle('current') //voor het plaatje dat je net hebt gepakt
  if (loop && !images.length) {
    images = Array.from(document.querySelectorAll('.image-carousel img'))
  }
  if (images.length) setTimeout(carousel, timeOut)
}
window.onload = () => {
  imageSoucres.forEach(src => {
    const img = new Image()
    // preloaden images, zelf even opzoeken
  })
  setTimeout(carousel, timeOut)
}

// functie voor het hamburgermenu

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}