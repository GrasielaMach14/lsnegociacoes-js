	//Para que a mensagem seja apresentada na tela é necessário criar a classe que execute a View
	class MensagemView extends View {
		//O construtor chamará o super() - fazendo referência ao super class, a classe pai
		constructor(elemento) {
        
        	super(elemento);
    	
    	}
		//É feito o if ternário para que o bloco da mensagem só apareça se existir algum conteúdo, se dentro da tag <p> for vazio é falso
		_template(model) {

    		return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
  
		}  
		
	}