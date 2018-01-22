var parent = d3.select('#parent');

parent
	.on('click', function(d){
		d3.json('data.json', function(data){
			data.sort(function(x,y){
				return d3.ascending(x.value, y.value)
			})
			parent
				.selectAll('div')
				.data(data)
				.enter()
				.append('div')
				.text(function(d){
					return d.value
				})
		})
	})


