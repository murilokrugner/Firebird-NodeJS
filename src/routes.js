import { Router } from 'express';
import firebird from 'node-firebird';

import TestController from './app/controllers/TestController';

const routes = new Router();

const fb_host = '127.0.0.1';
const fb_port = 3070; 
const fb_database = 'C:/Bancos/NUTRI/GF/gf2.fdb';

var options = {};
options.host = fb_host;
options.port = fb_port;
options.database = fb_database;
options.user = 'SYSDBA';
options.password = 'masterkey';

routes.get('/', TestController.index);

routes.get('/firebird', (req, res) => {
	firebird.attach(options, function(err, db){
        if(err){
            console.log(err.message);
            res.json('{connection: false}');
        }

        db.query('SELECT EMP_NOME FROM EMPRESA', function(err, result){
            if(err){
                console.log(err.message);
                res.json('{connection: false}');
            }

            db.detach();
            res.json(result);
        });
    });
});

export default routes;