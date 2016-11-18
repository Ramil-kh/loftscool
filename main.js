(function () {
	var aArr = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];
		 
	var fPrintArr = function (arr) {
		
		i = 0;

		function fInner(arr) {
			console.log(arr[i]);
			
			i++; 
			if(i < arr.length) {
				fInner(arr);
			}

		}

		fInner(arr);


	}
 
	fPrintArr(aArr); 

})();