var values = [62,13,88,89,117,258,3,770,69,49.99999,50,135];

var parent = d3.select('#parent');

parent
	.on('click', function(d){
		parent
			.selectAll('div')
			.data(values)
			.enter()
			.append('div')
			.text(function(d){
				return d
			})
	})
