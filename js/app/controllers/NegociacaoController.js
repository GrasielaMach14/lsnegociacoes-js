	class NegociacaoController{

		constructor(){//Este método permitirá que o DOM seja acessado apenas uma vez os elementos x	usando o this

			let $ = document.querySelector.bind(document);//a função querySelector pertencerá a variável$ mas o bind serve para criar associação com o document
			this._inputData = $('#data');//a entrada desta variável data esta em formato de String e não de data
			this._inputQuantidade = $('#quantidade');//Usando a convenção _ indica que não pode ser acessado estes dados
			this._inputValor = $('#valor');
			this._listaNegociacoes = new ListaNegociacoes();//Adiciona o atributo que irá adicionar lista de negociações
			this._negociacoesView = new NegociacoesView($('#negociacoesView'));//Cria propriedade negociacoesView e chama a classe, tbm fará a busca do id no HTML

			this._negociacoesView.update(this._listaNegociacoes);//Após a criação de NegociacoesView chamará update p a tabela aparecer dentro da View, usa no parâmetro a lista para tazer os dados para dentro da tabela
		}

		adiciona(event){
			
			event.preventDefault();
			this._listaNegociacoes.adiciona(this._criaNegociacao());//Chamar a função que irá cadastrar lista de negociações
			this._negociacoesView.update(this._listaNegociacoes);
			this._limpaFormulario();

			/**
			console.log(this._listaNegociacoes.negociacoes);
			//console.log(DateHelper.textoParaData(this._inputData.value));
			console.log(typeof(this._inputData.value));//testa o tipo da variável(string, float ou int...) 
			console.log(this._inputData.value);**/

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