	/*O padrão de projeto Factory consiste em uma classe ser especializada p criar determinado tipo de objeto*/
	class ProxyFactory{

		static create(objeto, props, acao){ //Invocar um método estático da classe para não ter que instanciá-la
			 //É usado o padrão de projeto proxy para camuflar o objeto que está sendo acessado, ele encapsula o objeto dentro dele para disfarça-lo 
   			return new Proxy(objeto, {
	        //Target é o objeto real que é encapsulado pela proxy, prop p/ propriedade acessada e receiver é a referência do proxy
	            get: function(target, prop, receiver){
	                //quando o getter for executado, queremos perguntar se ele está na lista de métodos que queremos interceptar. Para isto, adicionaremos um if para o get
	                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) { //_ehFuncao() quer identificar se estamos trabalhando com uma função

	                    return function(){

	                        console.log(`Interceptando ${prop}`);
	                        Reflect.apply(target[prop], target, arguments); //O objeto arguments dá acesso a todos os parâmetros passados para a função
							return acao(target);
	                    }

	                }
	               
	                return Reflect.get(target, prop, receiver); //return Reflect.get(target, prop, receiver) é efetivamente quem realiza a operação no objeto real
	                //Informações está no final da codificação  
	            },

	            set(target, prop, value, receiver){ //É necessário para que esta classe possa acessar as propriedades da classe mensagem e para que seja visualizada na tela
	            	if (props.includes(prop)) {
	            		target[prop] = value;
	            		acao(target);
	            	}
	            	
	            	return Reflect.set(target, prop, value, receiver); //É obrigatório fazer o retorno
	            	
	            }

	       });
		}
		//O código do typeof() quer identificar se estamos trabalhando com uma função
		static _ehFuncao(func){

			return typeof(func) == typeof(Function);

		}
	}

	