
function selectPage(tab) {
    document.getElementById('tab-home').classList.remove('text-blue-500');
    document.getElementById('tab-home').classList.add('text-gray-500');
    document.getElementById('tab-profile').classList.remove('text-blue-500');
    document.getElementById('tab-profile').classList.add('text-gray-500');

            // Set the clicked tab button to active (blue)
    document.getElementById('tab-' + tab).classList.remove('text-gray-500');
    document.getElementById('tab-' + tab).classList.add('text-blue-500');
}