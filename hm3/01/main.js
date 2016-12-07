(function(){

	var aArr = [6, 9, 12, 2, 6, 88, 45, 23],
		aArr1 = [5, 2, 3, 4, 1],
		aArr2 = ['a', 'r', 'e', ' ', 'y', 'o', 'u', '?'],
		mResult;


	/***************************forEach****************************/
	function fForEach(arr, fn){
		for(var i = 0; i < arr.length; i++) {
			fn(arr[i]);
		}
	}
	console.group('Аналог forEach');
	console.log(aArr.toString());
	fForEach(aArr, console.log);
	console.groupEnd();
	console.log('');
	/**************************************************************/


	/***************************filter*****************************/
	var fFilter = function(arr, fn) {
		var result = []; 

		for(var i = 0; i < arr.length; i++) {
			if(fn(arr[i])) { 
				result[result.length] = arr[i];
			}
		}

		return result;
	};

	var aResult = fFilter(aArr, function(value){
		return value % 2 == 0 ? true : false
	});
	
	console.group('Аналог filter (четные элементы)'); 
	console.log(aArr.toString() + ' => ' + aResult.toString());
	console.groupEnd();
	console.log('');
	/**************************************************************/

	/***************************map********************************/
	var fMap = function(arr, fn) {
		var result = []; 

		for(var i = 0; i < arr.length; i++) {
			result[i] = fn(arr[i]);
		}

		return result;
	};
	mResult = fMap(aArr, function(value) {
		return value + 1;
	});
	console.group('Аналог map (прибавить каждому элементу 1)'); 
	console.log(aArr.toString() + ' => ' + mResult.toString());
	console.groupEnd();
	console.log('');
	/**************************************************************/

	/***************************slice******************************/
	var fSlice = function(arr, start, length) {
		var result = []; 

		var j = 0; 

		for(var i = start; i < arr.length; i++) { 
			if(j == length) {
				break;
			}
			result[j] = arr[i];
			j++;
		}

		return result;
	};
	mResult = fSlice(aArr, 2, 3);
	console.group('Аналог slice (со второго элемента, длина 3)'); 
	console.log(aArr.toString() + ' => ' + mResult.toString());
	console.groupEnd();
	console.log('');
	/**************************************************************/


	/***************************reduce*****************************/
	var fReduce = function(arr, fn, initVal) {
		var result = 0; 
 		var start = 1;

 		if(typeof initVal != 'undefined') {
 			start = 0;
 			result = initVal;

 		} else {
 			result = arr[0];
 		}

		for(var i = start; i < arr.length; i++) { 
			result = fn(result, arr[i], i, arr);
		}

		return result;
	};
	function fSum(previousValue, currentValue) {
		return previousValue + currentValue;
	}
	iResult = fReduce(aArr2, fSum, 'How ');
	console.group('Аналог reduce ( + How)');  
	console.log(aArr2.toString() + ' => ' + iResult.toString());
	console.groupEnd();
	console.log('');
	/**************************************************************/


	/*****************************splice***************************/ 
	var fSplice = function(arr, start, length, newArr) {
		var result = []; 
		var resultSource = []; /*измененный arr массив, если нужно*/
 	
		if(!length) {
			for(var i = 0; i < arr.length; i++) {

				if(i < start) { 
					result[result.length] = arr[i]; 

				} else if(i == start && typeof newArr != 'undefined') { 
 
					for(var j = 0; j < newArr.length; j++) {
						result[result.length] = newArr[j];
					} 

					result[result.length] = arr[i];

				} else  { 
					result[result.length] = arr[i];
				} 

				
			}

		} else {

			var j = 0;

			for(var i = 0; i < arr.length; i++) {

				if((i == start || i > start) && j < length) { 
					result[j] = arr[i];
					j++;

				} else {
					resultSource[resultSource.length] = arr[i];
				}
				
			} 

	 		for(var i = 0; i < resultSource.length; i++) { 
	 			arr[i] = resultSource[i];
			}
			arr.length = i;

			if(typeof newArr != 'undefined') {
				for(var i = 0; i < newArr.length; i++) {
					result[result.length] = newArr[i];
				}
			}

		}

		return result;
	};
	
	console.group('Аналог splice (с второго элемента, длина 2)');   
	console.log(aArr.toString());  
	mResult = fSplice(aArr, 2, 2, [1,1,1]);   
	console.log(mResult.toString());   
	console.log(aArr.toString());  
	console.groupEnd();
	console.log('');
	/**************************************************************/

})();