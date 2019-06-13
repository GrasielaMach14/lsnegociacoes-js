	class ListaNegociacoes{ //Esta classe irá cadastrar lista de negociações

		constructor(){

			this._negociacoes = [];

		}

		adiciona(negociacao){

			this._negociacoes.push(negociacao);

		}

		get negociacoes(){

			 return [].concat(this._negociacoes); //Ao passarmos o this._negociacoes dentro do concat(), o retorno será uma nova lista, um novo array, isso não permite que alguém manipule o código utilizando o push e criando uma outra lista ñ permitida

		}
	}