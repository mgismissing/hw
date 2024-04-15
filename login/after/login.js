const users = [
    "magnesium",
]

const passwords = [
    "2010$erver!!"
]

const u = /u=([^&#=]*)/.exec(window.location.search)[1];
const p = /p=([^&#=]*)/.exec(window.location.search)[1];
const id = /id=([^&#=]*)/.exec(window.location.search)[1];

fetch("https://auth.empties.it/login/2893/id.txt")
  .then(response => response.text())
  .then(text => {
    console.log(id);
    console.log(text);
    if (id == text) {
        console.log("id check passed")
        if (users.indexOf(u) > -1 && passwords[users.indexOf(u)] == p) {
            console.log("login successful")
        }
    }
});