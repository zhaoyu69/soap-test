const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

var soap = require('soap');
var url = 'http://safe.seu.edu.cn/service/WebService.asmx?wsdl';
var args = {
	SchoolCardNo:"220161800",
	InvokerUsername:"demo",
	InvokerPassword:"demo123456"
};
soap.createClient(url, function(err, client) {
	client.QueryScoreBySchoolCardNo(args, function(err, result) {
    	console.log(JSON.parse(result.QueryScoreBySchoolCardNoResult));
  	});
});