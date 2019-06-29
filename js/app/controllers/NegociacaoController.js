	class NegociacaoController{

		constructor(){//Este método permitirá que o DOM seja acessado apenas uma vez os elementos x	usando o this

			let $ = document.querySelector.bind(document);//a função querySelector pertencerá a variável$ mas o bind serve para criar associação com o document
			this._inputData = $('#data');//a entrada desta variável data esta em formato de String e não de data
			this._inputQuantidade = $('#quantidade');//Usando a convenção _ indica que não pode ser acessado estes dados
			this._inputValor = $('#valor');
			//Adiciona o atributo que irá adicionar lista de negociações, o this funciona como contexto do NegociacaoController
			this._listaNegociacoes = new ListaNegociacoes(this, function(model){// adicionar o function() dentro de new ListaNegociacao e passar uma função anônima como parâmetro, através do model passrá o modelo do adiciona e esvazia
				
				this._negociacoesView.update(model);//Após a criação de NegociacoesView chamará update p a tabela aparecer dentro da View, usa no parâmetro a lista para tazer os dados para dentro da tabela

			});
			this._negociacoesView = new NegociacoesView($('#negociacoesView'));//Cria propriedade negociacoesView e chama a classe, tbm fará a busca do id no HTML
			this._mensagem = new Mensagem();//É criada a variável mensagem chamando a classe do model
			this._mensagemView = new MensagemView($('#mensagemView'));//É declarada a View nesta classe
			
			this._mensagemView.update(this._mensagem);
			
		}

		adiciona(event){
			
			event.preventDefault();
			this._listaNegociacoes.adiciona(this._criaNegociacao());//Chamar a função que irá cadastrar lista de negociações
			this._mensagem.texto = 'Negociação adicionada com sucesso.';
			this._mensagemView.update(this._mensagem);
			//this._negociacoesView.update(this._listaNegociacoes);
			this._limpaFormulario();

			/**
			console.log(this._listaNegociacoes.negociacoes);
			//console.log(DateHelper.textoParaData(this._inputData.value));
			console.log(typeof(this._inputData.value));//testa o tipo da variável(string, float ou int...) 
			console.log(this._inputData.value);**/

		}

		apaga(){ //Este método será chamado no botão Apagar do index  

			this._listaNegociacoes.esvazia();//Chama o método esvazia() na classe ListaNegociacoes para esvaziar o modelo
			this._negociacoesView.update(this._listaNegociacoes);//Atualiza a lista

			this._mensagem.texto = 'Negociações apagadas com sucesso.';//Apresenta a mensagem
			//this._mensagemView.update(this._mensagem);//Atualiza o modelo da mensagem

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