

var People = [
    {
        Username: "Michael",
        Password: "12345"
    },
    {
        Username: "Koki",
        Password: "Japan"
    },
    {
        Username: "Mahi",
        Password: "Ligma"
    },
    {
        Username: "Rom",
        Password: "Genshin"
    }
];


function getInfo(){
    var username = document.getElementById("username").value; // assigns input value to variable username
    var password = document.getElementById("password").value;  // assigns input value to variable password

    for(i = 0; i < People.length; i++){
        if(username == People[i].Username && password == People[i].Password){
            alert(username + " is logged in");
            window.location.href = "epqPage1.html";//changes screen
        }
    }
    alert("Wrong username or password!");
}
