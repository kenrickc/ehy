module.exports = function(app) {
	var router = express.Router();

	router.route('/users')
		.post(function(req, res) {

		})
		.get(function(req, res){
			pg.connect(process.env.DATABASE_URL, function(err, client, done){
				client.query('SELECT * FROM users', function(err, result){
					done();
					if(err)
						{ console.error(err); response.send("Error " + err); }
					else
						{ response.send(result.rows); }
				});
			});
		})
};