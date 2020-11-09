const userNameInput = document.querySelector(".username");
const button = document.querySelector(".button");
const userCard = document.querySelector(".user-card");
const imageContainer = document.querySelector(".img-wrapper");
const userNameContainer = document.querySelector(".user-name");
const realNameContainer = document.querySelector(".name");
const locationContainer = document.querySelector(".location");
const reposContainer = document.querySelector(".repos");
const followersContainer = document.querySelector(".followers")
const API_URL = "https://api.github.com/users/";


const renderData = data => {
    const profilePictureUrl = data.avatar_url;
    const githubUserName = data.login;
    const realName = data.name;
    const location = data.location
    const repos = data.public_repos;
    const followers = data.followers;  

    imageContainer.innerHTML = `<img src=${profilePictureUrl}>`;
    userNameContainer.innerHTML = githubUserName;
    realNameContainer.innerHTML = realName;
    locationContainer.innerHTML = location;
    reposContainer.innerHTML = repos;
    followersContainer.innerHTML = followers;
}

const searchUser = () => {
    const userName = userNameInput.value;

    fetch(`${API_URL}${userName}`)
        .then( res => {
            res.json()
            .then( data => {
                renderData(data);
            })
        })
        .catch( error => {
            console.log(error)
        });
    
        userNameInput.value = "";
}

const handleEnterOnInput = (event) => {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
        event.preventDefault();

        searchUser();
    }
}

button.addEventListener("click", searchUser);
userNameInput.addEventListener("keydown", handleEnterOnInput);