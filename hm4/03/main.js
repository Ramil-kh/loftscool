(function(){

	var fDeleteTextNodes = function(container) { 

		var child = container.lastChild;

		do {
		    var prev = child.previousSibling; 

		    if(child.nodeType == 3) {
				var s = child.textContent.trim(); /*!!!Затриммить, чтобы не удалить текст внутри тега!!!*/

		        if(!s) {
		       		container.removeChild(child);
		        }

		    } else if(child.nodeType == 1) {
		    	fDeleteTextNodes(child);
		    }

		    child = prev;
		}
		while (child); 

	}
	 
	var container = document.getElementById('js-container'); 
	fDeleteTextNodes(container); 

})();