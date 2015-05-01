var app = angular.module( "signupApp", [] );

app.directive('optIn', function(){
    return{
        transclude: true,
        templateUrl: './opt-in.html',
    };
});