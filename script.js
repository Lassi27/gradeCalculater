
function calculateCurrentGrade(){
    var testGrade = document.getElementById("testScore").value;
    var testArray= arrayStr(testGrade);
    var testAvg= arrayAverage(testArray);

    var quizGrade= document.getElementById("quizScore").value;
    var quizArray=arrayStr(quizGrade);
    var quizAvg = arrayAverage(quizArray);

    var hwGrade=document.getElementById("hwScore").value;
    var hwArray=arrayStr(hwGrade);
    var hwAvg= arrayAverage(hwArray);

    var projectGrade=document.getElementById("projectScore").value;
    var projectArray=arrayStr(projectGrade);
    var projectAvg= arrayAverage(projectArray);

    var participationGrade=document.getElementById("partScore").value;
    var partArray=arrayStr(participationGrade);
    var partAvg= arrayAverage(partArray);

    rowColor(1,testAvg);
    rowColor(2,hwAvg);
    rowColor(3,quizAvg);
    rowColor(4,projectAvg);
    rowColor(5,partAvg);

    var tWeight= parse(document.getElementById("testWeight").value)/100;
    var qWeight= parse(document.getElementById("quizWeight").value)/100;
    var hwWeight= parse(document.getElementById("hwWeight").value)/100;
    var partWeight= parse(document.getElementById("partWeight").value)/100;
    var projectWeight= parse(document.getElementById("projectWeight").value)/100;
    var weightFinal= parse(document.getElementById("weightFinal").value);
    var sumOfWeight = hwWeight + qWeight + tWeight + partWeight + projectWeight + (weightFinal/100);
    if(isNaN(weightFinal) || sumOfWeight != 1 ){
        document.getElementById("currentGrade").innerHTML= "Error! data does not add up to 100%"
    }else{
        var hw = hwAvg * hwWeight;
        var  quiz = quizAvg * qWeight;
        var test = testAvg * tWeight;
        var project = projectAvg * projectWeight;
        var participation = partAvg * partWeight;

        var currentGrade = ((hw + quiz + test + project + participation)/(100 - weightFinal)) * 100;
        currentGrade = Math.floor(currentGrade);
        document.getElementById("currentGrade").innerHTML = "Your grade is " + currentGrade + "% and you need .... %";
    }
    return(currentGrade);
}

function arrayAverage(arr){
    var sum= 0;
    for(var i = 0 ; i < arr.length; i++){
        sum= sum + arr[i];
    }
    var avg= sum/(arr.length);
    return avg;
}

function arrayStr(str){
    var arr= str.split(",");
    for(var i=0 ; i< arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
}

function parse(x) {
    return parseInt(x);
}

function gradeWanted(){
    var grade=calculateCurrentGrade();
    console.log(grade);
    var gradeWanted=document.getElementById("targetGrade").value;
    var finalGrade=parse(document.getElementById("weightFinal").value);
    if(isNaN(gradeWanted) || isNaN(finalGrade) || gradeWanted == "" ){
        document.getElementById("gradeWanted").innerHTML = "Error! please enter your target grade, also remember to not input a % symbol"
    }else{
        var firstStep = grade/100;
        var secondStep = firstStep * (100-finalGrade);
        var thirdStep = gradeWanted - secondStep;
        var fourthStep = thirdStep / finalGrade;
        var fifthStep = fourthStep * 100;
        fifthStep = Math.floor(fifthStep);
        document.getElementById("gradeWanted").innerHTML = "you need " + fifthStep + "% on your final to get " + gradeWanted + "% in your class"

    }

}

function rowColor(row, grade){
    if(grade >= 90){
        document.getElementById(row).style.backgroundColor="green";
    }
    if(grade >= 80 && grade < 90){
        document.getElementById(row).style.backgroundColor="purple";
    }
    if(grade >= 70 && grade < 80){
        document.getElementById(row).style.backgroundColor="orange";
    }
    if(grade >= 60 && grade < 70){
        document.getElementById(row).style.backgroundColor="pink";
    }
    if(grade < 60){
        document.getElementById(row).style.backgroundColor="red";
    }
}

function reset(){
    document.getElementById("currentGrade").innerHTML = "";
    document.getElementById("gradeWanted").innerHTML = "";
    document.getElementById("weightFinal").innerHTML = "";
    document.getElementById("targetGrade").innerHTML = "";
    document.getElementById(1).style.backgroundColor = "white";
    document.getElementById(2).style.backgroundColor = "white";
    document.getElementById(3).style.backgroundColor = "white";
    document.getElementById(4).style.backgroundColor = "white";
    document.getElementById(5).style.backgroundColor = "white";

}







