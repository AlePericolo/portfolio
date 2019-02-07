var app = angular.module("dangerApp", ["ngRoute", "ngAnimate", "ngMaterial", "ngMessages"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "page/about.html"
        })
        .when("/experience", {
            templateUrl : "page/experience.html",
            controller : "experienceController"
        })
        .when("/education", {
            templateUrl : "page/education.html",
            controller : "educationController"
        })
        .when("/skills", {
            templateUrl : "page/skills.html",
            controller : "skillsController"
        })
        .when("/interests", {
            templateUrl : "page/interests.html",
            controller : "interestsController"
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

app.controller("aboutController", function ($scope) {
    $scope.page = 'ABOUT';
});

app.controller("experienceController", function ($scope) {
    $scope.page = 'EXPERIENCE';
});

app.controller("educationController", function ($scope) {
    $scope.page = 'EDUCATION';
});

app.controller("skillsController", function ($scope) {

    $scope.page = 'SKILLS';

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


app.controller("interestsController", function ($scope) {
    $scope.page = 'INTERESTS';
});

app.controller("contactController",  ['$scope', '$http', function ($scope, $http) {

    $scope.page = 'CONTACT';

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