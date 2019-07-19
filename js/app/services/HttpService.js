	class HttpService{

		get(url){

			return new Promise((resolve, reject) => {

				let xhr = new XMLHttpRequest(); //A variável é uma instância de new XMLHttpRequest()
				
				xhr.open('GET', 'negociacoes/url'); //O método open() recebeu dois parâmetros: o primeiro especifica o tipo de requisição a ser realizada(GET), o segundo é o endereço (negociacoes/semana)
				
				xhr.onreadystatechange = () => {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							resolve(JSON.parse(xhr.responseText)); //Chama a instância new Date pq a data vem em formato padrão do Javascript e nao do DateHelper()
						}else{
							reject(xhr.responseText); //o cb ou callback é uma função chamada quando uma tarefa for executada, xhr.responseText é um texto que o servidor retorna
						}
					}
				}
				
				xhr.send(); //Realiza a execução da requisição
			});
		}
	}