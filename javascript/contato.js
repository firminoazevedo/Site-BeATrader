function validaForm(frm){
	if (frm.nome.value == "" || frm.nome.value == null || frm.nome.length < 3){
		alert ('Insira o seu nome !');
		frm.nome.focus();
		return false;
	} else

	 if(frm.sobrenome.value == "" || frm.sobrenome.value == null || frm.sobrenome.value.lenght < 3) {
	        alert("Por favor, Insira o seu sobrenome!");
	        frm.sobrenome.focus();
	        return false;
	    }
	   else 

	     if(frm.assunto.value == "" || frm.assunto.value == null || frm.assunto.value.lenght < 10) {
	        alert("Por favor, Insira o assunto do Email");
	        frm.assunto.focus();
	        return false;
	    } else {
	    	alert("Email enviado com sucesso");
	    }
}