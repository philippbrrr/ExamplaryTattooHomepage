function changeTeamContent() {
    var inactive = document.getElementById('inactive-member');
    inactiveConent = inactive.innerHTML;
    var active = document.getElementById('active-member');
    activeContent = active.innerHTML;

    inactive.innerHTML = activeContent;
    active.innerHTML = inactiveConent;

    var activeTeamText = document.getElementById("activeTeamText")
    activeTeamTextContent = activeTeamText.innerHTML;
    var inactiveTeamText = document.getElementById("inactiveTeamText")
    inactiveTeamTextContent = inactiveTeamText.innerHTML;

    activeTeamText.innerHTML= inactiveTeamTextContent;
    inactiveTeamText.innerHTML = activeTeamTextContent;



}