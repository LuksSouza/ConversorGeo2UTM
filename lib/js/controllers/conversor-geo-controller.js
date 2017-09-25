angular.module('conversorDeCoordenadasGeo')
    .controller('conversorGeoController', function($scope) {
        $scope.mensagem = '';
        
        $scope.longitude = {
            grau : '',
            minuto : '',
            segundo : ''
        }

        $scope.latitude = {
            grau : '',
            minuto : '',
            segundo : ''
        }

        console.log($scope.longitude);

        console.log($scope.latitude);
    });