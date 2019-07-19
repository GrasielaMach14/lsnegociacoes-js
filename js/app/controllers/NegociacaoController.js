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

			let service = new NegociacaoService();

			Promise.all([ //Recebe uma array com os diversos promises, serão exibidos na sequência ordenada e receberá a lista de promises dentro de um array []
				service.obterNegociacaoSemanal(), //método obterNegociacoesDaSemana() devolve uma promessa de que tentará obter os dados, se for cumprida  receberá lista de negociações
				service.obterNegociacaoSemanaAnterior(), 
				service.obterNegociacaoSemanaRetrasada()]
			).then(   						//then é o método da promise, e se a promessa for cumprida, receberemos a lista de negociação e, com esta, poderemos fazer o forEach()
				negociacoes => {
					negociacoes 	//Reduce irá transformar um conjunto de arrays negociações em um só
					.reduce((arrayAchatado, array) => arrayAchatado.concat(array), []) //Recebe dois parâmetros o array reduzido em 1 só será concatenado em arrayAchatado
					.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao)); //Cada posição do array será uma lista de negociações, por isso utiliza o forEach
					this._mensagem.texto = "Negociações importadas com sucesso.";		
					})
					.catch(error => this._mensagem.texto = error);  //Caso ocorrer um erro, vamos encadear uma função catch() na promise
					// Estamos aplicando um padrão que vem do mundo NodeJS, e que recebe o nome de Error-First-Callback.
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

	
