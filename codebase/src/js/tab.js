
function selectPage(tab) {
    document.getElementById('tab-home').className = 'btn-tab-inactive';
    document.getElementById('tab-profile').className = 'btn-tab-inactive';

            // Set the clicked tab button to active (blue)
    document.getElementById('tab-' + tab).className = 'btn-tab-active';
}