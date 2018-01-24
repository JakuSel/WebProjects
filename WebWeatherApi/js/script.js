$(document).ready(function(){
    
    
    
   $("#getBtn").on("click",function(){
       var city=$("#city").val();
        var code=$("#country_code").val();
       var urllink='api.openweathermap.org/data/2.5/weather?q=';
       if(city.length>1){
           urllink=urllink+city;
       }
       if(code.length==2)
           urllink=urllink+','+code;
       
       urllink=urllink+'&appid=6665fa2a88064f14b434d1879fb5f327';
       console.log(urllink);
       $.ajax({
            url: urllink,
            data:{format: 'json'},
            error: function(){
               //chybova hlaška
           },
           dataType:'json',
           success: function(data){
               console.log("temp:"+data.main.temp);
               console.log("desc:"+data.weather[0].description);
           },
           type:'GET'
       });
   });
});