(function(){

	var objA = {
	    prop1: 100,
	    prop2: 2,
	    prop3: 'test',
	    prop4: {
	        subProp1: 'sub value1',
	        subProp2: {
	            subSubProp1: 'sub sub value1',
	            subSubProp2: [1, 2, {prop2: 2, prop: 2}, 4, 5]
	        }
	    },
	    prop5: 1000,
	    prop6: new Date(2016, 2, 10)
	};

	var objB = {
	    prop5: 1000,
	    prop3: 'test',
	    prop1: 100,
	    prop2: 2,
	    prop6: new Date('2016/03/10'),
	    prop4: {
	        subProp2: {
	            subSubProp1: 'sub sub value1',
	            subSubProp2: [1, 2, {prop2: 2, prop: 2}, 4, 5]
	        },
	        subProp1: 'sub value1'
	    },
	    prop7: 1000,

	};

 
	var deepEqual = function(objA, objB) {
		var oProps = Object.keys(objA);
		var result = true;

		for(var i in oProps){
			var prop = oProps[i];
			
			if(objB.hasOwnProperty(prop)) {
				
				//console.log(prop + ': ' + objA[prop] + ' <=> ' + objB[prop]);   

				if(typeof objA[prop] == "object" && {}.toString.call(objA[prop]) != '[object Date]') { /*объект*/
					//console.group(prop + ': Object');
					result = deepEqual(objA[prop], objB[prop]);
					//console.groupEnd();

				} else if({}.toString.call(objA[prop]) == '[object Date]') { /*дата*/
					
					if(objA[prop].valueOf() != objB[prop].valueOf()) { /*сравнить секундные значения*/
						result = false;
						console.info(prop + ' not equal');
					}

				} else if(objA[prop] != objB[prop]) { /*простая переменная*/
					console.info(prop + ' not equal');
					result = false;
				}

			} else {
				console.info(prop + ' not found');
				result = false;
			}

			if(!result) { /*свойства нет или значения не равно, то останавливаем процесс совсем*/
				return false;
			}

		}

		if(result) { /*Обратное сравнение*/
			var oPropsB = Object.keys(objB);
			if(oPropsB.length != oProps.length) { /*сравниваем обратно, если кол-во свойств не равны*/
				result = deepEqual(objB, objA);
			}
		}

		return result;
	}

	console.log(deepEqual(objA, objB)); 
	

})();