window.identityList = []
function getFormData(){
    var name = document.querySelector("#fname").value;
    //  const document.querySelectorAll("input[]")
    // var gender = null; 
    // var inputElements = document.querySelectorAll("input");
    // for(var i=0; inputElements[i]; ++i){
    //     if(inputElements[i].checked){
    //         gender = inputElements[i].value;
    //         break;
    //     }
    // }
    var gender = document.querySelector(".radio:checked").value;

    var house = document.querySelector("#house").value;

    
    window.identityList.push(name,gender,house)

}

function setIdentity(){
    console.log(window.identityList)
    document.querySelector("#orentationHouse").textContent = window.identityList[2]
}

// setIdentity();