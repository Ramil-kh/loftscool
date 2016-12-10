(function() {

	var scanDOM = function(container) {

		var result = {
			tags: {},
			classes: {}
		}
 
		var addClasses = function(classList) {
 
			for(var cl of classList) { 
				if(cl) {
					if(result['classes'][cl]) {
						result['classes'][cl]['count']++;
					} else {
						result['classes'][cl] = {};
						result['classes'][cl]['count'] = 1;
					}
				}
			}

		}

		var addTags = function(tagName) {

			if(result['tags'][tagName]) {
				result['tags'][tagName]['count']++;

			} else {
				result['tags'][tagName] = {};
				result['tags'][tagName]['count'] = 1;
			}

		} 

		var scanRun = function(container) {

			for(var child of container.childNodes) {

				if(child.nodeType == 3) { 
					addTags('text');

				} else if(child.tagName) { 
					addTags(child.tagName);
					addClasses(child.classList);
				}

				scanRun(child);

			}
		}

		scanRun(container); 

		return result;

	}

	var container = document.getElementsByTagName('body');
	
	var oStatistics = scanDOM(container.length ? container[0] : []);
 	
 	console.group('Тэги');
 	for(tagName in oStatistics.tags) {
 		var oTag = oStatistics.tags[tagName];
 		console.log('Тэгов ' + tagName + ': ' + oTag.count);
 	}
 	console.groupEnd();

 	console.group('Классы');
 	for(className in oStatistics.classes) {
 		var oClass = oStatistics.classes[className];
 		console.log('Элементов с классом ' + className + ': ' + oClass.count);
 	}
 	console.groupEnd();

})();