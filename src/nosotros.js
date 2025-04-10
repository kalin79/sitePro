import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
// Registrar el plugin Observer
gsap.registerPlugin(Observer);
document.addEventListener("DOMContentLoaded", () => {


    let panels = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1.25),
        ease: "expo.inOut",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 0.1,
            start: "center center",
            end: "+=115",
            markers: true,

        }
    });
});