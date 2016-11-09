(function () {
	var aArr = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];

	var fPrintArr = function (arr, i) {
		console.log(arr[i]);
		i++;
		if(i < arr.length) {
			fPrintArr(aArr, i);
		}
	}

	console.time("Время выполнения");
	fPrintArr(aArr, 0);
	console.timeEnd("Время выполнения");

})();