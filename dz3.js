(function () { 
		 
	var fCalculatorByStudent = function(iParam) {
		var iMemory = iParam;

		return {
			summ: function(aValues) {
				var result = iMemory;

				for(var i = 0; i < aValues.length; i++) {
					result += aValues[i];
				}

				return result;
			},

			diff: function(aValues) {
				var result = iMemory;

				for(var i = 0; i < aValues.length; i++) {
					result -= aValues[i];
				}

				return result;
			},

			mult: function(aValues) {
				var result = iMemory;

				for(var i = 0; i < aValues.length; i++) {
					result *= aValues[i];
				}

				return result;
			},

			div: function(aValues) {
				var result = iMemory;

				for(var i = 0; i < aValues.length; i++) {
					if(aValues[i]) {
						throw new Error('нельзя делить на ноль');
					
					} else {
						result /= aValues[i];
					}
				}

				return result;
			}

		}

	}
 	 

 	console.debug('Калькулятор');
 	console.log('______________________________________');

 	var iFirstNumber = 10;
 	var fCalculator = fCalculatorByStudent(iFirstNumber); 

 	var aArr = [1, 5, 2, 4];
 	var aArrMore = [8, 3, 0, 1]; 

	try {
 		console.log('Сумма чисел: ' + iFirstNumber + ' и ' + aArr.join(' ') + ' = ' + fCalculator.summ(aArr));
 		console.log('Разница чисел: ' + iFirstNumber + ' и ' + aArr.join(' ') + ' = ' + fCalculator.diff(aArr));
 		console.log('Умножение чисел: ' + iFirstNumber + ' и ' + aArr.join(' ') + ' = ' + fCalculator.mult(aArr));
 		console.log('Деление чисел: ' + iFirstNumber + ' и ' + aArr.join(' ') + ' = ' + fCalculator.div(aArr));
 		console.log('Деление чисел: ' + iFirstNumber + ' и ' + aArrMore.join(' ') + ' = ' + fCalculator.div(aArrMore));
 	
 	} catch(e) {
 		console.warn('Ошибка: ' + e.message + ': ' + aArrMore.join(' '));

 	} finally {
 		console.log('__');

 	} 


})();