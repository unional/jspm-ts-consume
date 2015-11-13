import {default as tstest} from 'ts-test';

console.log(tstest);

tstest.map(['a','b', 'c'], function(x) {
	console.log(x);
});