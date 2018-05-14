function validaForm(frm){
	if (frm.nome.value == "" || frm.nome.value == null || frm.nome.length < 3){
		alert ('Insira o seu nome');
		frm.nome.focus();
		return false;
	}

	 if(frm.sobrenome.value == "" || frm.sobrenome.value == null || frm.sobrenome.value.lenght < 3) {
	        alert("Por favor, indique o seu nome.");
	        frm.nome.focus();
	        return false;
	    }

	     if(frm.assunto.value == "" || frm.assunto.value == null || frm.assunto.value.lenght < 3) {
	        alert("Por favor, indique o seu nome.");
	        frm.nome.focus();
	        return false;
	    }
}