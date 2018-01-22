var values = [62,13,88,89,117,258,3,770,69,49.99999,50,135];
var j = values.length,
	i;

function createChildren() {
	console.log(this)

	while (this.firstChild) {
		//unfortunately this also removes the initial text!
	    this.removeChild(this.firstChild);
	}
	for (i = 0; i < j; i++) {
		var node = document.createElement("div");
		var textnode = document.createTextNode(values[i]);
		node.appendChild(textnode);
		this.appendChild(node)
	}	
}

document.getElementById('parent').addEventListener("click",createChildren);