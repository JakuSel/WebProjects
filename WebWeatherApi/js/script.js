$(function(){
    
 var apiKey = '&appid=6665fa2a88064f14b434d1879fb5f327';    
    
$("#getBtn").on("click",function(){
    
    var city=$("#city").val();
    var code=$("#country_code").val();
    
     console.log(city.length); 
    console.log(code.length);
    
if(city.length > 1){
    
    var urllink= 'http://api.openweathermap.org/data/2.5/weather?q=';   
    urllink=urllink + city;
    
if(code.length == 2){
    urllink=urllink + ',' + code;
    }
        
    urllink=urllink + apiKey;
    console.log(urllink);
    
$.ajax({
    url: urllink,
    data: {format: 'json'},
    error: function(){
				//vypis chyby
			},
    dataType: "json",
    success: function(data){
console.log(data.main.temp-273.15+"°C");
console.log(data.weather[0].description);
        
$("#tableResults").empty();
  /*      
var table=$("<table/>");
var tr=$("<tr/>");
var td1=$("<td/>");
var td2=$("<td/>");        
$(td).append(city);
tr.append(td1);
*/
var infoResults=$("#tableResults");
var table=$("<table border='0'></table>");
var lineCity=$('<tr><td>City:</td><td>'+city+'</td></tr>');
var lineTemp=$('<tr><td>Temp:</td><td>'+(parseInt(data.main.temp)-273.15)+"°C"+'</td></tr>');
var lineDesc=$('<tr><td>Description:</td><td>'+data.weather[0].description+'</td></tr>');
var linePress=$('<tr><td>Presure:</td><td>'+data.main.pressure+'</td></tr>');
        


table.append(lineCity);
table.append(lineTemp); 
table.append(lineDesc); 
table.append(linePress);
        
if($("#detailsCheck").prop('checked'))
    {
//var lineRise=getLine("Sun rise", ($.datepicker.formatDate.('hh:MM:ss',(data.sys.sunrise)));
var lineSet=getLine("Sun set", data.sys.sunset);
var lineWind=getLine("Wind Speed", data.wind.speed+"KM/H");
var lineMin=getLine("Min. temp:", data.main.temp_min-273.15);
var lineMax=getLine("Max. temp:", data.main.temp_max-273.15);
table.append(lineRise); 
table.append(lineSet); 
table.append(lineMin); 
table.append(lineMax);
  
    }

infoResults.append(table);
        

			},
    type: "GET"
			});
            
		}
        
	});
//vykreslovanie riadkov
    
function getLine(data1,data2){
   
var line=$('<tr><td>'+data1+'</td><td>'+data2+'</td></tr>');    

return line;
    
}
    
});