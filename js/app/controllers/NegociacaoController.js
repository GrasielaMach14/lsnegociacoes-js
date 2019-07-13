	class NegociacaoController{

		constructor(){//Este método permitirá que o DOM seja acessado apenas uma vez os elementos x	usando o this

			let $ = document.querySelector.bind(document);//a função querySelector pertencerá a variável$ mas o bind serve para criar associação com o document
			this._inputData = $('#data');//a entrada desta variável data esta em formato de String e não de data
			this._inputQuantidade = $('#quantidade');//Usando a convenção _ indica que não pode ser acessado estes dados
			this._inputValor = $('#valor');
			
   	   	    this._listaNegociacoes = new Bind( //Bind é instanciado para receber o modelo, a View e a condição 
   	   	    						new ListaNegociacoes(), 
   	   	    						new NegociacoesView($('#negociacoesView')), 
   	   	    						'adiciona', 'esvazia');

			this._mensagem = new Bind( //O bind deve trazer o proxy já configurado para NegociacaoController
							new Mensagem(), 
							new MensagemView($('#mensagemView')), 
							'texto');
			}

		adiciona(event){
			
			event.preventDefault();
			this._listaNegociacoes.adiciona(this._criaNegociacao());//Chamar a função que irá cadastrar lista de negociações
			this._mensagem.texto = 'Negociação adicionada com sucesso.';
			this._limpaFormulario();
		}

		importarNegociacoes(){

			let xhr = new XMLHttpRequest(); //A variável é uma instância de new XMLHttpRequest()
			
			xhr.open('GET', 'negociacoes/semana'); //O método open() recebeu dois parâmetros: o primeiro especifica o tipo de requisição a ser realizada(GET), o segundo é o endereço (negociacoes/semana)
			
			xhr.onreadystatechange = () => {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						JSON.parse(xhr.responseText)
						.map( objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)) //teremos que converter o JSON, fazendo o parse() e para cada item do array, teremos que criar uma negociação. P/ realizarmos esta ação, usaremos a função map() q varrerá o array e criará um novo com modificações
						.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao)); //para cada item teremos um negociação						
					}else{
						console.log(xhr.responseTxt); //xhr.responseText é um texto
						this._mensagem.texto = "Não foi possível obter as negociações da semana.";
					}
				}
			}
			xhr.send(); //Realiza a execução da requisição
		}

		apaga(){ //Este método será chamado no botão Apagar do index  

			this._listaNegociacoes.esvazia();//Chama o método esvazia() na classe ListaNegociacoes para esvaziar o modelo
			this._negociacoesView.update(this._listaNegociacoes);//Atualiza a lista
		}

		_criaNegociacao(){

			return new Negociacao(
						DateHelper.textoParaData(this._inputData.value), //A classe DateHelper pode ser invocada direto em um outro método	
						this._inputQuantidade.value, 
						this._inputValor.value);
		}

		_limpaFormulario(){

			this._inputData.value = "";
			this._inputQuantidade.value = 1;
			this._inputValor.value = 0.0;

			this._inputData.focus();
		}
	}

	
