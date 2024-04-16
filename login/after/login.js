const users = [
    "magnesium",
]

const passwords = [
    "2010%24erver%21%21",
    "orsacchiottoily",
]

var u = "";
var p = "";
var id = "";

try {
    u = /u=([^&#=]*)/.exec(window.location.search)[1];
    p = /p=([^&#=]*)/.exec(window.location.search)[1];
    id = /id=([^&#=]*)/.exec(window.location.search)[1];
} catch (e) {
    window.location.href = "https://auth.empties.it/login/2893"
}


fetch("https://auth.empties.it/login/2893/id.txt")
  .then(response => response.text())
  .then(text => {
    console.log(id);
    console.log(text);
    console.log(u);
    console.log(p);
    if (id == text) {
        if (users.indexOf(u) > -1 && passwords[users.indexOf(u)] == p) {
            console.log("logged in")
        } else {
            window.location.href = "https://auth.empties.it/login/2893"
        }
    } else {
        window.location.href = "https://auth.empties.it/login/2893"
    }
});
