'use strict';

angular.module('pimSchemaToolApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
