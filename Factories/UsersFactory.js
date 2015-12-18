/**
 * Created by AFREEN on 15-12-2015.
 */
app.factory('Users',function(){
    var Users={};
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
    Users.click=function()
    {
        alert("Hey");
    }
    return Users;
})
