function upContact() {
	var formContactImg = document.getElementById('form-contact-img');
	formContactImg.src = 'assets\\images\\png\\contact_image.png';
	formContactImg.alt = 'Contact Image';

	var formContactTitle= document.getElementById('form-contact-title');
	formContactTitle.innerText='Contacto';

	var formContactSubtext01= document.getElementById('form-contact-subtext01');
	formContactSubtext01.innerText='¿Quieres contactarme?';

	var formContactSubtext02= document.getElementById('form-contact-subtext02');
	formContactSubtext02.innerText='Complete el siguiente formulario y me pondré en contacto con usted loantes posible.';

	var formContactName= document.getElementById('form-contact-name');
	formContactName.type="text";
	formContactName.name="nombre";
	formContactName.setAttribute('maxlength', '50');
	formContactName.placeholder="Nombre";
	formContactName.required = true;

	var formContactEmail= document.getElementById('form-contact-email');
	formContactEmail.type="email";
	formContactEmail.name="email";
	formContactEmail.setAttribute('maxlength', '70');
	formContactEmail.placeholder="email@dominio.com";
	formContactEmail.required = true;

	var formContactAsunto= document.getElementById('form-contact-asunto');
	formContactAsunto.type="text";
	formContactAsunto.name="asunto";
	formContactAsunto.setAttribute('maxlength', '50');
	formContactAsunto.placeholder="Asunto";
	formContactAsunto.required = true;

	var formContactMensaje= document.getElementById('form-contact-mensaje');

	formContactMensaje.rows = 5;
	formContactMensaje.name="mensaje";
	formContactMensaje.setAttribute('maxlength', '500');
	formContactMensaje.placeholder="Mensaje";
	formContactMensaje.required = true;


	var formContactBotonEnviar =document.getElementById('form-contact-boton-enviar');
	formContactBotonEnviar.type="submit";
	formContactBotonEnviar.innerText='Enviar Mensaje';
}

export default {
	upContact
};
