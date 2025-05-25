
//transation des deux boutons rouges et blues
{
function afficherbtn1(){
    document.getElementById("btn2").style.backgroundColor ="red"
    document.getElementById("btn1").style.backgroundColor ="#09b1f9"
   
    
}
function afficherbtn2(){
     document.getElementById("btn1").style.backgroundColor ="red"
     document.getElementById("btn2").style.backgroundColor ="#09b1f9"
      document.getElementById("btn2").style.transition = "2s background"
      document.getElementById("btn1").style.transition = "2s background"
}
}






   


    gsap.from(".element-cascade", {
        x: -100, // Départ hors écran (à gauche)
        opacity: 0,
        duration: 1,
        stagger: 0.3, // Délai entre chaque élément (0.3s)
        ease: "power2.out" // Effet de ralentissement
    });



  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".element-cascade").forEach(container => {
    gsap.from(container.children, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2, // délai entre chaque élément
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });


