	class NegociacoesView{
		//O constructor receberá um elemento do DOM para associar parte do HTML ao js
		constructor(elemento){

			this._elemento = elemento;
		}

		_template(model){ //Retornará uma template string de uma tabela HTML 

			return ` 
			<table class="table table-hover table-bordered">
		        <thead>
		            <tr>
		                <th>DATA</th>
		                <th>QUANTIDADE</th>
		                <th>VALOR</th>
		                <th>VOLUME</th>
		            </tr>
		        </thead>
		        
		        <tbody>
		        	${model.negociacoes.map(n => {

				      return `
				        <tr>
				            <td>`var_dump(${DateHelper.dataParaTexto(n.data)});
				            die();`</td>
				            <td>${n.quantidade}</td>
				            <td>${n.valor}</td>
				            <td>${n.volume}</td>
				        </tr>
				      `
				      })}
		        </tbody>
		        
		        <tfoot>
		        </tfoot>
    		</table>
    		`;

		}
		//O innerHTML será responsável por converter as strings em elementos do DOM. Isto será inserido com filho da <div>
		update(model){ //O model solicita a View para que se renderize com o novo modelo da negociação

			this._elemento.innerHTML = this._template(model);

		}
	}