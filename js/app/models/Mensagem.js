	//Vamos criar um modelo da Mensagem para Negociação
	class Mensagem{

		constructor(texto = ''){

			this._texto;

		}

		get texto(){

			return this._texto;

		}

		set texto(texto){

			this._texto = texto;

		}

}

	let mensagem = new Mensagem('');	