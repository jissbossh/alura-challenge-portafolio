const aboutContainer=document.getElementById("about-container");

function addParagraph(){
    // const paragraphs=["Apasionado por la tecnología, informática y programación, he desarrollado una sólida trayectoria profesional desde 2015 en los puestos de:",
    //     "Analista de Sistemas (Noviembre 2015 - Febrero 2020): En una empresa fabricante de productos de arcilla, me encargué de desarrollar software para optimizar los procesos internos.",
    //     "Analista de Tecnología (Marzo 2021 - Junio 2021): En el sector ganadero, brindé soporte técnico a equipos tecnológicos, asegurando el correcto funcionamiento de las herramientas utilizadas.",
    //     "Contratista en Tecnología (Septiembre 2022 - Diciembre 2022): En una entidad municipal, proporcioné soporte técnico para equipos, redes y sistemas informáticos, además de apoyo técnico y logístico para el área administrativa.",
    //     "Contratista en Tecnología (Febrero 2023 - Noviembre 2023): Continué en la misma entidad municipal, reforzando mis responsabilidades en el soporte técnico de equipos, redes y sistemas, así como en el apoyo logístico para la administración.",
    //     "Estoy comprometido con la mejora continua y la optimización de procesos mediante el uso de la tecnología.",
    // ]
    const paragraphs=["Soy un apasionado de la tecnología y la programación, con una trayectoria profesional desde 2015 en diversos roles:",
        "Analista de Sistemas, Analista de Tecnología, Contratista en Tecnología y Dearrollador de Software.",
        "Soy curioso, analítico, respetuoso y amable.",
        "Me encanta resolver problemas y retos mediante programación, siempre en la búsqueda constante de mejorar en los ámbitos profesional y personal.",
        ""
    ]
    for (let i = 0; i < paragraphs.length; i += 1) {
        const p=document.createElement("p");
        p.classList.add('about__paragraph');
        p.innerHTML=paragraphs[i];
        aboutContainer.appendChild(p);
        aboutContainer.insertBefore(p, aboutContainer.children[i+1]);
    }
    const img = document.createElement('img');
    img.id="signature";
    img.src="";
    img.classList.add('signature');
    aboutContainer.appendChild(img);
}


function upAbout(){
    addParagraph();
}

export default {
    upAbout
};
