const db = require('../config/mysql')();

module.exports = function (app) {
    
    // ============== READ ============== //

    // Getting content with a tottaly normal get route
    const benNormalGet = function ( urlName, viewTemplateError, viewTemplate, pageTitle, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
        app.get( urlName, ( req, res, next ) => {

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

                                        res.render(viewTemplate, { 'title': pageTitle, results1, results2, results3, results4, results5, results6 });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        } // End of 'benNormalGet'

    const benParamsGet = function ( urlName, viewTemplateError, viewTemplate, pageTitle, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
        app.get( urlName, ( req, res, next ) => {

                db.query(sqlQuery1, [req.params.id], ( err, results1 ) => {
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

                                        res.render(viewTemplate, { 'title': pageTitle, results1, results2, results3, results4, results5, results6 });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        } // End of 'benParamsGet'


        const benSearchGet = function ( urlName, viewTemplateError, viewTemplate, pageTitle, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.get( urlName, ( req, res, next ) => {
    
                    db.query(sqlQuery1, [`%${req.query.search_query}%`, `%${req.query.search_query}%`, `%${req.query.search_query}%`, `%${req.query.search_query}%`, `%${req.query.search_query}%`, `%${req.query.search_query}%`], ( err, results1 ) => {
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

                                            res.render(viewTemplate, { 'title': pageTitle, results1, results2, results3, results4, results5, results6 });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            } // End of 'benSearchGet'

    // Testing routes  ----------------------------------------------------------------

    /*
        benNormalGet parameters ORDER
        urlName, viewTemplateError, viewTemplate, pageTitle, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6
    */

    // You have to fill ALL sql queries even if you don't use them. So in the ones you don't use, just put a query that will return nothing, so the server won't be overwhelmed

    benNormalGet (
        '/test', 'error_page', 'select_testing', 'Selecting Stuff', 
        `SELECT * FROM articles`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`
    );


    benParamsGet (
        '/test/params/:id', 'error_page', 'select_testing', 'Selecting Stuff with a param id', 
        `SELECT * FROM articles WHERE articles.id = ?`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;` 
    );


    benSearchGet(
        '/test_search', 'error_page', 'select_testing', 'Selecting Stuff with Search Bar',
        `SELECT * FROM articles WHERE articles.title LIKE ? OR articles.body_text LIKE ?`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;` 
    );

// TESTING CREATE, UPDATE AND DELETE ----------------------------------------------------------------
    //create get
    benNormalGet (
        '/test/create', 'error_page', 'create_test', 'Creating Stuff', 
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`
    );

} // End of 'Module.Exports'