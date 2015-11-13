import {default as tstest} from 'ts-test';
import {map} from 'ts-named';

console.log(tstest);
console.log(map);

tstest.map(['a','b', 'c'], function(x) {
	console.log(x);
});

map(['1', '2', '3'], x => console.log(x));