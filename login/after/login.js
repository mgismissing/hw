const users = [
    "magnesium",
]

const passwords = [
    "2010%24erver%21%21"
]


const u = /u=([^&#=]*)/.exec(window.location.search)[1];
const p = /p=([^&#=]*)/.exec(window.location.search)[1];
const id = /id=([^&#=]*)/.exec(window.location.search)[1];


fetch("https://auth.empties.it/login/2893/id.txt")
  .then(response => response.text())
  .then(text => {
    console.log(id);
    console.log(text);
    console.log(u);
    console.log(p);
    if (id == text) {
        if (users.indexOf(u) > -1 && passwords[users.indexOf(u)] == p) {
        } else {
            window.location.href = "/login/baduser"
        }
    } else {
        window.location.href = "/login/badid"
    }
});