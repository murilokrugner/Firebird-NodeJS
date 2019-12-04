import Firebird from 'node-firebird';

class TestControllers {
    async index(req, res) {
        var options = {};

        options.host = 'localhost';
        options.port = 3070;
        options.database = 'onix.fdb';
        options.user = 'SYSDBA';
        options.password = 'masterkey';
        options.lowercase_keys = false; // set to true to lowercase keys
        options.role = null;            // default
        options.pageSize = 4096;        // default when creating database

        Firebird.attach(options, function(err, db) {

        if (err)
            throw err;

        // db = DATABASE
        db.query('SELECT * FROM TABLE', function(err, result) {
            // IMPORTANT: close the connection
            db.detach();
        });
    });

        return res.json({test : 'test'});
    }    
}

export default new TestControllers();