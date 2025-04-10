// import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import gsap from "gsap";
// import { CustomEase } from "gsap/CustomEase";
// import { EaselPlugin } from "gsap/EaselPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetraP from '/p.svg?raw';
import LetraR from '/r.svg?raw';
import LetraO from '/o.svg?raw';
import FlechaLogo from '/flechaLogo.svg?raw';
// gsap.registerPlugin(EaselPlugin, CustomEase);
// Registrar ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);
import "./styles.scss";
document.addEventListener("DOMContentLoaded", function () {

    // Carrusel de DAY 

    let currentIndex2 = 0;
    const totalCards2 = document.querySelectorAll(".sectionDayContainer .cardContainer").length;
    const items2 = document.querySelectorAll(".sectionDayContainer .cardContainer");
    let isCarruselDay = false;

    const showDaySlideNext = (index) => {
        items2.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "-=70", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    isCarruselDay = false;
                }
            });
        });
    };

    const showDaySlideNext2 = (index) => {
        items2.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "-=100", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    isCarruselDay = false;
                }
            });
        });
    };

    const showDaySlidePrev = (index) => {
        items2.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "+=100", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    isCarruselDay = false;
                }
            });
        });
    };

    const showDaySlidePrev2 = (index) => {
        console.log("s")
        items2.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "+=70", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    isCarruselDay = false;
                }
            });
        });
    };

    document.getElementById("btnNext2").addEventListener("click", () => {
        console.log(currentIndex2)
        console.log(totalCards2 - 1)
        console.log(isCarruselDay)



        if (currentIndex2 <= totalCards2 - 1) {
            if (!isCarruselDay) {
                isCarruselDay = true;
                currentIndex2++;
                if (currentIndex2 > 1) {
                    showDaySlideNext2(currentIndex2);
                } else {
                    showDaySlideNext(currentIndex2);
                }
            }
        }


    });

    document.getElementById("btnPrev2").addEventListener("click", () => {
        console.log(">>", currentIndex2)

        if (currentIndex2 > 0) {
            if (!isCarruselDay) {
                isCarruselDay = true;
                if (currentIndex2 > 1) {
                    showDaySlidePrev(currentIndex2);
                } else {
                    showDaySlidePrev2(currentIndex2);
                }
                currentIndex2--;
            }


        }

    });

    function AnimarCarruselDay() {
        items2.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "+=70", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }

    AnimarCarruselDay()

    // fin del carrusel de day


    // Carrusel de PRO 

    let currentIndex = 0;
    const totalCards = document.querySelectorAll(".sectionProContainer .cardContainer").length;
    const items = document.querySelectorAll(".sectionProContainer .cardContainer");
    let isCarruselPro = false;

    const showSlideNext = (index) => {
        items.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "-=70", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    isCarruselPro = false;
                }
            });
        });
    };

    const showSlideNext2 = (index) => {
        items.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "-=100", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    isCarruselPro = false;
                }
            });
        });
    };

    const showSlidePrev = (index) => {
        items.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "+=100", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    isCarruselPro = false;
                }
            });
        });
    };

    const showSlidePrev2 = (index) => {
        console.log("s")
        items.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "+=70", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out",
                onComplete: () => {
                    isCarruselPro = false;
                }
            });
        });
    };

    document.getElementById("btnNext").addEventListener("click", () => {
        console.log(currentIndex)
        console.log(totalCards - 1)
        console.log(isCarruselPro)



        if (currentIndex <= totalCards - 1) {
            if (!isCarruselPro) {
                isCarruselPro = true;
                currentIndex++;
                if (currentIndex > 1) {
                    showSlideNext2(currentIndex);
                } else {
                    showSlideNext(currentIndex);
                }
            }
        }


    });

    document.getElementById("btnPrev").addEventListener("click", () => {
        console.log(">>", currentIndex)

        if (currentIndex > 0) {
            if (!isCarruselPro) {
                isCarruselPro = true;
                if (currentIndex > 1) {
                    showSlidePrev(currentIndex);
                } else {
                    showSlidePrev2(currentIndex);
                }
                currentIndex--;
            }


        }

    });

    function AnimarCarruselPro() {
        items.forEach((item, i) => {
            gsap.to(item, {
                xPercent: "+=70", // mover cada item 100px a la derecha
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }

    AnimarCarruselPro()

    // fin del carrusel de pro




    // Animacion del Banner Home PRO

    function animamarBannerHome(selectorBanner) {


        document.querySelector(`.${selectorBanner} ` + ".loaderLogoContainer .logoContainer").innerHTML = LetraP + LetraR + LetraO;
        document.querySelector(`.${selectorBanner} ` + ".loaderLogoContainer .flechaContainer").innerHTML = FlechaLogo;

        // logoLetras.forEach((logo, index) => {
        gsap.to(`.${selectorBanner} ` + ".loaderLogoContainer .logoContainer svg", {
            opacity: .5,
            duration: .5,
            stagger: {
                each: .25, // Intervalo entre cada animación
                repeat: 4,
                yoyo: true // Vuelve a su estado original antes de repetir
            }
        });

        gsap.to(`.${selectorBanner} ` + ".loaderLogoContainer .flechaContainer svg path", {
            duration: .5,
            fill: "#1E1E1E",
            repeat: 4,    // Repite indefinidamente
            yoyo: true,    // Vuelve al color original antes de repetir
            ease: "power1.inOut" // Suaviza la transición
        });

        gsap.to(`.${selectorBanner} ` + ".loaderLogoContainer .flechaContainer svg", {
            duration: .5,
            y: 5,
            repeat: 4,    // Repite indefinidamente
            yoyo: true,    // Vuelve al color original antes de repetir
            ease: "power1.inOut" // Suaviza la transición
        });


        gsap.to(`.${selectorBanner} ` + ".loaderLogoContainer", {
            duration: 1,
            opacity: 0,
            delay: 4,
        });



        // Función para dividir el texto en spans
        const texto1 = document.querySelector(`.${selectorBanner} ` + ".titularContainer .texto1");
        const textoOriginal1 = texto1.textContent;
        const letras1 = textoOriginal1.split("");

        const texto2 = document.querySelector(`.${selectorBanner} ` + ".titularContainer .texto2");
        const textoOriginal2 = texto2.textContent;
        const letras2 = textoOriginal2.split("");

        const palabras = document.querySelectorAll(`.${selectorBanner} ` + ".palabrasContainer h3");

        // document.querySelector('.bodyContainer').style.opacity = 1;
        // Limpiar el contenido original
        texto1.innerHTML = "";
        texto2.innerHTML = "";

        // Crear un <span> para cada letra
        letras1.forEach((letra) => {
            const span = document.createElement("span");
            span.textContent = letra;
            texto1.appendChild(span);
        });

        // Crear un <span> para cada letra
        letras2.forEach((letra) => {
            const span = document.createElement("span");
            span.textContent = letra;
            texto2.appendChild(span);
        });

        // Seleccionar las letras recién creadas
        const spans1 = document.querySelectorAll(`.${selectorBanner} ` + ".titularContainer .texto1 span");
        const spans2 = document.querySelectorAll(`.${selectorBanner} ` + ".titularContainer .texto2 span");

        // Define la opacidad inicial y el decremento
        let opacidadInicial = 1;
        const decremento = 0.12;
        const tlAnimacionBanner = gsap.timeline();


        // Empezamos con las animacion de las FLECHAS
        tlAnimacionBanner.to(`.${selectorBanner} ` + ".clip-shape.four", {
            duration: 1.5,
            ease: "power3.out",
            onUpdate: function () {
                let progress = 120 - this.progress() * 165; // Va de 124.03% a 24.03%

                document.querySelector(`.${selectorBanner} ` + '.clip-shape.four').style.clipPath = `
                polygon(
                65.96% ${progress}%, 
                75.87% ${progress + (39.14 - 25.7)}%, 
                75.97% ${progress + (54.39 - 25.7)}%, 
                68.95% ${progress + (46.37 - 25.7)}%, 
                69.04% ${progress + (62.16 - 25.7)}%, 
                61.85% ${progress + (62.17 - 25.7)}%, 
                61.93% ${progress + (46.24 - 25.7)}%, 
                54.92% ${progress + (54.39 - 25.7)}%, 
                55.16% ${progress + (40.09 - 25.7)}%
            )`;
            }
        }, 3);

        tlAnimacionBanner.to(`.${selectorBanner} ` + ".clip-shape", {
            duration: 1,
            ease: "power3.out",
            onUpdate: function () {
                let progress = 130 - this.progress() * 140; // Va de 120% a 40%
                document.querySelector(`.${selectorBanner} ` + '.clip-shape').style.clipPath = `
                polygon(
                    66.13% ${progress - 20}%, 
                    72.64% ${progress - 13.2}%, 
                    72.76% ${progress - 6.2}%, 
                    68.31% ${progress - 9.19}%, 
                    68.31% ${progress}%, 
                    64.26% ${progress + 0.28}%, 
                    64.26% ${progress - 9.19}%, 
                    59.9% ${progress - 5.66}%, 
                    60.01% ${progress - 12.48}%
                )`;
            }
        }, 3.5);

        tlAnimacionBanner.to(`.${selectorBanner} ` + ".clip-shape.second", {
            duration: .75,
            ease: "power3.out",
            onUpdate: function () {
                let progress = 100 - this.progress() * 165; // Va de 124.03% a 24.03%

                document.querySelector(`.${selectorBanner} ` + '.clip-shape.second').style.clipPath = `
                polygon(
                    61.77% ${progress}%, 
                    77.24% ${progress + 19}%, 
                    77.42% ${progress + 36.69}%, 
                    68.95% ${progress + 26.37}%, 
                    69.28% ${progress + 55.19}%, 
                    54.99% ${progress + 55.07}%, 
                    54.75% ${progress + 26.24}%, 
                    45.64% ${progress + 37.78}%, 
                    45.9% ${progress + 20.09}%
                )`;
            }
        }, 4);



        tlAnimacionBanner.to(`.${selectorBanner} ` + ".clip-shape.third", {
            duration: 1,
            ease: "power3.out",
            onUpdate: function () {
                let progress = 100 - this.progress() * 160; // Va de 124.03% a 24.03%

                document.querySelector(`.${selectorBanner} ` + '.clip-shape.third').style.clipPath = `
                polygon(
                65.96% ${progress}%, 
                75.87% ${progress + (39.14 - 25.7)}%, 
                75.97% ${progress + (54.39 - 25.7)}%, 
                68.95% ${progress + (46.37 - 25.7)}%, 
                69.04% ${progress + (62.16 - 25.7)}%, 
                61.85% ${progress + (62.17 - 25.7)}%, 
                61.93% ${progress + (46.24 - 25.7)}%, 
                54.92% ${progress + (54.39 - 25.7)}%, 
                55.16% ${progress + (40.09 - 25.7)}%
            )`;
            }
        }, 4.5);



        // Animación inicial de .clip-shape.five 
        tlAnimacionBanner.to(`.${selectorBanner} ` + ".clip-shape.five", {
            duration: 0.75, // Duración de la animación inicial
            ease: "power3.in",
            onUpdate: function () {
                let progress = this.progress(); // Progreso de la animación (0 a 1)
                let size = 100 - progress * 80; // Va de 120% a 40%
                document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.clipPath = `
            polygon(
                61.77% ${size}%, 
                77.24% ${size + 19}%, 
                77.42% ${size + 36.69}%, 
                68.95% ${size + 26.37}%, 
                69.28% ${size + 55.19}%, 
                54.99% ${size + 55.07}%, 
                54.75% ${size + 26.24}%, 
                45.64% ${size + 37.78}%, 
                45.9% ${size + 20.09}%
            )`;
            },
            onComplete: function () {
                // Después de la animación inicial, esperamos 5 segundos y luego escalamos la flecha
                gsap.to(`.${selectorBanner} ` + ".clip-shape.five", {
                    delay: 1, // Pausa de 5 segundos
                    duration: 1.5, // Duración de la animación de escalado
                    ease: "power3.out",
                    onUpdate: function () {
                        let progress = this.progress(); // Progreso de la animación (0 a 1)
                        let scale = 1 + progress * 10; // Escala de 1x a 11x (ajusta según necesidad)

                        // Puntos originales de la flecha (cuando size = 40, el estado final de la animación inicial)
                        let baseSize = 40;
                        let points = {
                            p1: { x: 61.77, y: baseSize },
                            p2: { x: 77.24, y: baseSize + 19 },
                            p3: { x: 77.42, y: baseSize + 36.69 },
                            p4: { x: 68.95, y: baseSize + 26.37 },
                            p5: { x: 69.28, y: baseSize + 55.19 },
                            p6: { x: 54.99, y: baseSize + 55.07 },
                            p7: { x: 54.75, y: baseSize + 26.24 },
                            p8: { x: 45.64, y: baseSize + 37.78 },
                            p9: { x: 45.9, y: baseSize + 20.09 }
                        };

                        // Calculamos el centro de la flecha para escalar desde ese punto
                        let centerX = (points.p1.x + points.p2.x + points.p3.x + points.p4.x + points.p5.x + points.p6.x + points.p7.x + points.p8.x + points.p9.x) / 9;
                        let centerY = (points.p1.y + points.p2.y + points.p3.y + points.p4.y + points.p5.y + points.p6.y + points.p7.y + points.p8.y + points.p9.y) / 9;

                        // Escalamos los puntos proporcionalmente desde el centro
                        let scaledPoints = {};
                        for (let i = 1; i <= 9; i++) {
                            let point = points[`p${i}`];
                            let dx = point.x - centerX;
                            let dy = point.y - centerY;
                            scaledPoints[`p${i}`] = {
                                x: centerX + dx * scale,
                                y: centerY + dy * scale
                            };
                        }

                        // Desplazamos la imagen de fondo hacia la izquierda
                        let initialPositionX = 12; // Valor inicial de background-position-x (12vw)
                        let finalPositionX = -12; // Valor final (ajusta según cuánto quieres que se desplace)
                        let currentPositionX = initialPositionX + (finalPositionX - initialPositionX) * progress; // Interpolamos la posición

                        let a = -12;
                        let b = 0;
                        let avance = a + (b - a) * progress;


                        // Aplicamos el nuevo background-position
                        document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.backgroundPosition = `${initialPositionX}vw center`;
                        document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.left = `${avance}vw`;

                        // Si la flecha es lo suficientemente grande, mostramos toda la imagen
                        if (scale >= 10) { // Ajusta este valor según el tamaño necesario para cubrir la pantalla
                            document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.clipPath = `
                        polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
                    `;
                        } else {
                            // Aplicamos los puntos escalados al clip - path
                            document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.clipPath = `
                        polygon(
                            ${scaledPoints.p1.x}% ${scaledPoints.p1.y}%, 
                            ${scaledPoints.p2.x}% ${scaledPoints.p2.y}%, 
                            ${scaledPoints.p3.x}% ${scaledPoints.p3.y}%, 
                            ${scaledPoints.p4.x}% ${scaledPoints.p4.y}%, 
                            ${scaledPoints.p5.x}% ${scaledPoints.p5.y}%, 
                            ${scaledPoints.p6.x}% ${scaledPoints.p6.y}%, 
                            ${scaledPoints.p7.x}% ${scaledPoints.p7.y}%, 
                            ${scaledPoints.p8.x}% ${scaledPoints.p8.y}%, 
                            ${scaledPoints.p9.x}% ${scaledPoints.p9.y}%
                        )`;
                        }
                    },
                    onComplete: function () {
                        // Aseguramos que el clip-path sea un rectángulo completo al final
                        document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.clipPath = `
                    polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
                `;
                        // Aseguramos que la imagen de fondo esté en su posición final
                        document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.backgroundPosition = `12vw center`;

                    }
                });
            }
        }, 5);

        //FIN


        tlAnimacionBanner.to(`.${selectorBanner} ` + ".contenidoBannerMain .panelIzq", {
            duration: 3,
            ease: "power3.out",
            x: 0,
        }, 7)

        tlAnimacionBanner.add(() => {
            palabras.forEach((palabra, index) => {
                gsap.fromTo(palabra,
                    {
                        x: index % 2 === 0 ? "-100%" : "100%", // Alterna dirección (izquierda/derecha)
                        opacity: opacidadInicial - decremento * index
                    },
                    {
                        x: 0,
                        opacity: opacidadInicial - decremento * index,
                        duration: 1.5,
                        delay: index * .5, // Pequeño delay en cada una para un efecto en cascada
                        ease: "power2.out"
                    }
                );
            });
        }, 8)



        // animacion de la FLECHA, BOTELLA Y TEXTO 

        // Animacion de la Flecha
        tlAnimacionBanner.fromTo(`.${selectorBanner} ` + ".flechaContainer .flechaImg",
            {
                y: "100vh",
            },
            {
                y: "-90vh",
                // delay: 8.5,
                duration: 1.5,
                ease: "power3.out",
            },
            9,
        );

        // // Animacion de la Botella
        tlAnimacionBanner.fromTo(`.${selectorBanner} ` + ".flechaContainer .botellaImg",
            {
                y: "100vh",
            },
            {
                y: "-75vh",
                // delay: 8.5,
                duration: 1.25,
                ease: "power3.out",
                onComplete: moverAleatoriamente
            },
            9.35,
        );

        tlAnimacionBanner.add(() => {
            spans1.forEach((letra, index) => {
                gsap.fromTo(letra,
                    {
                        scale: 0.1, // Empieza pequeña (como si estuviera lejos)
                        z: -1000, // Comienza muy "lejos" en el eje Z para profundidad
                        opacity: 0, // Asegurar que esté oculta al inicio
                        y: index % 2 === 0 ? "-100" : "100",
                    },
                    {
                        scale: 1, // Crece a su tamaño normal
                        z: 0, // Se acerca al plano normal
                        opacity: 1, // Se hace visible durante la animación
                        duration: .5,
                        ease: "power3.out",
                        delay: index * 0.2, // Retraso secuencial según el orden
                        y: 0,
                    }
                );
            });
        }, 9);

        tlAnimacionBanner.add(() => {
            spans2.forEach((letra, index) => {
                gsap.fromTo(letra,
                    {
                        scale: 0.1, // Empieza pequeña (como si estuviera lejos)
                        z: -1000, // Comienza muy "lejos" en el eje Z para profundidad
                        opacity: 0, // Asegurar que esté oculta al inicio
                        y: index % 2 === 0 ? "-100" : "100",
                    },
                    {
                        scale: 1, // Crece a su tamaño normal
                        z: 0, // Se acerca al plano normal
                        opacity: 1, // Se hace visible durante la animación
                        duration: .5,
                        ease: "power3.out",
                        delay: index * 0.1, // Retraso secuencial según el orden
                        y: 0
                    }
                );
            });
        }, 9.5);

        gsap.set(".navContainer .logoMenu", { y: -200 })

        tlAnimacionBanner.fromTo(".navContainer", {
            opacity: 0,
        }, {
            opacity: 1,
            onComplete: () => {
                tlAnimacionBanner.fromTo(".navContainer .logoMenu", {
                    y: -200
                }, {
                    y: 0
                })
            }
        })

        return tlAnimacionBanner
    }

    function animamarBannerHomeMobile(selectorBanner) {

        // Define la opacidad inicial y el decremento
        let opacidadInicial = 1;
        const decremento = 0.12;
        const tlAnimacionBanner = gsap.timeline();


        document.querySelector(`.${selectorBanner} ` + ".loaderLogoContainer .logoContainer").innerHTML = LetraP + LetraR + LetraO;
        document.querySelector(`.${selectorBanner} ` + ".loaderLogoContainer .flechaContainer").innerHTML = FlechaLogo;

        // logoLetras.forEach((logo, index) => {
        gsap.to(`.${selectorBanner} ` + ".loaderLogoContainer .logoContainer svg", {
            opacity: .5,
            duration: .5,
            stagger: {
                each: .25, // Intervalo entre cada animación
                repeat: 4,
                yoyo: true // Vuelve a su estado original antes de repetir
            }
        });

        gsap.to(`.${selectorBanner} ` + ".loaderLogoContainer .flechaContainer svg path", {
            duration: .5,
            fill: "#1E1E1E",
            repeat: 4,    // Repite indefinidamente
            yoyo: true,    // Vuelve al color original antes de repetir
            ease: "power1.inOut" // Suaviza la transición
        });

        gsap.to(`.${selectorBanner} ` + ".loaderLogoContainer .flechaContainer svg", {
            duration: .5,
            y: 5,
            repeat: 4,    // Repite indefinidamente
            yoyo: true,    // Vuelve al color original antes de repetir
            ease: "power1.inOut" // Suaviza la transición
        });


        tlAnimacionBanner.to(`.${selectorBanner} ` + ".loaderLogoContainer", {
            duration: 1,
            opacity: 0,
        }, 2.5);



        // Función para dividir el texto en spans
        const texto1 = document.querySelector(`.${selectorBanner} ` + ".titularContainer .texto1");
        const textoOriginal1 = texto1.textContent;
        const letras1 = textoOriginal1.split("");

        const texto2 = document.querySelector(`.${selectorBanner} ` + ".titularContainer .texto2");
        const textoOriginal2 = texto2.textContent;
        const letras2 = textoOriginal2.split("");

        const palabras = document.querySelectorAll(`.${selectorBanner} ` + ".palabrasContainer h3");

        // document.querySelector('.bodyContainer').style.opacity = 1;
        // Limpiar el contenido original
        texto1.innerHTML = "";
        texto2.innerHTML = "";

        // Crear un <span> para cada letra
        letras1.forEach((letra) => {
            const span = document.createElement("span");
            span.textContent = letra;
            texto1.appendChild(span);
        });

        // Crear un <span> para cada letra
        letras2.forEach((letra) => {
            const span = document.createElement("span");
            span.textContent = letra;
            texto2.appendChild(span);
        });

        // Seleccionar las letras recién creadas
        const spans1 = document.querySelectorAll(`.${selectorBanner} ` + ".titularContainer .texto1 span");
        const spans2 = document.querySelectorAll(`.${selectorBanner} ` + ".titularContainer .texto2 span");


        // Animación inicial de .clip-shape.five 
        tlAnimacionBanner.to(`.${selectorBanner} ` + ".clip-shape.five", {
            duration: 0.75, // Duración de la animación inicial
            ease: "power3.in",
            opacity: 1,
            onUpdate: function () {
                let progress = this.progress(); // Progreso de la animación (0 a 1)
                let size = 100 - progress * 60; // Va de 120% a 40%
                document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.clipPath = `
                    polygon(
                        67.53% ${size}%, 
                        72.1% ${size + 5.92}%, 
                        71.87% ${size + 14.07}%, 
                        68.95% ${size + 10.18}%, 
                        68.86% ${size + 16.81}%, 
                        65.81% ${size + 16.91}%, 
                        65.84% ${size + 10.26}%, 
                        62.7% ${size + 14.52}%, 
                        62.82% ${size + 6.15}%
                    )`;
            },
            onComplete: function () {
                // Después de la animación inicial, esperamos 5 segundos y luego escalamos la flecha
                gsap.to(".clip-shape.five", {
                    delay: 1, // Pausa de 5 segundos
                    duration: 1.5, // Duración de la animación de escalado
                    ease: "power3.out",
                    onUpdate: function () {
                        let progress = this.progress(); // Progreso de la animación (0 a 1)
                        let scale = 1 + progress * 10; // Escala de 1x a 11x (ajusta según necesidad)

                        // Puntos originales de la flecha (cuando size = 40, el estado final de la animación inicial)
                        let baseSize = 40;
                        let points = {
                            p1: { x: 61.77, y: baseSize },
                            p2: { x: 77.24, y: baseSize + 19 },
                            p3: { x: 77.42, y: baseSize + 36.69 },
                            p4: { x: 68.95, y: baseSize + 26.37 },
                            p5: { x: 69.28, y: baseSize + 55.19 },
                            p6: { x: 54.99, y: baseSize + 55.07 },
                            p7: { x: 54.75, y: baseSize + 26.24 },
                            p8: { x: 45.64, y: baseSize + 37.78 },
                            p9: { x: 45.9, y: baseSize + 20.09 }
                        };

                        // Calculamos el centro de la flecha para escalar desde ese punto
                        let centerX = (points.p1.x + points.p2.x + points.p3.x + points.p4.x + points.p5.x + points.p6.x + points.p7.x + points.p8.x + points.p9.x) / 9;
                        let centerY = (points.p1.y + points.p2.y + points.p3.y + points.p4.y + points.p5.y + points.p6.y + points.p7.y + points.p8.y + points.p9.y) / 9;

                        // Escalamos los puntos proporcionalmente desde el centro
                        let scaledPoints = {};
                        for (let i = 1; i <= 9; i++) {
                            let point = points[`p${i}`];
                            let dx = point.x - centerX;
                            let dy = point.y - centerY;
                            scaledPoints[`p${i}`] = {
                                x: centerX + dx * scale,
                                y: centerY + dy * scale
                            };
                        }

                        // Desplazamos la imagen de fondo hacia la izquierda
                        let initialPositionX = 'center'; // Valor inicial de background-position-x (12vw)
                        let finalPositionX = 0; // Valor final (ajusta según cuánto quieres que se desplace)
                        let currentPositionX = initialPositionX + (finalPositionX - initialPositionX) * progress; // Interpolamos la posición

                        let a = -12;
                        let b = 0;
                        let avance = a + (b - a) * progress;


                        // Aplicamos el nuevo background-position
                        document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.backgroundPosition = `${initialPositionX}vw center`;
                        document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.left = `${avance}vw`;

                        // Si la flecha es lo suficientemente grande, mostramos toda la imagen
                        if (scale >= 10) { // Ajusta este valor según el tamaño necesario para cubrir la pantalla
                            document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.clipPath = `
                        polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
                    `;
                        } else {
                            // Aplicamos los puntos escalados al clip - path
                            document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.clipPath = `
                        polygon(
                            ${scaledPoints.p1.x}% ${scaledPoints.p1.y}%, 
                            ${scaledPoints.p2.x}% ${scaledPoints.p2.y}%, 
                            ${scaledPoints.p3.x}% ${scaledPoints.p3.y}%, 
                            ${scaledPoints.p4.x}% ${scaledPoints.p4.y}%, 
                            ${scaledPoints.p5.x}% ${scaledPoints.p5.y}%, 
                            ${scaledPoints.p6.x}% ${scaledPoints.p6.y}%, 
                            ${scaledPoints.p7.x}% ${scaledPoints.p7.y}%, 
                            ${scaledPoints.p8.x}% ${scaledPoints.p8.y}%, 
                            ${scaledPoints.p9.x}% ${scaledPoints.p9.y}%
                        )`;
                        }
                    },
                    onComplete: function () {
                        // Aseguramos que el clip-path sea un rectángulo completo al final
                        document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.clipPath = `
                    polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)
                `;
                        // Aseguramos que la imagen de fondo esté en su posición final
                        document.querySelector(`.${selectorBanner} ` + '.clip-shape.five').style.backgroundPosition = `center center`;

                    }
                });
            }
        });

        //FIN

        // animacion de la FLECHA, BOTELLA Y TEXTO 

        // Animacion de la Flecha
        tlAnimacionBanner.fromTo(`.${selectorBanner} ` + ".flechaContainer .flechaImg",
            {
                y: "100vh",
            },
            {
                y: "-90vh",
                duration: 1.5,
                ease: "power3.out",
            }, 7);

        // // Animacion de la Botella
        tlAnimacionBanner.fromTo(`.${selectorBanner} ` + ".flechaContainer .botellaImg",
            {
                y: "100vh",
            },
            {
                y: "-75vh",
                duration: 1.25,
                ease: "power3.out",
                onComplete: moverAleatoriamente
            });

        tlAnimacionBanner.add(() => {
            spans1.forEach((letra, index) => {
                gsap.fromTo(letra,
                    {
                        scale: 0.1, // Empieza pequeña (como si estuviera lejos)
                        z: -1000, // Comienza muy "lejos" en el eje Z para profundidad
                        opacity: 0, // Asegurar que esté oculta al inicio
                        y: index % 2 === 0 ? "-100" : "100",
                    },
                    {
                        scale: 1, // Crece a su tamaño normal
                        z: 0, // Se acerca al plano normal
                        opacity: 1, // Se hace visible durante la animación
                        duration: .5,
                        ease: "power3.out",
                        delay: index * 0.2, // Retraso secuencial según el orden
                        y: 0,
                    }
                );
            });
        });

        tlAnimacionBanner.add(() => {
            spans2.forEach((letra, index) => {
                gsap.fromTo(letra,
                    {
                        scale: 0.1, // Empieza pequeña (como si estuviera lejos)
                        z: -1000, // Comienza muy "lejos" en el eje Z para profundidad
                        opacity: 0, // Asegurar que esté oculta al inicio
                        y: index % 2 === 0 ? "-100" : "100",
                    },
                    {
                        scale: 1, // Crece a su tamaño normal
                        z: 0, // Se acerca al plano normal
                        opacity: 1, // Se hace visible durante la animación
                        duration: .5,
                        ease: "power3.out",
                        delay: index * 0.1, // Retraso secuencial según el orden
                        y: 0
                    }
                );
            });
        });



        gsap.set(".navContainer .logoMenu", { y: -200 })

        tlAnimacionBanner.fromTo(".navContainer", {
            opacity: 0,
        }, {
            opacity: 1,
            onComplete: () => {
                tlAnimacionBanner.fromTo(".navContainer .logoMenu", {
                    y: -200
                }, {
                    y: 0
                })
            }
        })

        return tlAnimacionBanner;
    }


    // Función que anima el div a una nueva posición aleatoria
    function moverAleatoriamente() {

        const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" });
        const element = ".flechaContainer .botellaImg";
        // Añade animaciones a la línea de tiempo
        tl.to(element, { y: "-75vh", duration: 2 }) // Mueve hacia arriba 10px
            .to(element, { x: 3, duration: 2 })  // Mueve hacia la derecha 10px
            .to(element, { y: "-73vh", duration: 2 })  // Mueve hacia abajo 10px
            .to(element, { x: -3, duration: 2 }); // Mueve hacia la izquierda 10px

    }

    let currentTimeline;

    const mobileTimeline = () => {
        return animamarBannerHomeMobile('carruselBannerPro')
    }
    const tabletTimeline = () => {
        return animamarBannerHomeMobile('carruselBannerPro')
    }
    const desktopTimeline = () => {
        return animamarBannerHome('carruselBannerPro')
    }

    // Detectar el rango de pantalla actual

    function getDeviceType() {
        const width = window.innerWidth;
        if (width <= 768) return "mobile";
        if (width > 768 && width <= 992) return "tablet";
        return "desktop";
    }

    // Lógica para ejecutar la animación correcta

    function setupAnimation() {
        // console.log(currentTimeline)
        if (currentTimeline) currentTimeline.kill(); // Detiene animación anterior

        const device = getDeviceType();

        // console.log(device)

        switch (device) {
            case "mobile":
                currentTimeline = mobileTimeline();
                break;
            case "tablet":
                currentTimeline = tabletTimeline();
                break;
            case "desktop":
                currentTimeline = desktopTimeline();
                break;
        }
    }

    // Ejecutar al cargar
    setupAnimation();

    // Escuchar cambios de tamaño y actualizar animación si cambia el rango
    let lastDevice = getDeviceType();

    window.addEventListener("resize", () => {
        const newDevice = getDeviceType();
        if (newDevice !== lastDevice) {
            location.reload(true);
            // lastDevice = newDevice;
            // console.log('entro');
            // setupAnimation();
        }
    });




    // FIN




});