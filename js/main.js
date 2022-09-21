var app = angular.module('myApp', []);

app.controller('comics', function ($scope, $http) {
    $http.get('http://localhost:3000/api/v1/items')
        .then((response) => {
            $scope.items = response.data;

        })

})