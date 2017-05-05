var app=angular.module('alarm',['ngMaterial','ngStorage']);
app.controller('alarmcontroller', function($scope,$localStorage,$interval) {
     $scope.alarm=[];
     
   if($localStorage.days!=null)
      $scope.alarm=$localStorage.days;     
    $scope.setalarmforday=[];
if($localStorage.setalarmfordays!=null)
    $scope.setalarmforday=$localStorage.setalarmfordays;
$scope.setalarm=function(){
  //IF the given date is less than the current date
  if(new Date($scope.myDate)<new Date()){
    alert("Invalid date.. Date and time must be greater than current date and time");
  }
  else{
  console.log($scope.myDate.getDay());
  var day={"m":"","t":"","w":"","th":"","f":"","s":"","su":""};
  if($scope.myDate.getDay()==2){
    day.m='2';
  }
  else if($scope.myDate.getDay()==3){
    day.t='3';
  }
 else if($scope.myDate.getDay()==4){
    day.w='4';
  }else if($scope.myDate.getDay()==5){
    day.th="";
    day.th='5';
  }else if($scope.myDate.getDay()==6){
    day.f='6';
  }else if($scope.myDate.getDay()==7){
    day.s='7';
  }else if($scope.myDate.getDay()==1){
    day.su='1';
  }
   if(day.m){
      
    }
    else{
      day.m='0'
    }
    if(day.t){
      
    }
    else{
      day.t='0'
    }
    if(day.w){
      
    }
    else{
      day.w='0'
    }
    if(day.th){
      
    }
    else{
      day.th='0'
    }
    if(day.f){
      
    }
    else{
      day.f='0'
    }
    if(day.s){
      
    }
    else{
      day.s='0';
    }
    if(day.su){
      
    }
    else{
      day.su='0';
    }
  console.log(day);
 var json={
   "date":new Date($scope.myDate),
   "days":day,
   "count":0
 }
 if($localStorage.setalarmfordays==null || $localStorage.setalarmfordays==undefined){
    $scope.setalarmforday.push(json);
    console.log("hello");
    $localStorage.setalarmfordays=$scope.setalarmforday;
  }
 else{
     console.log($localStorage.setalarmfordays.length);
   for(var i=0;i<$localStorage.setalarmfordays.length;i++){
   
     var dateObj2=new Date($localStorage.setalarmfordays[i].date);
     var dateObj=new Date($scope.myDate);
if(new Date($scope.myDate)===$localStorage.setalarmfordays[i].date){
  console.log("date exists");
}else{
   $scope.setalarmforday=$localStorage.setalarmfordays;
   $scope.setalarmforday.push(json);
   $localStorage.setalarmfordays=$scope.setalarmforday;
 
}
   }
}
}
$scope.setalarmfordays=function(day,dates){
  console.log(JSON.stringify(day)+""+dates);
    if(day.m){
      
    }
    else{
      day.m='0'
    }
    if(day.t){
      
    }
    else{
      day.t='0'
    }
    if(day.w){
      
    }
    else{
      day.w='0'
    }
    if(day.th){
      
    }
    else{
      day.th='0'
    }
    if(day.f){
      
    }
    else{
      day.f='0'
    }
    if(day.s){
      
    }
    else{
      day.s='0';
    }
    if(day.su){
      
    }
    else{
      day.su='0';
    }
  console.log(day);
 var json={
   "date":dates,
   "days":day,
   "count":0
 }
 if($localStorage.setalarmfordays===null || $localStorage.setalarmfordays===undefined){
    $scope.setalarmforday.push(json);
    console.log("hello");
    $localStorage.setalarmfordays=$scope.setalarmforday;
  }
 else{
   for(var i=0;i<$localStorage.setalarmfordays.length;i++){
     if(dates==$localStorage.setalarmfordays[i].date){
  var index=$localStorage.setalarmfordays.index(i);
  if(index >-1){
    $localStorage.setalarmfordays.splice(index,1);
  $scope.setalarmforday=$localStorage.setalarmfordays;
   console.log("hello");
   $scope.setalarmforday.push(json);
   $localStorage.setalarmfordays=$scope.setalarmforday;
  }
     }
 
 }
 }
 }
}
console.log($localStorage.setalarmfordays);
console.log($scope.setalarmforday);


  var variousdays=function(){
    if($localStorage.setalarmfordays===undefined ||  $localStorage.setalarmfordays==null){
     
  }
   else{  
    for(var i=0;i<$localStorage.setalarmfordays.length;i++){
      var now=new Date();
       var later=$localStorage.setalarmfordays[i].date;
      var day=$localStorage.setalarmfordays[i].days;
      //Comparing only hours if count is zero and checking if the day matches from the array we have
      if($localStorage.setalarmfordays[i].count>0){
      if(now.getHours()===new Date(later).getHours() && now.getMinutes()===new Date(later).getMinutes()){
        if(now.getDay()==Number(day.m)||Number(day.t)||Number(day.w)||Number(day.th)||Number(day.f)||Number(day.s)||Number(day.su))
            console.log("Alarm on get"+now.getDay());
          
        }
      }
      else{
        var dateObj=new Date();
        var dateObj2=new Date($localStorage.setalarmfordays[i].date);
var month1 = dateObj2.getUTCMonth() + 1;
var day1 = dateObj2.getUTCDate();
var year1 = dateObj2.getUTCFullYear();
var month = dateObj.getUTCMonth() + 1;
var day2 = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
//Comparing day, month and year if count is not zero
if(day2==day1&& month==month1 && year==year1){
   if(now.getHours()===new Date(later).getHours() && now.getMinutes()===new Date(later).getMinutes()){
        if(now.getDay()==Number(day.m)||Number(day.t)||Number(day.w)||Number(day.th)||Number(day.f)||Number(day.s)||Number(day.su)){
            $localStorage.setalarmfordays[i].count=1;
            console.log("Alarm on get"+now.getDay());
        }
        }
      }
      
      
    }
    }
  }
  }
  variousdays();
  $interval(variousdays,1000);
   var now=new Date();
       var later=$localStorage.setalarmfordays[0].date;
  console.log(now.getHours()+"later"+new Date(later).getHours() +""+ now.getMinutes()+"later"+new Date(later).getMinutes());
});
app.directive('datetimez', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          element.datetimepicker({
            dateFormat:'dd/MM/yyyy hh:mm:ss',
            language: 'pt-BR'
          }).on('changeDate', function(e) {
            ngModelCtrl.$setViewValue(e.date);
            scope.$apply();
          });
        }
    };
});