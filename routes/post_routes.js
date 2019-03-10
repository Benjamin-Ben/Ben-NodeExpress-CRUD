const db = require('../config/mysql')();
const fs = require('fs');

module.exports = function (app) {
    // CREATE 

    // Creating Fields only
    const benCreateFields = {

        // The number after 'post' represents the ammount of fields you have in your form

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
        }, 
        post2: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 || !req.fields.name2 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1, req.fields.name2], (err, results) => {
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
        },
        post3: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 || !req.fields.name2 || !req.fields.name3 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1, req.fields.name2, req.fields.name3], (err, results) => {
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
        },
        post4: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4], (err, results) => {
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
        },
        post5: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5], (err, results) => {
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
        },
        post6: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 || !req.fields.name6 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5, req.fields.name6], (err, results) => {
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
        },
        post7: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 || !req.fields.name6 || !req.fields.name7 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5, req.fields.name6, req.fields.name7], (err, results) => {
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
        },
        post8: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 || !req.fields.name6 || !req.fields.name7 || !req.fields.name8 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5, req.fields.name6, req.fields.name7, req.fields.name8], (err, results) => {
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
        },
        post9: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 || !req.fields.name6 || !req.fields.name7 || !req.fields.name8 || !req.fields.name9 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5, req.fields.name6, req.fields.name7, req.fields.name8, req.fields.name9], (err, results) => {
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
        },
        post10: function ( urlName, emptyFieldsErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 || !req.fields.name6 || !req.fields.name7 || !req.fields.name8 || !req.fields.name9 || !req.fields.name10 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                if (success === true) {
                    db.query( sqlInsertQuery, [req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5, req.fields.name6, req.fields.name7, req.fields.name8, req.fields.name9, req.fields.name10], (err, results) => {
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


    // Creating Fields and Images
    const benCreateFieldsAndImages = {

        // The number after 'post' represents the ammount of fields/files you have in your form

        post1: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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
        },
        post2: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name || !req.fields.name1 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile, req.fields.name1], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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
        },
        post3: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name || !req.fields.name1 || !req.fields.name2 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile, req.fields.name1, req.fields.name2], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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
        },
        post4: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name || !req.fields.name1 || !req.fields.name2 || !req.fields.name3 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile, req.fields.name1, req.fields.name2, req.fields.name3], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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
        },
        post5: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name || !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile, req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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
        },
        post6: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name || !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile, req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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
        },
        post7: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name || !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 || !req.fields.name6 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile, req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5, req.fields.name6], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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
        },
        post8: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name || !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 || !req.fields.name6 || !req.fields.name7 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile, req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5, req.fields.name6, req.fields.name7], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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
        },
        post9: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name || !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 || !req.fields.name6 || !req.fields.name7 || !req.fields.name8 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile, req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5, req.fields.name6, req.fields.name7, req.fields.name8], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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
        },
        post10: function ( urlName, emptyFieldsErrorMessage, invalidImageErrorMessage, viewTemplateError, redirectUrlName, viewTemplate, pageTitle, sqlInsertQuery, sqlQuery1, sqlQuery2, sqlQuery3, sqlQuery4, sqlQuery5, sqlQuery6 ) {
            app.post( urlName, (req, res, next) => {
                let success = true;
                let errorMessage;

                if ( !req.files.image.name || !req.fields.name1 || !req.fields.name2 || !req.fields.name3 || !req.fields.name4 || !req.fields.name5 || !req.fields.name6 || !req.fields.name7 || !req.fields.name8 || !req.fields.name9 ) {
                    success = false; 
                    errorMessage = emptyFieldsErrorMessage;
                }

                else if( req.files.image.type.indexOf('image') === -1 ) {
                    success = false;
                    errorMessage = invalidImageErrorMessage;
                }

                if (success === true) {

                    const theImage = req.files.image;
                    const renammedFile = `${Date.now()}_${theImage.name}`;
            
                    fs.readFile(theImage.path, (err, data) => {
                        if (err) { 
                            res.render(viewTemplateError, { err }); 
                        }
                        fs.writeFile(`./public/img/${renammedFile}`, data, err => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }

                        db.query( sqlInsertQuery, [renammedFile, req.fields.name1, req.fields.name2, req.fields.name3, req.fields.name4, req.fields.name5, req.fields.name6, req.fields.name7, req.fields.name8, req.fields.name9], (err, results) => {
                            if (err) { 
                                res.render(viewTemplateError, { err }); 
                            }
                            res.redirect(redirectUrlName);
                        });
                    });
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

   benCreateFieldsAndImages.post2 (
       '/test/create', 'The only field was empty', 'We only accept image files here', 'error_page', '/test', 'create_test', 'Creating Stuff', 
        `INSERT INTO testing_10 SET column1 = ?, column2 = ?;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`,
        `SELECT articles.title FROM articles WHERE articles.id = 0;`
    );
}