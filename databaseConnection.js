const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;
//mysql://umxpu7mxv8l2rbty:nudadwkfkx2ca93n@ckshdphy86qnz0bj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/j6ct1x83bcpcngsd
const dbConfigHeroku = {
	host: "ckshdphy86qnz0bj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "umxpu7mxv8l2rbty",
	password: "nudadwkfkx2ca93n",
	database: "j6ct1x83bcpcngsd",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		