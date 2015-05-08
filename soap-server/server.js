var soap = require('soap-server');

function MyTestService(){
}
MyTestService.prototype.test1 = function(myArg1, myArg2){
    return myArg1 + myArg2;
};


function MyTestService2(){
}
MyTestService2.prototype.test2 = function(myArg1, myArg2){
    return myArg1 + myArg2;
};

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new MyTestService());
var soapService2 = soapServer.addService('testService2', new MyTestService2());
    
soapServer.listen(1337, 'https://fathomless-shelf-3782.herokuapp.com');