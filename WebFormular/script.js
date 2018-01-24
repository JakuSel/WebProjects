$(function(){
    
    var personsArray=[];
    var date = new Date();
    var currentYear = date.getFullYear();
    var currentMonth = parseInt(date.getMonth()+1);
    var currentDay = date.getDate();
    
$("#submitBtn").click(verifyForm);
        

function findAge(){
var bd = new Date($("#date").val());
var day = bd.getDate();
var month = bd.getMonth()+1;
var year = bd.getFullYear();
    
    
var age= currentYear-year;
if(month>currentMonth)
    return age-1;
else if(month<currentMonth) 
    return age;
else if(month==currentMonth)
    {
        if(day>=currentDay)
        return age-1;
        else
        return age;
    }
}   
    
function verifyForm(){
    var error=false;
    var fname=$("#first_name").val();
    var lname=$("#last_name").val();
    
    if(fname.trim().length<2 || fname==""){
        $("#fnameErr").html("Invalid input");
        error=true;
    }
    if(lname.trim().length<2 || lname==""){
        $("#lnameErr").html("Invalid input");
        error=true;
    }
    
    
    if($("#dateErr").html("")==0)
        {
        $("#dateErr").html("Invalid date");
        error=true;
        }
    
    
    if(findAge()<0){
        $("#dateErr").html("Invalid date");
        error=true;
    }
    if(findAge()>0){
        $("#dateErr").html("");
       
    }
    
    if(error==false){
   
    newPerson();  
   //  personData();
    }
}
    
$("#first_name").keyup(function() {
     var fname=$("#first_name").val();
     if(fname.trim().length>1){
       $("#fnameErr").html("");
     }
    });

$("#last_name").keyup(function() {
     var lname=$("#last_name").val();
     if(lname.trim().length>1){
       $("#lnameErr").html("");
     }    
    });
    
function newPerson(){
    var person={
firstName: $("#first_name").val(),
lastName: $("#last_name").val(),
dob: $("#date").val(),
gender: getGender(),
personAge: findAge(),
id: personsArray.length+1
    };
    
    $("#first_name").val("");
    $("#last_name").val("");
    $("#date").val("");
    
    personsArray.push(person);
    resultTable();
}

function resultTable(){
    
var tableDiv=$("#formTable");
tableDiv.empty();
    
if(personsArray.length>0){
var table=$("<table border='1'></table>")
table.append('<tr><th>First Name</th><th>Last Name</th><th>Birth Date</th><th>Gender</th><th>Age</th></tr>');
tableDiv.append(table);
}
    
personsArray.forEach(function(obj){
var newline=$('<tr id='+obj.id+'><td>'+obj.firstName+'</td><td>'+obj.lastName+'</td><td>'+obj.dob+'</td><td>'+obj.gender+'</td><td>'+obj.personAge+'</td></tr>');
 
var remBtn=$("<button  class='rem'>X</button>");
$(".rem").on("click",function(){
var row=this.parentNode;   
row.remove();
  
for(i=0;i<personsArray.length;i++){
    if (row.id==personsArray[i].id){
        personsArray.splice(i,1);
    }
} 
    
            });    
newline.append(remBtn);    
table.append(newline);
});
}
    
function getGender(){
return $("input[name='gender']:checked").val();
}
    
$("#saveData").on("click",function(){
    if(personsArray.size==0)
        return 0;
    if (typeof(Storage) !== "undefined") {
    localStorage.persons=JSON.stringify(personsArray);  
    }   
    else {
        return;
    
}
    
});
    
$("#loadData").on("click",function(){
    if (typeof(Storage) !== "undefined") {
    personsArray=JSON.parse(localStorage.persons);  
    resultTable();
    }   
    else {
        return;
    }
    // Sorry! No Web Storage support..
});  
    
    
    
});
    /*
    var elem1=$("<span></span>").text(fname);
          //  var elem2=$("<span></span>").text(lname);
            $(elem1).append("<button class='rem'>X</button>");
            $("#formTable").append(elem1);

            
            $(".rem").on("click",function(){
                $(this).parent().remove();
            });
    
*/