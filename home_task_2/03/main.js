(function () { 
		 
	var fCalculator = function(iParam) {
		var iMemory = iParam;

		return {
			sum: function() {
				var result = iMemory;

				for(var i = 0; i < arguments.length; i++) {
					if(typeof arguments[i] != 'number') {
						throw new Error('аргумент не число');
					
					} else {
						result += arguments[i];
					}
				}

				return result;
			},

			dif: function() {
				var result = iMemory;

				for(var i = 0; i < arguments.length; i++) {
					if(typeof arguments[i] != 'number') {
						throw new Error('аргумент не число');
					
					} else {
						result -= arguments[i];
					}
				}

				return result;
			},

			mul: function() {
				var result = iMemory;

				for(var i = 0; i < arguments.length; i++) {
					if(typeof arguments[i] != 'number') {
						throw new Error('аргумент не число');
					
					} else {
						result *= arguments[i];
					}
				}

				return result;
			},

			div: function() {
				var result = iMemory;

				for(var i = 0; i < arguments.length; i++) {
					if(typeof arguments[i] != 'number') {
						throw new Error('аргумент не число');
					
					} else if(arguments[i] == 0) {
						throw new Error('нельзя делить на ноль');
					
					} else {
						result /= arguments[i];
					}
				}

				return result;
			}

		}

	}
 	 

 	console.debug('Калькулятор');
 	console.log('______________________________________');
 
 	var fCalculator = fCalculator(10);  

	try {
 		console.log('Сумма чисел: 1, 5, 2, 4 = ' + fCalculator.sum(1, 5, 2, 4)); 
 	
 	} catch(e) {
 		console.warn('Ошибка: ' + e.message);

 	} finally {
 		console.log('__');

 	}

 	try { 
 		console.log('Разница чисел: 1, 4 = ' + fCalculator.dif(1, 4)); 
 		console.log('Разница чисел: 2, r = ' + fCalculator.dif(2, 'r')); 
 	
 	} catch(e) {
 		console.warn('Ошибка: ' + e.message);

 	} finally {
 		console.log('__');

 	}

 	try { 
 		console.log('Умножение чисел: 4, 5, 2 = ' + fCalculator.mul(4, 5, 2)); 
 	
 	} catch(e) {
 		console.warn('Ошибка: ' + e.message);

 	} finally {
 		console.log('__');

 	}

 	try {  	
 		console.log('Деление чисел: 2, 1, 2 = ' + fCalculator.div(2, 1, 2));
 		console.log('Деление чисел: 2, 0, 6, 1 = ' + fCalculator.div(2, 0, 6, 1));
 	
 	} catch(e) {
 		console.warn('Ошибка: ' + e.message);

 	} finally {
 		console.log('__');

 	}


})();