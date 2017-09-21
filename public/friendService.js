angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      /* FIX ME */
      return $http({
        method:"POST",
        url: "http://localhost:3000/api/login",
        data: user
      })
    };

    this.getFriendsProfiles = function() {
    	/* FIX ME */
      return $http({
        method: "GET",
        url: "http://localhost:3000/api/getFriendsProfiles"
      })
    };

});
