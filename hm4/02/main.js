(function(){

	var fDeleteTextNodes = function(container) { 
		for(var child of container.childNodes) {
		    if(child.nodeType == 3) {
				container.removeChild(child);
		    }
		}
	}
	 
	var container = document.getElementById('js-container'); 
	fDeleteTextNodes(container); 

})();