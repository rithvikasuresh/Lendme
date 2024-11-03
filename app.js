// Function to show different pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// Show additional fields based on role selection
function showAdditionalFields() {
    const role = document.getElementById('role').value;
    document.getElementById('studentFields').style.display = role === 'student' ? 'block' : 'none';
    document.getElementById('facultyFields').style.display = role === 'faculty' ? 'block' : 'none';
}

// Show lend options and "not found" message
function selectAction(action) {
    if (action === 'lend') {
        document.getElementById('lendOptions').style.display = 'block';
        document.getElementById('notFoundMessage').style.display = 'none';
    } else {
        document.getElementById('lendOptions').style.display = 'none';
        document.getElementById('notFoundMessage').style.display = 'block';
    }
}
function showItems(category) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear any previous items
    
    let items = [];
    if (category === 'tools') {
        items = ['Hammer', 'Screwdriver', 'Wrench'];
    } else if (category === 'labCoats') {
        items = ['Standard Lab Coat', 'Protective Lab Coat'];
    } else if (category === 'books') {
        items = ['Physics Textbook', 'Chemistry Guide', 'Engineering Math'];
    }

    // Display items or show "not found" message if empty
    if (items.length > 0) {
        items.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = item;
            itemList.appendChild(itemElement);
        });
    } else {
        itemList.innerHTML = '<p>Sorry, no items found in this category.</p>';
    }
}
<!-- Logo Page -->
<div id="logoPage" class="page">
    <h1 id="logoText">LENDME!!!</h1>
    <p>A lending platform exclusively for MEC</p>
    <button onclick="showPage('profilePage')">Get Started</button>
</div>
