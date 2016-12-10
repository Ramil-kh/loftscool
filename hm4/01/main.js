(function(){
	var fPrepand = function(container, newElement) {
		var firstElement = container.firstElementChild;
		container.insertBefore(newElement, firstElement);
	}

	var container = document.getElementById('js-container');

	var newElement = document.createElement('h1');
	newElement.innerHTML = 'Это домашнее задание по DOM';

	fPrepand(container, newElement);

})();