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
        urlName, viewTemplateError, viewTemplate, pageTitle, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6
    */

    // You have to fill ALL sql queries even if you don't use them. So in the ones you don't use, just put a query that will return nothing, so the server won't be overwhelmed

    benNormalGet (
        '/', 'error_page', 'select_testing', 'Selecting Everything',
        `SELECT * FROM test_table`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`
    );

    benParamsGet (
        '/test/update/:id', 'error_page', 'create_and_update_test', 'Selecting Stuff with a param id', 
        `SELECT * FROM test_table WHERE test_table.img = ?`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`
    );

    benNormalGet ( 
        '/test/delete', 'error_page', 'delete_multiple_test', 'Deleting Somehting', 
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`,
        `SELECT test_table.name FROM test_table WHERE test_table.id = 0;`
    );

} // End of 'Module.Exports'