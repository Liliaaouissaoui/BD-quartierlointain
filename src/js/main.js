import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax-element", {
  scrollTrigger: {
    trigger: ".parallax-container",
    pin: true,
    scrub: 1,
    // markers: true,
  },
  y: -200,
});

gsap.to("#paysage", {
  scrollTrigger: {
    trigger: ".container-paysage",
    pin: true,
    scrub: 1,
    // markers: true,
  },
  left: "0",
});

gsap.to("#perso", {
  scrollTrigger: {
    trigger: ".test",
    pin: true,
    scrub: 1,
    // markers: true,
  },
  transform: "scale(0.7)",
});

gsap.to("#lune", {
  scrollTrigger: {
    trigger: ".container-lune",
    start: "top top",
    pin: true,
    scrub: 1,
    end: "+=50%",
    // markers: true,
  },
  bottom: "0",
});

gsap.to("#rect", {
  // duration: 10,
  ease: "linear",
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
  scrollTrigger: {
    trigger: ".motionPath", // l'élément qui déclenche l'animation
    start: "top center", // point de départ de l'animation
    end: "bottom 75%",
    //     end: "bottom+=1000px top", // point de fin de l'animation
    scrub: 2, // synchronise l'animation avec le défilement
    // markers: true, // pour visualiser les points de déclenchement
  },
});

gsap.to("#miroir", {
  scrollTrigger: {
    trigger: ".container-miroir",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  x: "60%",
});

gsap.to("#img-2", {
  scrollTrigger: {
    trigger: ".container-img-2",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  x: "-40%",
});

gsap.to("#img-3", {
  scrollTrigger: {
    trigger: ".container-img-3",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  x: "-20%",
});

gsap.to("#img-4", {
  scrollTrigger: {
    trigger: ".container-img-4",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  x: "0",
});

gsap.to("#img-5", {
  scrollTrigger: {
    trigger: ".container-img-5-6-7",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  top: "0",
});

gsap.to("#img-6", {
  scrollTrigger: {
    trigger: ".container-img-5-6-7",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  top: "0",
});

gsap.to("#img-7", {
  scrollTrigger: {
    trigger: ".container-img-5-6-7",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  top: "0",
});

gsap.to("#miroir-2", {
  scrollTrigger: {
    trigger: ".container-miroir-2",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  x: "60%",
});

gsap.to("#img-9", {
  scrollTrigger: {
    trigger: ".container-img-9",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  x: "10%",
});

gsap.to("#img-8", {
  scrollTrigger: {
    trigger: ".container-img-8",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  top: "-20%",
});

gsap.to(".bulle", {
  scrollTrigger: {
    trigger: ".container-img-8",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  top: "10%", // Anime la position `top` de chaque bulle
  stagger: 0.1, // Décalage de 0.1s entre chaque bulle pour un effet en cascade
});

gsap.to("#bulle2", {
  scrollTrigger: {
    trigger: ".container-img-8",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  bottom: "70%", // Anime la position `top` de chaque bulle
  stagger: 0.1, // Décalage de 0.1s entre chaque bulle pour un effet en cascade
});

gsap.to("#bulle3", {
  scrollTrigger: {
    trigger: ".container-img-8",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  top: "90%", // Anime la position `top` de chaque bulle
  stagger: 0.1, // Décalage de 0.1s entre chaque bulle pour un effet en cascade
});

gsap.to("#bulle4", {
  scrollTrigger: {
    trigger: ".container-img-8",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  bottom: "70%", // Anime la position `top` de chaque bulle
  stagger: 0.1, // Décalage de 0.1s entre chaque bulle pour un effet en cascade
});

gsap.to("#bulle5", {
  scrollTrigger: {
    trigger: ".container-img-8",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  top: "90%", // Anime la position `top` de chaque bulle
  stagger: 0.1, // Décalage de 0.1s entre chaque bulle pour un effet en cascade
});

gsap.to("#bulle6", {
  scrollTrigger: {
    trigger: ".container-img-8",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  top: "90%", // Anime la position `top` de chaque bulle
  stagger: 0.1, // Décalage de 0.1s entre chaque bulle pour un effet en cascade
});

gsap.to("#bulle7", {
  scrollTrigger: {
    trigger: ".container-img-8",
    start: "center bottom",
    scrub: 1,
    // markers: true,
  },
  top: "90%", // Anime la position `top` de chaque bulle
  stagger: 0.1, // Décalage de 0.1s entre chaque bulle pour un effet en cascade
});
