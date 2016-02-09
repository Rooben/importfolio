angular.module('mainPages.filterModule', [])
    .filter('wordreverse', function(){
        return function(string){
            return string.split('').reverse().join('');
        }
    });
