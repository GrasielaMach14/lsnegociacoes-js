	//Classe Pai
	class View {
		//O constructor receberá um elemento do DOM para associar parte do HTML ao js
		constructor(elemento){

			this._elemento = elemento;
			
		}
		//O innerHTML será responsável por converter as strings em elementos do DOM. Isto será inserido com filho da <div>
		update(model){ //O model solicita a View para que se renderize com o novo modelo da negociação

			this._elemento.innerHTML = this._template(model);

		}
	}