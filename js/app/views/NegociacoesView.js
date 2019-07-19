	class NegociacoesView extends View {
		//O construtor chamará o super() - fazendo referência ao super class, a classe pai
		constructor(elemento) {
        
        	super(elemento);
    	
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
		        	${model.negociacoes.map(n =>`
				        <tr>
				            <td>${DateHelper.dataParaTexto(n.data)}</td>
				            <td>${n.quantidade}</td>
				            <td>${n.valor}</td>
				            <td>${n.volume}</td>
				        </tr>
				      `).join('')}
		        </tbody>
		        
		        <tfoot>
		        	<td colspan="3"></td>
		        	<td>
		        		${model.volumeTotal}
		        	</td>
		        </tfoot>
    		</table>
    		`;

		}
		
	}