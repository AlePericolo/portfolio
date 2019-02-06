var app = angular.module("dangerApp", ["ngRoute", "ngAnimate", "ngMaterial", "ngMessages"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "page/main.html"
        })
        .when("/projects", {
            templateUrl : "page/projects.html",
            controller : "projectsController"
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
        var snd = new Audio('sound/' + s + ".wav");
        snd.play();
    }
});

app.controller("projectsController", function ($scope) {

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

app.controller("contactController",  ['$scope', '$http', function ($scope, $http) {

    $scope.test = function () {
        Swal.fire({
            title: 'Your email was sent successfully!',
            text: "La sua email è stata inviata correttamente.",
            type: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        }).then(function(result){
            if (result.value) {
                window.location.reload();
            }
        })
    };

    $scope.email = {email: '', subject: '', message: ''};

    $scope.sendEmail = function () {
        $http({
            method: 'POST',
            url: 'http://alessandropericolo14.altervista.org/page/contact.php',
            data: $scope.email,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(data){
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