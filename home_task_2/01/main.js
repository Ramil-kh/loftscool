(function () { 
		 
	var fIsAllTrue = function(source, fFilter) {
		var result = true;

		if(!Array.isArray(source)) {
			throw new Error('не массив');
		
		} else if(!source.length) {
			throw new Error('пустой массив');
		
		} else {
			for(var i = 0; i < source.length; i++) {

				if(!fFilter(source[i])) {
					result = false;
				}
			}
			
		}


		return result;

	}
 	
 	var fCheckEven = function(param) {
 		var result;

		if(typeof param != 'number') {
			throw new Error('в массиве есть не число ' + param);
		
		} else {
	 		param % 2 == 0 ? 
	 			result = true : 
	 			result = false ;
 		}
 		return result;
 	}

 	console.debug('Проверка элементов массива на четность');
 	console.log('______________________________________');

 	var aArr = [
 		[10, 12, 80, 6, 10, 44],
 		[10, 11, 2, 6, 10, 44],
 		[],
 		[10, 11, 'a', 6, 10, 44]
 	]; 

 	for(var i = 0; i < aArr.length; i++) { 

 		console.log('Проверка ' + aArr[i].join(' '));

	 	try {
			console.log('Результат: ' + fIsAllTrue(aArr[i], fCheckEven));
	 	
	 	} catch(e) {
	 		console.warn('Ошибка: ' + e.message);

	 	} finally {
	 		console.log('__');
	 	}

 	}


})();