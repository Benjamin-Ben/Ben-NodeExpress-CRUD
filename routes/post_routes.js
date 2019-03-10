const db = require('../config/mysql')();
const fs = require('fs');

module.exports = function (app) {
    // CREATE AND UPDATE

    // Creating and updating fields only
    const benPostFields = {
        post1: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1], (err, results) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        res.redirect(redirectUrlName);
                    });
                } else {
                    db.query(sqlQuery1, ( err, results1 ) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
    
                        db.query(sqlQuery2, ( err, results2 ) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
    
                            db.query(sqlQuery3, ( err, results3 ) => {
                                if (err) { 
                                    res.render(viewTemplateError, { err }); 
                                }
    
                                db.query(sqlQuery4, ( err, results4 ) => { 
                                    if (err) { 
                                        res.render(viewTemplateError, { err }); 
                                    }
    
                                    db.query(sqlQuery5, ( err, results5 ) => {
                                        if (err) { 
                                            res.render(viewTemplateError, { err }); 
                                        }
    
                                        db.query(sqlQuery6, ( err, results6 ) => {
                                            if (err) { 
                                                res.render(viewTemplateError, { err }); 
                                            }
    
                                            res.render(viewTemplate, { 'title': pageTitle, results1, results2, results3, results4, results5, results6, errorMessage, ...req.fields });
                                        });
                                    });
                                });
                            });
                        });
                    });
                }
            });
        }
    }

    /* 
        Parameters ORDER: 
        urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6
    */

   benPostFields.post1 (
       '/test/create', 'The only field were empty.', 'error_page', '/test', 'create_test', 'Creating Stuff', 
        `INSERT INTO testing_10 SET column1 = ?;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`
    );
}