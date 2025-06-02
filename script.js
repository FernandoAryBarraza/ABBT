function createSnowFlake() {
    const snowFlake = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    snowFlake.setAttribute("class", "snowflake");
    snowFlake.setAttribute("viewBox", "0 0 24 24");
    
    // Posición aleatoria dentro del ancho del contenedor
    snowFlake.style.left = Math.random() * 100 + "vw";
    snowFlake.style.animationDuration = Math.random() * 5 + 5 + "s";
    snowFlake.style.animationDelay = Math.random() * 5 + "s";
    
    snowFlake.innerHTML = ` 
        <path fill="white" d="M12 2L13 8H17L14 10L15 16L12 14L9 16L10 10L7 8H11L12 2Z"/>
    `;

    // Agregamos el copo al contenedor
    document.querySelector(".snow-container").appendChild(snowFlake);
    
    snowFlake.addEventListener("animationend", () => {
        snowFlake.remove();
        createSnowFlake();
    });
}
const snowFlakeCount = 100;
for (let i = 0; i < snowFlakeCount; i++) {
    setTimeout(createSnowFlake , i * 90); 
}

//Carrusel
const scrollers = document.querySelectorAll('.scroller');
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true);

    const scrollerInner = scroller.querySelector('.scroller_inner');
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const itemClone = item.cloneNode(true);
      
      itemClone.setAttribute('data-animated', true);
      scrollerInner.appendChild(itemClone);
    });
  });
}
