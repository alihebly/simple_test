function date(){
const d=new Date();
const day = d.getDate();
const month = d.getUTCMonth()+1;
const anner = d.getFullYear();
document.getElementById("date").innerHTML = "Date"+day+"/"+month+"/"+anner;
}
function test_id(){
    var id = document.getElementById("StId").value;
    if(id.length == 0){alert("you don't enter an id !");
        return false;
    }
    if(id<1000 ||id>1100){alert("your id is not possible !");
        return false;
    }
    return true;
}
function test_fn(){
    var Fname = document.getElementById("FName").value;
    if(Fname.length == 0){
        alert ("enter a first name !");
        return false;
    }
    if (!/^[A-Za-z]+$/.test(Fname)){
        alert("invalidate name");
        return false;
    }
    return true;
}
function test_ln(){
    var Lname = document.getElementById("LName").value;
    if(Lname.length == 0){alert("enter a last name");
        return false;
    }
    if(Lname.includes(',')||Lname.includes(' ')){
        alert("invalidate last name !");
        return false;
    }
    return true;
}
function test_s(){
    var s = document.getElementsByName('sex');
    for(i=0;i<s.length;i++){
    if (s[i].checked){
        return true;
    }}
    alert("select your sex");
    return false;
}
function test_avg(){
    var avg = document.getElementById("avg").value;
    if(avg.length == 0){
        alert("enter your average");
        return false;
    }
    if (!/^[1234567890]+$/.test(avg)){
        alert("enter a number in average");
        return false;
    }
    return true;
}
function test_course(){
    var nbcours = 0;
    var course =document.getElementsByName("courses");
    for(i=0;i<course.length;i++){
        if(course[i].checked){
            nbcours = nbcours + 1;
        }
    } 
    if(nbcours<2){
        alert("minimum 2 couses ");
        return false;
    }
    return true;
}
function calcule(){
    // if(!test_id()){return false;}
    // if(!test_fn()){return false;}
    // if(!test_ln()){return false;}
    // if(!test_s()){return false;}
    // if(!test_avg()){return false;}
    // if(!test_course){return false;}
    var avg = document.getElementById("avg").value;
    var courses = document.getElementsByName("courses");
    var total = 0;
    if (courses[0].checked){
        total = total + (3*120000) ;
    }
    if (courses[1].checked){
        total = total + (3*120000) ;
    }
    if (courses[2].checked){
        total = total + (2*120000) ;
    }
    if (courses[3].checked){
        total = total + 120000 ;
    }
    if (courses[4].checked){
        total = total + (2*120000) ;
    }
    if (avg>=16){
        total = total -(total/5);
    }
    alert (total);
}