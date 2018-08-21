// module.exports = function hello() {
//     console.log('halo!');
// }

// module.exports.hi = function() {
//     console.log('hi');
// }

// module.exports.a = 'asdfgh';

// commonjs의 동작 방식
function hello() {
	console.log("Hello");
}

hello.hi = function() {
	console.log("hi");
};

module.exports = hello;