// JavaScript source code
window.onload = function () {
    document.getElementById("jiraID").addEventListener("click", dropdown);
}


var jiraText = function () {

    var searchTerm = document.getElementById("textSearch").value;

    var jiraBase = "https://jira.bullhorn.com/issues/?jql=text ~ " + '"' + searchTerm + '"';

    console.log("derp", jiraBase);
    //alert(jiraBase);

    window.open(jiraBase);
    

}


var runJira = function () {
    
    var searchTerm = document.getElementById("textSearch").value;

    var jiraBase = "https://jira.bullhorn.com/browse/" + searchTerm;

    console.log("Check for terms", jiraBase) // Logs to see if these push through

    window.open(jiraBase);

}


var dropdown = function () {

    var selection = document.getElementById("dropdown").value;

    console.log(selection); // see full choice

    if (selection === "hasId") {
        
        runJira();

    } else {

        jiraText();


    }


}
