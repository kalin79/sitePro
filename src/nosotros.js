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
    tlAnimacionBanner.to(`.${selectorBanner} ` + ".flechaContainer .botellaImg",
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