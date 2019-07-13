	//Mecanismo dataBind - associação dos dados
	class Bind{

		constructor(model, view, ...props){ // REST operator (...) -> premite que seja incluído dentro do array sem a utilização de []
			//Aqui a classe ProxyFactory pede para o proxy criar uma proxy com o modelo, as propriedades e ação a ser disparada, a view do model
			let proxy = ProxyFactory.create(model, props, model => 
				view.update(model));

				view.update(model);

				return proxy;

		}
	}