Function.prototype.method = function(name,func) {
	this.prototype[name]=func;
	return this;
	// body...
};

var add=function()
{
var args=Array.prototype.slice.apply(arguments);
console.log(args)
var total=0;
for (var i = 0; i < args.length; i++) {
	total+=parseInt( args[i]);
}
return total;
}
//Modules
var serial_maker=function()

		{
			"use strict"
			var sequenceNumber=0;
			var prefix='';

			return {

				set_sequenceNumber:function(i){
sequenceNumber=parseInt(i);
				},
				set_prefix:function (j) {

					prefix=String(j);

				},
				generateSequenceNumber:function()
				{
					var randomNumber=prefix+sequenceNumber;
					sequenceNumber+=1;
					return randomNumber;
				}
			}
		}
		//Curry

		var testArguments=function () {
var args=[];
			console.log(arguments);
			console.log(typeof Array.prototype.slice(arguments))
			console.log(typeof args)
		}


		Function.method('curry',function(){
			var slice=Array.prototype.slice;
			var args=slice.apply(arguments);
			var that=this;
			return function () {
				return that.apply(null,args.concat( slice.apply(arguments)));
			}
			}
		);
		var numberofCounts=1;
//Memeorization
var fibinacci=function(n)
{
	console.log(numberofCounts +'----->'+n);
	numberofCounts+=1;
	return n<2?n:factorial(n-1)+factorial(n-2);
}
var factorial=function(n){
	console.log(numberofCounts +'----->'+n);
	numberofCounts+=1;
	if(n<=1)

	return n==1?1:n* factorial(n-1);
}


var fibinacci_withMemo=function(){

var memo=[0,1];

var fib=function(n)
{
	numberofCounts+=1;
	var result=memo[n];
	if(typeof result !='number')
	{
result=fib(n-1)+fib(n-2);
memo[n]=result;
	}
return result;
}
return fib;
};

// var passDynamicObjects=function(parameters,callback())
// {
// var paramArray=[];

// function fnReturnCheck()
// {
// 	return {
// 		prop1:2,
// 		prop2:3,
// 		prop3:4
// 	}
// }

// };
