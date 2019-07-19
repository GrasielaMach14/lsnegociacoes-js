/* Esta classe que será especializada em obter as negociações do servidor e será utilizada pela controller
   O service não terá acesso a View, porque ele não tem referência para os elementos da controller. Logo, removemos this._mensagem.texto a mensagem de erro para o usuário*/
	class NegociacaoService{
		//NegociacaoService é dependente de HttpService, vamos declarar isto no construtor da classe.
		constructor(){

			this.http = new HttpService();

		}

		obterNegociacaoSemanal(){ //Para ter acesso ao retorno, porque será na controller que levantará os dados com os quais serãp atualizados o model e a View, pois estes serão renderizada então usaremos o cb

			return new Promise((resolve, reject) => {

	            this.http
	                .get('negociacoes/semana')
	                .then(negociacoes => {
	                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
	                })
	                .catch(erro => {
	                    console.log(erro);
	                    reject('Não foi possível obter as negociações da semana');
	                })
	        });
	  }

		obterNegociacaoSemanaAnterior(){ 

			return new Promise((resolve, reject) => { //Promise tem a finalidade de trazer resultados futuros de uma operação, para isso serão chamado duas funções o resolve p mandar a resposta e reject para tratamento de erros

				this.http
					.get('negociacoes/anterior')
					.then(negociacoes => {  //Com then(), teremos acesso à lista de negociações e poderemos fazer as negociações que desejamos. 
						console.log(negociacoes);
						resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); //teremos que converter o JSON, fazendo o parse() e para cada item do array, teremos que criar uma negociação. P/ realizarmos esta ação, usaremos a função map() q varrerá o array e criará um novo array com modificações
					})
					.catch(erro => {
							console.log(erro);
							reject('Não foi possível obter negociações da semana anterior.'); //O reject será responsável pela mensagem que será exibida para o usuário.
					});
			 });
		}

		obterNegociacaoSemanaRetrasada(){ 

			return new Promise((resolve, reject) => { //Promise tem a finalidade de trazer resultados futuros de uma operação, para isso serão chamado duas funções o resolve p mandar a resposta e reject para tratamento de erros

				this.http
					.get('negociacoes/retrasada')
					.then(negociacoes => {  //Com then(), teremos acesso à lista de negociações e poderemos fazer as negociações que desejamos. 
						console.log(negociacoes);
						resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); //teremos que converter o JSON, fazendo o parse() e para cada item do array, teremos que criar uma negociação. P/ realizarmos esta ação, usaremos a função map() q varrerá o array e criará um novo array com modificações
					})
					.catch(erro => {
							console.log(erro);
							reject('Não foi possível obter negociações da semana retrasada.'); //O reject será responsável pela mensagem que será exibida para o usuário.
					});
			 });
		}

	}

/*

 Pedimos para o serviço http buscar negociacoes/semana e, no retorno, 
 já teremos objetos "parseados". Mas no caso do NegociacaoService que 
 quando usamos este endereço, trata-se de uma lista de negociações com 
 um objeto - que contem dado, quantidade e valor. Nós converteremos esta 
 lista para outra em que teremos instâncias de negociações e passaremos 
 para o resolve.
*/