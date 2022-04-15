const database = include('/databaseConnection');


function getAllTodos(callback) {
	let sqlQuery = "SELECT * FROM lab_example.web_user";
	database.query(sqlQuery, (err, results, fields) => {
		if (err) {
			callback(err, null);
		}
		else {
			console.log(results);
			callback(null, results);
		}		
	});
}


module.exports = {getAllTodos}
