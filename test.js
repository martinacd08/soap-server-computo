
var soap = require('./lib/soap-server');


function MyTestObject(){
}
MyTestObject.prototype.strArg = '';
MyTestObject.prototype.intArg = 0;


function MyObject(){
}
MyObject.prototype.concated = '';
MyObject.prototype.incremented = 0;

function MyTestService(){
}
MyTestService.prototype.test1 = function(myArg1, myArg2){
	return myArg1 + myArg2;
};
MyTestService.prototype.test2 = function(){
	return '200';
};
MyTestService.prototype.test3 = function(strArg, intArg){
	var ret = new MyObject();
	ret.concated = strArg + '[' + intArg + ']';
	ret.incremented = intArg + 1;
	return ret;
};
MyTestService.prototype.test4 = function(myTestObjectInstance){
	return myTestObjectInstance.strArg + '[' + myTestObjectInstance.intArg + ']';
};

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new MyTestService());




var test3operation = soapService.getOperation('test3');
test3operation.setOutputType(MyObject, 'MyObject');
test3operation.setInputType('intArg', {type: 'number'});

var test4operation = soapService.getOperation('test4');
test4operation.setInputType('myTestObjectInstance', MyTestObject);


soapServer.listen(process.env.PORT || 5000);
console.log('Server running at http://127.0.0.1:1337/');
