var fib=require('./Fibonacci');
//console.log(cal.add(3,4));

var p=require('prompt');
console.log('Enter values');
p.start();
p.get(['count'],function(err,data){
    if(err) throw err;
    // console.log(data.a);
    // console.log(data.b);
    console.log(fib.sum(data.count));
})
