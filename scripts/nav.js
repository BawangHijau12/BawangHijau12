var ruid = "admin";
var rpsw = "admin123";

function validate() {
    var iuid = document.getElementById("uname").value;
    var ipsw = document.getElementById("psw").value;

    
    
    if(iuid == ruid && ipsw == rpsw) {
        window.location.href = 'main.html';
    } else {
        alert("ID atau kata laluan salah");
    }
}

/*$.ajax("https://docs.google.com/spreadsheets/d/e/2PACX-1vRyNmiAFKrEjj6H-mCHY5XEzFIBf1Ym5kyl5TuUTcjLpcMVgQfy0nYERMXaCOXmbQsUE0kEnnnGXm-x/pub?range=AO2&output=txt").done(function(result){
        alert(result);
    });*/