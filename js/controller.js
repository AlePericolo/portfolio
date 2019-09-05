var app = angular.module("dangerApp", ["ngRoute", "ngAnimate", "ngMaterial", "ngMessages"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "page/home.html"
        })
        .when("/experience", {
            templateUrl : "page/experience.html",
            controller : "experienceController"
        })
        .when("/skills", {
            templateUrl : "page/skills.html",
            controller : "skillsController"
        })
        .when("/about", {
            templateUrl : "page/about.html",
            controller : "aboutController"
        })
        .when("/contact", {
            templateUrl : "page/contact.html",
            controller : "contactController"
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller("footerController", function ($scope) {
    $scope.playSound = function (s) {
        var snd = new Audio('media/sound/' + s + ".wav");
        snd.play();
    }
});

app.controller("homeController", function ($scope) {
});

app.controller("experienceController", function ($scope) {
});

app.controller("skillsController", function ($scope) {

    $scope.projects = [
                        {title: 'SVILUPPIALE', description: 'Random projects developed for test.', link: 'sviluppiAle'},
                        {title: 'PYTHONALE', description: 'Python local test.', link: 'pythonAle'},
                        {title: 'PERILBOT', description: 'Telegram Bot. Developed for fun.', link: 'perilBot'},
                        {title: 'PYTHONMODELER', description: 'Write PHP classes from MySQL db.', link: 'pythonModeler'},
                        {title: 'SNAKE', description: 'The classic snake game.', link: 'snake'},
                        {title: 'PERILNETWORK', description: 'Mini social network.', link: 'perilNetwork'},
                        {title: 'CRYPTO', description: 'Crypt data with openssl keys.', link: 'crypto'}
                      ];
});


app.controller("aboutController", function ($scope) {
});

app.controller("contactController",  ['$scope', '$http', function ($scope, $http) {

    $scope.sendingEmail = false;

    $scope.email = {email: '', subject: '', message: ''};

    $scope.sendEmail = function () {

        $scope.sendingEmail = true;

        $http({
            method: 'POST',
            url: 'http://alessandropericolo14.altervista.org/src/contact.php',
            data: $scope.email,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data){

            console.log(data);
            $scope.sendingEmail = false;

            if(data.statusText === "OK"){
                Swal.fire({
                    title: 'Your email was sent successfully!',
                    text: 'La sua email è stata inviata correttamente.',
                    type: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                }).then(function(result){
                    if (result.value) {
                        window.location.reload();
                    }
                })
            }else{
                Swal.fire({
                    title: 'Error, email not sent!',
                    text: 'Errore, la sua email non è stata inviata.',
                    type: 'error',
                    confirmButtonColor: '#d62037',
                    confirmButtonText: 'OK'
                }).then(function(result){
                    if (result.value) {
                        window.location.reload();
                    }
                })
            }
        });
    };
}]);

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});