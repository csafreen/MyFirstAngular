app.directive("myDirective",function(names){
    return{
        restrict:"E",
        template:"<h3>{{name}}</h3>"
    };
    })