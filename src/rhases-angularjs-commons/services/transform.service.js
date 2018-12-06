var transformer = require('rh-transformer');

(function (angular) {
    angular.module('rhasesAngularJSCommons.services')
        .service('transformService', function () {
            return transformer;
        });

})(angular);
