/**
 * Created by AFREEN on 15-12-2015.
 */
app.factory('Users',function(){
    var Users={};
     Users.getDetails=Users.UserDetails[0];
    Users.findUser=function(userObj){
        var i=0;
        for(i=0;i<Users.UserDetails.length;i++)
        {
            if(Users.UserDetails[i].id == userObj.id)
                return Users.UserDetails[i];
        }
        return Users.UserDetails[0];
    };
    Users.setCurrentUser=function(id){
        Users.getDetails = Users.UserDetails.filter(Users.findUser);
    };
    Users.EditDetails=function(){
        var inputUser=Users.getDetails;
        var i;
        for (i=0;i<Users.UserDetails.length;i++)
        {
            if(inputUser.id ==  Users.UserDetails[i].id)
            {
                Users.UserDetails[i].name=inputUser.name;
                Users.UserDetails[i].place=inputUser.place;
                Users.UserDetails[i].fromDate=inputUser.fromDate;
                Users.UserDetails[i].toDate=inputUser.toDate;
            }
        }
    };
    Users.UserDetails=[
        {
            id:1,
            name:'Afreen',
            place:'Bangalore',
            fromDate:'',
            toDate:''
        },
        {
            id:2,
            name:'Shireen',
            place:'Hassan',
            fromDate:'',
            toDate:''
        }];
    return Users;
});
