function ShowAverage(){
    var filipino = parseInt(document.getElementById("subject1").innerHTML);
    var english = parseInt(document.getElementById("subject2").innerHTML);
    var mathematics = parseInt(document.getElementById("subject3").innerHTML);
    var science = parseInt(document.getElementById("subject4").innerHTML);
    var mapeh = parseInt(document.getElementById("subject5").innerHTML);
    var esp = parseInt(document.getElementById("subject6").innerHTML);
    var average = document.getElementById("average");

    var totalAverage = (filipino + english + mathematics + science + mapeh + esp) / 6;

    
    average.innerHTML = totalAverage.toFixed(2);
}
