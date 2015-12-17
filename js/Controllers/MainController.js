/**
 * Created by afreen.sikandar on 30.11.2015.
 */
app.controller('MainController' ,['$scope', function($scope) {
    $scope.title = 'Personal Details';
    $scope.UserDetails=[{
        id:1,
        name:'Afreen',
        place:'Hospet',
        favPhoto:'img\\Chrysanthemum.jpg',
        likes:0,
        fromDate:'',
        ToDate:''
    },
        {
            id:2,
            name:'Shireen',
            place:'Hassan',
            favPhoto:'img\\Desert.jpg',
            likes:0,
            fromDate:'',
            ToDate:''
        }

    ];
        $scope.plusOne=function($index){
            $scope.product[$index].likes+=1;
        };

    $scope.doThis= function(id) {
        for (i = 0; i < $scope.UserDetails.length ; i++) {
            if ($scope.UserDetails[i].id == id) {
                $scope.userToDisplay = $scope.UserDetails[i];
            }
        }
    };

    $scope.userToDisplay=$scope.UserDetails[0];
    $scope.Edit=true;
    $scope.editUserDetails= function (id) {
        $scope.Edit=false;
    }
}]);