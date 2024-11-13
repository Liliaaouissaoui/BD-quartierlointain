import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    // markers: true, AK
  },
  transform: "scale(0.7)",
});

gsap.to("#lune", {
  scrollTrigger: {
    trigger: ".container-lune",
    start: "top top",
    pin: true,
    scrub: 1,
    // markers: true, AK
  },
  bottom: "0",
});

// gsap.to("#img-8", {
//   scrollTrigger: {
//     trigger: ".container-img-8",
//     start: "center bottom",
//     scrub: 1,
//     markers: true,
//   },
//   top: "0%",
// });
