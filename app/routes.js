module.exports = function(app, passport) {
    /*-----------------------------------------------
    HOME (Main page with links to sign-in)-----------
    ------------------------------------------------*/
    app.get('/', function(req, res) {
        res.render('index.ejs'); //This will load the index file that has the information for login
    });

    /*-----------------------------------------------
    //LOGIN -----------------------------------------
    ------------------------------------------------*/
    app.get('/login', function(req, res){
        res.render('login.ejs', {message: req.flash('loginMessage') }); //This will display the login page
    });

    //login form process with passport TBD -- app.post('/login', );

    /*-----------------------------------------------
    //SIGNUP ----------------------------------------
    ------------------------------------------------*/
    app.get('/signup', function(req, res){
        res.render('signup.ejs', {message: req.flash('signupMessage') }); //This will display the signin form to user & send flash data
    });

    //signup form proess with passport TBD -- app.post('/signup', );


    /*-----------------------------------------------
    //PROFILE
    ------------------------------------------------*/
    //Users will only be able to access if they are logged in, this will use middleware to verify 
    app.get('/profile', isLoggedIn,  function(req, resp){
        res.render('profile.ejs', {
            user: req.user //grab session data and pass to templating engine
        });
    });

    /*-----------------------------------------------
    //LOGOUT
    ------------------------------------------------*/
    app.get('logout', function(req, res){
        req.logout(); //passport function
        res.redirect('/');
    });
};

    /*-----------------------------------------------
    // IS USER LOGGED IN FUNCTION
    ------------------------------------------------*/
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated());
        return next;
        //If user is logged in continue, otherwise display the main page
        res.redirect('/');
    }