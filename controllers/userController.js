const userController = {
    'register': function(req, res) {
        return res.render('register');
    },
    'login': function(req, res) {
        return res.render('login');
    },
    'list': function(req, res) {
        let users= ['Romina',
                    'Azul',
                    'Pablo',
                    'Riki',
                    'Anto',
                    'Alai',
                    'Mateo',
                    'Bruno',
                    'Angelita']
        return res.render('usersList',{'users': users});
    }
};

    
    module.exports= userController;