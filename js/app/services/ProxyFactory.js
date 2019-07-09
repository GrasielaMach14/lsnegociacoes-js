	/*O padrão de projeto Factory consiste em uma classe ser especializada p criar determinado tipo de objeto*/
	class ProxyFactory{

		static create(objeto, props, acao){ //Invocar um método estático da classe para não ter que instanciá-la
			 //É usado o padrão de projeto proxy para camuflar o objeto que está sendo acessado, ele encapsula o objeto dentro dele para disfarça-lo 
   			return new Proxy(new ListaNegociacoes(), {
	        //Target é o objeto real que é encapsulado pela proxy, prop p/ propriedade acessada e receiver é a referência do proxy
	            get: function(target, prop, receiver){
	                //quando o getter for executado, queremos perguntar se ele está na lista de métodos que queremos interceptar. Para isto, adicionaremos um if para o get
	                if (props.includes(prop) && typeof(target[prop]) == typeof(Function)) { 

	                    return function(){

	                        console.log(`Interceptando ${prop}`);
	                        Reflect.apply(target[prop], target, arguments); //O objeto arguments dá acesso a todos os parâmetros passados para a função
							return acao(target);
	                    }

	                }
	                return Reflect.get(target, prop, receiver); //return Reflect.get(target, prop, receiver) é efetivamente quem realiza a operação no objeto real
	                //Informações está no final da codificação  
	            }

	       });
		}
	}


	/*A condição if testará se o método incluído é o adiciona() ou o esvazia(), 
    que tem ou não props e se é uma função. Para testarmos esta última parte, 
    usamos o typeof[], que recebeu a propriedade do target. Se isso é uma função 
    ou método, o typeof será o parâmetro. Vamos verificar se isso é o typeof de Function*/
    
    //Reflect faŕa que os objetos retornem valores de fora da função
    
    /*O padrão de projeto Proxy nada mais é do que um objeto "falso", 
    "mentiroso", que envolve e encapsula o objeto real que queremos interagir. 
    É como se fosse uma interface, entre o objeto real e o resto do código. 
    Conseguimos assim controlar o acesso aos seus atributos e métodos. 
    Nele também podemos pendurar códigos que não cabem de estar alocados nos 
    nossos modelos, mas que necessitam ser executados no caso de uma alteração 
    ou atualização do mesmo*/