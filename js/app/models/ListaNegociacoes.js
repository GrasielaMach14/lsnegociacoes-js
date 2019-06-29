	class ListaNegociacoes{ //Esta classe irá cadastrar lista de negociações
		
		//Colocar uma armadilha que será disparada quando alguém pisar no código do ListaNegociacoes.js
		constructor(armadilha, contexto){//Adicionaremos a armadilha como parâmetro de constructor() e incluir uma propriedade chamada _armadilha

			this._negociacoes = [];
			this._armadilha = armadilha;//A armadilha é uma função, que guardaremos no constructor() para chamá-la posteriormente quando chamarmos o adiciona() e esvazia()
			this._contexto = contexto;//Adiciona este atributo para apontar a classe como contexto usando o this

		}

		adiciona(negociacao){

			this._negociacoes.push(negociacao);
			//this._armadilha(this);
			Reflect.apply(this._armadilha, this._contexto, [this]);//Reflect.apply é o método estático da classe recebe os 3 paramêtros, o this aponta para ListaNegociacoes

		}

		get negociacoes(){

			 return [].concat(this._negociacoes); //Ao passarmos o this._negociacoes dentro do concat(), o retorno será uma nova lista, um novo array, isso não permite que alguém manipule o código utilizando o push e criando uma outra lista ñ permitida

		}

		esvazia(){//O array de negociações apagará todos os itens anteriores da lista

			this._negociacoes = [];
			//this._armadilha(this);
			Reflect.apply(this._armadilha, this._contexto, [this]);

		}
	}