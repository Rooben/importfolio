'use strict';

/**
 * @ngdoc function
 * @name rolandApp.service:photos API factory service
 * @description
 * # photos API service
 * Service of the rolandApp
 */
angular.module('imagesDisplay.stacked')
  .factory('photosapi', [ '$resource', function($resource){
    return $resource('pages/imagesDisplay/data.json');
  }]);
