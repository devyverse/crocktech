function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("nav").classList.remove("show");
}

const text = document.getElementById("letter"); 


// Animation simple (avance jusqu'à 300px)
function textAnimate() {
  positionX += 2;  // vitesse de déplacement 
  text.style.transform = `translateX(${positionX}px)`;

  if (positionX < 300) {
    requestAnimationFrame(textAnimate);
  }
}
textAnimate();

// Animation en boucle (va et vient)
let direction = 1;

function animateLoop() {
  positionX += 2 * direction; 
  text.style.transform = `translateX(${positionX}px)`;

  if (positionX > 300 || positionX < 0) {
    direction *= -1;  // inverse la direction
  }
  requestAnimationFrame(animateLoop);
}
animateLoop();




const marquee = document.getElementById("marquee-content");
let positionX = 0;

function animate() {
  positionX -= 2; // vitesse
  marquee.style.transform = `translateX(${positionX}px)`;

  // Quand le bloc entier est sorti, on le remet à 0
  if (Math.abs(positionX) >= marquee.scrollWidth / 2) {
    positionX = 0;
  }

  requestAnimationFrame(animate);
}

animate();
