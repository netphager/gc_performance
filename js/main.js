/**
 * Created by azhelev on 10.8.2015 ?..
 */
/*=====================================================================================================================*/
/*
 In this case, the another variable, which is in global scope,
 is a reference to the string created inside the function. Since the scope is global, the garbage collector will continue to think it’s active.
Of course, if there are any remaining references, the GC won’t collect the variable.
*/
var another = null;

function test() {
	var str = 'A string I am';
	another = str;
}

test();
/*
* Also watch out for any cases where you leave off the var keyword. JavaScript interprets this as declaring a globally scoped variable
* */
function test() {
	var str = 'A string I am';
	b = str; // oops, no var keyword means this is a global
}

test();

/*=====================================================================================================================*/
/*s.data will now be undefined (and also marked for removal by the garbage collector).*/
var s = { data: 'test' };
delete s.data;

var m = 'test';
delete m; // silently returns false (not allowed)
m === 'test'; // true - oops, still a value
/*The right way to clear a variable is pretty simple: set every reference it to to null, then let the garbage collector do its job.*/
var m = 'test';
m = null;
m === 'test'; // false

/*=====================================================================================================================*/
function getResult() {
	return { result: true, value: 'test' }; // creates object every call
}

/*And finally, the potentially very painful Array.slice:*/
var b = a.slice(1); // creates an entirely new duplicate array
