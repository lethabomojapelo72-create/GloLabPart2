// 1. ACCORDION FOR THE ABOUT PAGE
// This grabs all elements with the class "accordion"
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    // Listen for a click on each accordion button
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        
        // Find the panel right below the button we clicked
        let panel = this.nextElementSibling;
        
        // If it's open, close it. If it's closed, open it.
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// 2. SEARCH FILTER FOR THE PRODUCTS PAGE
function searchProducts() {
    // Get whatever the user typed in the search box
    let input = document.getElementById('product-search').value.toLowerCase();
    let products = document.getElementsByClassName('product-item');

    // Loop through all products to see if they match
    for (let i = 0; i < products.length; i++) {
        let title = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        
        // If the product name includes the search text, show it. Otherwise hide it.
        if (title.includes(input)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}


// 3. LIGHTBOX FOR PRODUCT IMAGES
function openLightbox(imgSrc) {
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightbox-img');
    
    // Show the dark background and put the clicked image inside it
    if(lightbox) {
        lightbox.style.display = 'flex';
        lightboxImg.src = imgSrc;
    }
}

function closeLightbox() {
    let lightbox = document.getElementById('lightbox');
    
    // Hide the lightbox when user clicks anywhere
    if(lightbox) {
        lightbox.style.display = 'none';
    }
}


// 4. ENQUIRY FORM VALIDATION
let enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        // Stop the page from refreshing when the form is submitted
        e.preventDefault(); 

        // Get the values the user typed in
        let name = document.getElementById('fullname').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let skin = document.getElementById('skintype').value;
        let msg = document.getElementById('message').value;

        // Check if any field is empty
        if (name === '' || email === '' || phone === '' || skin === '' || msg === '') {
            alert("Please fill in all fields before submitting.");
            return; // Stop the function here
        }

        // If they filled it in, show a custom thank you message
        let responseDiv = document.getElementById('enquiry-response');
        responseDiv.style.display = 'block';
        responseDiv.innerHTML = `<strong>Thank you, ${name}!</strong><br>
        We have received your enquiry regarding your <em>${skin}</em> skin. We will contact you at <strong>${email}</strong> or <strong>${phone}</strong> within 24 hours.`;
        
        // Clear the form after submitting
        enquiryForm.reset(); 
    });
}


// 5. CONTACT FORM VALIDATION
let contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page from refreshing

        // Get the values
        let name = document.getElementById('contact-name').value;
        let email = document.getElementById('contact-email').value;
        let phone = document.getElementById('contact-phone').value;
        let subject = document.getElementById('subject').value;
        let msg = document.getElementById('contact-message').value;

        // Check if any field is empty
        if (name === '' || email === '' || phone === '' || subject === '' || msg === '') {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // This creates an email link. When the user hits send, it opens their email app.
        let mailtoLink = `mailto:hello@glowlabbeauty.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\nMessage:\n" + msg)}`;
        
        let responseDiv = document.getElementById('contact-response');
        responseDiv.style.display = 'block';
        responseDiv.innerHTML = "Your email app has been opened. Please send the email to complete your message.";
        
        // Open the email app
        window.location.href = mailtoLink;
        
        // Clear form
        contactForm.reset();
    });
}


// 6. INTERACTIVE LEAFLET MAP FOR THE CONTACT PAGE
let mapContainer = document.getElementById('map');

// Only run this if the map element actually exists on the page
if (mapContainer) {
    // Set the map view to Soweto
    let map = L.map('map').setView([-26.2750, 27.7883], 13);
    
    // Load the map image tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Put a pin on the first studio
    L.marker([-26.2750, 27.7883]).addTo(map)
        .bindPopup('<b>Main Studio</b><br>17001 Albert Street, Soweto.').openPopup();

    // Put a pin on the second studio
    L.marker([-26.2770, 27.7916]).addTo(map)
        .bindPopup('<b>Second Studio</b><br>14701 Strawberry Crescent Street, Soweto.');
}