	class ListaNegociacoes{ //Esta classe irá cadastrar lista de negociações
		
		//Colocar uma armadilha que será disparada quando alguém pisar no código do ListaNegociacoes.js
		constructor(){

			this._negociacoes = [];
			
		}

		adiciona(negociacao){

			this._negociacoes.push(negociacao);
						
		}

		get negociacoes(){

			 return [].concat(this._negociacoes); //Ao passarmos o this._negociacoes dentro do concat(), o retorno será uma nova lista, um novo array, isso não permite que alguém manipule o código utilizando o push e criando uma outra lista ñ permitida

		}

		esvazia(){//O array de negociações apagará todos os itens anteriores da lista

			this._negociacoes = [];
						
		}

		get volumeTotal(){ ////A função reduce irá processar o array e depois dispor um único resultado, deixando o código mais enxuto, tbm é usado o arrow functions

			return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);

		}
	}