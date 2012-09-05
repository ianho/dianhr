var Client = require('mysql').Client,
    client = new Client();

var dbname = 'dianhr',
    user = 'root',
    pass = 'root';

var dbo = function() {
    client.usr = user;
    client.password = pass;
    client.query('USE ' + dbname);
}

dbo.prototype.insert = function(table, fields, values) {
    var query = 'INSERT INTO ' + table + ' SET';
    for (var i = 0; i < fields.length; i++) {
        query += ' ' + fields[i] + '=?';
        if (i < fields.length - 1) {
            query += ',';
        }
    }
    client.query(query, values);
}

dbo.prototype.select = function(query, callback){
    client.query(query, function(err, results, fields) {
        if (err){
            throw err;
        }
        callback(results);
    });
}

exports.dbo = dbo;
