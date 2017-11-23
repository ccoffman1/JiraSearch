// JavaScript source code
window.onload = function () {

    if (chrome.storage.sync.get('corp') is !null)
    {
        document.getElementById("company").value = function () {
            chrome.storage.sync.get('corp', function (result) {
                return result.corp;
            });
        }
    }
    document.getElementById("jiraID").addEventListener("click", dropdown);

    document.getElementById("company").oninput = function () {
        var value = document.getElementById("company").value;

        chrome.storage.sync.set({ 'corp': value });

    }
}


//function saveCompany() {
//    // Get a value saved in a form.
//    var theValue = company.value;

//    // Check that there's some code there.
//    if (!theValue) {
//        message('Error: No value specified');
//        return;
//    }
//    // Save it using the Chrome extension storage API.
//    chrome.storage.sync.set({ 'value': theValue };
//   // console.log("Saved company?");


//}


//function getCompany() {

//    //Set a generic storage value to null
//    var theValue = "";

//    chrome.storage.sync.get('value', function(result){
//        theValue = result.theValue;
//    });

//    return theValue;

//}











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
        saveChanges();
        runJira();

    } else {
        saveChanges();
        jiraText();


    }


}
