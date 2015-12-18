/**
 * Created by AFREEN on 29-11-2015.
 */
app.controller('MainController',['$scope','Users',function($scope,Users) {
    $scope.title= 'Personal Details';
    $scope.AllUsers=Users;
    $scope.CurrentUser=Users.UserDetails[0];
    $scope.doThis=function(id){
         var i=0;

          for( i=0;i<$scope.AllUsers.UserDetails.length; i++)
         {
             if($scope.AllUsers.UserDetails[i].id == id)
             {
               <!-- $scope.CurrentUser=$scope.AllUsers.UserDetails.filter($scope.AllUsers.findUser(id));-->
                $scope.CurrentUser=$scope.AllUsers.UserDetails[i];
            }
        }
    };
    $scope.Edit=true;
     $scope.editUserDetails=function(id){
        <!-- $scope.AllUsers.setCurrentUser(id);-->
       window.location="EditUser.html";
    };
    $scope.Save=function(){
        $scope.AllUsers.setCurrentUser($scope.CurrentUser.id);
        $scope.AllUsers.EditDetails();
    }
}]);

