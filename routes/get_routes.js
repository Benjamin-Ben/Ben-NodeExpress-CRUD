const db = require('../config/mysql')();

module.exports = function (app) {
    
    // ============== READ ============== //

    // Get routes there are totally normal
    const benNormalGets = {

        // The number after get specifies how many sql queries we will pass (get1, get2, get3.....)

        get0: function ( urlName, viewTemplate, pageTitle ) {
            app.get( urlName, ( req, res, next ) => {
                res.render(viewTemplate, { 'title': pageTitle });
            });
        },

        get1: function ( urlName, sqlQuery1, viewTemplate, pageTitle ) {
            app.get( urlName, ( req, res, next ) => {
                db.query(sqlQuery1, ( err, results1 ) => {
                    if (err) { 
                        res.render('error_page', { err }); 
                    }

                    res.render(viewTemplate, { 'title': pageTitle, results1 });
                });
            });
        }

    } // End of 'benNormalGets'


    // Testing routes  ----------------------------------------------------------------


    benNormalGets.get0('/', 'home', 'Home Page');

    // Testing selects
    benNormalGets.get1('/test', `SELECT * FROM articles`, 'select_testing', '')

}