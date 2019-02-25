
// Retrieve the user name entered in the input form.
function getUserNameFromInput() {
    var elemInput = document.querySelector('#ghUser');
    return elemInput.value;
}

// Given the user data from GitHub, use the URL for the image
// as the source for the image element in index.html.
function setImageFromUserData(ghUserDataObj) {
    var elemPic = document.querySelector('#pic');
    elemPic.src = ghUserDataObj.avatar_url;
}

window.onload = function() {
    var ghUsersURL = "https://api.github.com/users/";
    var button = document.querySelector("#goBtn");

    button.onclick = async () =>  {
        // Step 1 - Done
        var ghUser = getUserNameFromInput();
        var ghURL = ghUsersURL + ghUser;

        // TODO - Implementation of Step 2 and 3.       
    };
}


