angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quiz-api-jac.us-east-2.elasticbeanstalk.com/';

    return service;
}]);