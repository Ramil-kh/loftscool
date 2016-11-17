(function () { 
		 
	var fIsSomeTrue = function(source, fFilter) {
		var result = false;

		if(!Array.isArray(source)) {
			throw new Error('не массив');
		
		} else if(!source.length) {
			throw new Error('пустой массив');

		} else {
			for(var i = 0; i < source.length; i++) { 
				if(fFilter(source[i])) {
					result = true;
				}
			}
		}


		return result;

	}
 	
 	var fIsString = function(param) {
 		var result; 

 		typeof param == 'string' ? 
 			result = true : 
 			result = false ;

 		return result;
 	}

 	console.debug('Проверка элементов массива на строку');
 	console.log('______________________________________');

 	var aArr = [
 		[10, 12, 80, 6, 10, 44],
 		[],
 		[10, 11, 'не число', 6, 10, 44],
 		['строка', 'число']
 	]; 

 	for(var i = 0; i < aArr.length; i++) { 

 		console.log('Проверка ' + aArr[i].join(' '));

	 	try {
			console.log('Результат: ' + fIsSomeTrue(aArr[i], fIsString));
	 	
	 	} catch(e) {
	 		console.warn('Ошибка: ' + e.message);

	 	} finally {
	 		console.log('__');
	 	}

 	}


})();