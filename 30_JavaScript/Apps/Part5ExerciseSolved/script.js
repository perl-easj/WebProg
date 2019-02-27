
async function getGithubUserDataAwait(ghURL) {
    var apiResPromise = fetch(ghURL);
    var apiRes = await apiResPromise;
    return apiRes.json();
}

function getGithubUserDataPromise(ghURL, setImageFromUserDataFunc) {
    fetch(ghURL)
        .then(response => { response.json()
            .then(userData => { setImageFromUserDataFunc(userData); }) }); 
}

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

        // Implementation of Step 2 and 3.
        // Either this (using await) ...
        var ghUserData = await getGithubUserDataAwait(ghURL);
        setImageFromUserData(ghUserData);

        // ...or this (using promises)
        // getGithubUserDataPromise(ghURL, setImageFromUserData);        
    };
}


