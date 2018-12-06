var transportIn = require('rh-transformer').transportIn;
var transportOut = require('rh-transformer').transportOut;

(function (angular) {
    angular.module('rhasesAngularJSCommons.services')
        .service('transformService', function () {
            if (!transportIn || !transportOut ){
                throw new Error('Error requiring transporter. Undefined function.')
            }
            return { 
                transportIn: transportIn, 
                transportOut: transportOut 
            };
        });

})(angular);
