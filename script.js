

// clicking the edit profile button will change the user's name from Ethan Wan to another name

function changeName() {
    var anotherName = document.querySelector("#userName")
    if (anotherName.innerText == "Yu Jen Wan") {
        // if the name is Yu Jen Wan, it will change back to Ethan Wan
        anotherName.innerText = "Ethan Wan"
    }
    else {
        anotherName.innerText = "Yu Jen Wan"
    }
}



function remove(yesORno) { // pass the parameter (yes or no) 

    // clicking either yes or no button will remove the user from the requests list

    var removeNumber = document.querySelector(".con-circle");
    var removeRequest = document.querySelector(".people");
    removeNumber.innerText--;
    removeRequest.remove();

    // when clicking yes button, the number of your connections will be increased by one.

    if (yesORno == 'yes') {
        var addConnection = document.querySelector(".con-circle2");
        addConnection.innerText++;
    }
}