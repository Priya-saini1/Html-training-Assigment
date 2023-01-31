
function dasbboard(){

    document.getElementById("Dashborad-active").src="images/dashboard-active.svg";

}


function analysis(){

    document.getElementById("Analysis-active").src="images/graph-active.svg";

}


function focusform(){

    document.getElementById("focusbtns").style.borderColor="#C8242F";

}


function fileuploaded(){

    var msg = document.getElementById("upload");

    var file = document.getElementById("custombuttonid");

    if(file.files.length == 0)

    {

        msg.innerHTML="No item Selected".fontcolor("#ADADAD");

    }

    else{

        msg.innerHTML="Item Selected".fontcolor("green");

    }

}


function designationfun(){

    document.getElementById("Designationbtns").style.borderColor="#C8242F";

}


