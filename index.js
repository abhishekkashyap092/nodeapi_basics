var express =require('express');
var bodyParser= require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));

//mysql
var mysql=require('mysql');
var pool = mysql.createPool({
	connectionLimit: 100, 
	//focus it
	host:'localhost',
	user:'root',
	password:'',
	database:'node_sql'
});
//opening view
//alert(coonected);
app.get('/', function(req,res){
	pool.getConnection(function(error,conn){
		var queryString=" SELECT * FROM members ";
		//alert(queryString);
		conn.query(queryString,function(error,results){
			if(error){
				throw error;

			}
			else
			{
				res.send(results);
			}
	});
		conn.release();
});
});
	//start server
	var server = app.listen(8000, function(){
		var host = server.address().address
		var port =server.address().port
		console.log("app running at http://%s:%",host,port);
	});