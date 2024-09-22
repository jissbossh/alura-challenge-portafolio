import about from "./scripts/about.js";
import contact from "./scripts/contact.js";
import education from "./scripts/education.js";
import experience from "./scripts/experience.js";
import footer from "./scripts/footer.js";
import header from "./scripts/header.js";
import hobbies from "./scripts/hobbies.js";
import profile from "./scripts/profile.js";
import reset from "./scripts/reset.js";
import skills from "./scripts/skills.js";

// import validacion from "./scripts/validacion.js";

// import animate from "./scripts/animate.js";

function main() {
	var favIcon = document.getElementById('favicon');
	favIcon.rel = 'icon';
	favIcon.href = 'assets/images/png/favicon.png';
	favIcon.setAttribute('sizes', '32x32');
	favIcon.setAttribute('type', 'image/png');
	reset.upReset();
	about.upAbout();
	header.upHeader();
	profile.upProfile();
	skills.upSkills();
	hobbies.upHobbies();
	education.upEducation();
	experience.upExperience();
	contact.upContact();
	footer.upFooter();
}
main();
//document.addEventListener('DOMContentLoaded', main);

//window.onload = main();

// Iniciar el efecto al cargar la página
//window.onload = animate.escribirTexto();
