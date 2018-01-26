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
var table=$("<table border='1'></table>");
var lineCity=$('<tr><td>City:</td><td>'+data.name+'</td></tr>');
var lineTemp=$('<tr><td>Temp:</td><td>'+(Math.round((parseInt(data.main.temp,10)-273.15)*100)/100)+"°C"+'</td></tr>');
var lineDesc=$('<tr><td>Description:</td><td>'+data.weather[0].description+'</td></tr>');
var linePress=$('<tr><td>Presure:</td><td>'+data.main.pressure+'</td></tr>');
        


table.append(lineCity);
table.append(lineTemp); 
table.append(lineDesc); 
table.append(linePress);
        
if($("#detailsCheck").prop('checked'))
    {
var rise=new Date(data.sys.sunrise*1000);
var set=new Date(data.sys.sunset*1000);
        
var lineRise=getLine("Sun rise", rise.getHours()+":"+rise.getMinutes()+":"+rise.getSeconds());
var lineSet=getLine("Sun set", set.getHours()+":"+set.getMinutes()+":"+set.getSeconds());
        
var lineWind=getLine("Wind Speed", data.wind.speed+"KM/H");
        
var lineMin=getLine("Min. temp:", (Math.round((parseInt(data.main.temp_min)-273.15)*100)/100)+"°C");
var lineMax=getLine("Max. temp:",(Math.round((parseInt(data.main.temp_max)-273.15)*100)/100)+"°C");
        
table.append(lineRise); 
table.append(lineSet); 
table.append(lineMin); 
table.append(lineMax);
  
    }



var googleMap=getLine("Map:", "<A target='_blank' href='https://www.google.com/maps/search/?api=1&query="+ data.coord.lat +','+ data.coord.lon +"'>" +data.name+"</A>");

console.log(data.coord.lat);
console.log(data.coord.lon);
        
table.append(googleMap);
        
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