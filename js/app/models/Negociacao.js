	class Negociacao{

		constructor(data, quantidade, valor){//A função constructor definirá os atributos da classe, assim que é criado uma nova Negociacao um padrão de atributos é criado

			this._data = new Date(data.getTime());//getTime() fará que toda as vezes q modificar o campo data ele gerará uma nova referência, protegendo o dado 
			this._quantidade = quantidade;//A variável implícita this aponta apra o atributo e ligará ao determinado objeto instaciado durante a operação
			this._valor = valor;//O _ é uma convenção em que o atributo só pode ser modificado na classe
			Object.freeze(this);//Este método não deixa o objeto ser acessados pelos demais, deve ser insrido no final da função

		}

		get volume(){//Este método devolverá o cálculo do Volume para a classe

			return this.quantidade * this.valor;

		}
		get data(){//É usado o método de encapsulamento

			return new Date(this._data.getTime());//Este campo está protegido por causa do getTime();
		
		}

		get quantidade(){

			return this._quantidade;
		
		}
		get valor(){

			return this._valor;

		}
	}