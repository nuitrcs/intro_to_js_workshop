console.log(typeof "15")

console.log(typeof 15)

console.log(typeof typeof 15)

var num = "15"
num++
console.log(num) //now a number

num += ''
console.log(num) //now a string

num = +num
console.log(num) //a number again

var extra = "1"
num += extra
console.log(num) //a string again

extra = 1
num += extra
console.log(num) //still a string

num = +num
console.log(num) //as earlier, the most reliable way to convert to a number

var ref = num
ref++
console.log(ref)

console.log(num)

ref = num
console.log(ref)

console.log(num)

ref = num++
console.log(ref)

console.log(num)

num = {
	value: 15
}
ref = num
console.log(ref)

console.log(num)

ref = num = {
	value: 15
}

ref.value++
ref.value

console.log(num.value)

ref = num.value

console.log(ref++)
console.log(ref)

console.log(num.value)

var test = function(thing) {
	if (thing) {
		return true
	}
	return false
}
test = function(thing) {
	return (thing) ? true : false //ternary shorthand
}
console.log(test(0))

console.log(test(NaN))

console.log(test(''))

console.log(test(false))

console.log(test(null))

console.log(test(undefined))

window.test

var my_library = {}

my_library.all_other_things = "go in here, not global scope"

test = function() {
	return
	{
		value: true
	}
}
console.log(test())
console.log(test().value)

test = function() {
	return {
		value: true
	}
}
console.log(test())
console.log(test().value)

test = 
function (
	) 
{
	return{value:true}
}

var obj = {
	"two": 2,
	property2: num,
	2: "as a string or number this is legal - but a monstrosity!",
	//2: illegal,
	bool: "this should be illegal, but it is allowed!",
	function_storage: function() {},
	nested_thing: {
		internal_property: "value"
	}
}
console.log(obj.two)

console.log(obj.nested_thing.internal_property)

console.log(obj.2)

console.log(obj[2])

console.log(obj["2"])

var array = [1,2,3,4,5,6,7,8,9,10]
console.log(array[0])

console.log(array["0"])

console.log(array.length)

console.log(array[array.length-1])

var j = array.length,
	i;
for (i = 0; i < j; i++) {
	console.log(array[i])
}

array.push(11)
console.log(array)

var last_item = array.pop()
console.log(last_item)

console.log(array)

//look into: .shift(), .unshift(), .concat(), and .splice()

obj = {
	value: 5,
	first: "Marion",
	last: "Goji"
}

console.log(Object.keys(obj))

obj.keys = Object.keys(obj)
console.log(obj.keys)

console.log(Object.keys(obj)) // oh no, technically "keys" is a key now...

delete obj.keys

function TestConstructor(value, first, last) {
	this.value = value
	this.first = first
	this.last = last
}
obj = new TestConstructor(5,"Marion","Goji")
console.log(obj)

TestConstructor.prototype.keys = function() {
	return Object.keys(this)
}

console.log(obj.keys())

// now show 1.html and explain "this"