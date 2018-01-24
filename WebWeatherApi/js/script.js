(function(){
        
$("#getBtn").on("click",function(){
    var city=$("#city").val();
    var code=$("#country_code").val();
     
if(city.lenght>1){
var urllink= 'http://api.openweathermap.org/data/2.5/weather?q=';   
urllink=urllink + city;
    
if(code.length == 2){
    urllink=urllink + ',' + code;
}
        
urllink=urllink + '&appid=6665fa2a88064f14b434d1879fb5f327';
    console.log("Hello world");
       console.log(urllink);
 /*   
$.ajax({
    url: urlLink,
    data: {format: 'json'},
    error: function(){
				//vypis chyby
			},
    dataType: "json",
    success: function(data){
console.log(data.main.temp-273.15+"°C");
console.log(data.weather[0].description);
			},
    type: "GET"
			});
            */
		}
        
	});
    
});