'use strict';

angular.module('pimSchemaToolApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


