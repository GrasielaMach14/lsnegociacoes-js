	class DateHelper{

		constructor(){

			throw new Error("Esta classe não pode ser instanciada"); //"throw" = lançar, neste caso lançar erro
		}

		static dataParaTexto(data){ //O método static permite que a classe naõ seja instanciada ao ser invocada
		//Formatar a data com //
			return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
		
		}

		static textoParaData(texto){

			if(!/\d{4}-\d{2}-\d{2}/.test(texto)) //Adiciona a expressão regular ou seja, formato padrão da data será testada

				throw new Error("Campo data deve estar no formato aaaa-mm-dd");

			return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

			//Construtor recebe como parâmentros ano-mes-dia(array de 3 elementos)
			//spread operator(...), indica que o array será desmembrado pelo 1º elemento depois 2º até o 3º
		}
	}



	//A função map permite que o valor do elemento seja decrementado
	/**Calcular desta maneira fará que o valor do array seja 
	calculado com o resto de 2, se for % = 1 será decrementado -1**/