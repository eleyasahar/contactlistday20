//code taken from gemini ai and modified by me 
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('add-contact-form');
    const contactList = document.getElementById('contact-list');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name-input').value;
        const phone = document.getElementById('phone-input').value;
        const email = document.getElementById('email-input').value;

        // Create the new contact item
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${name}</strong><br>
                ${phone ? `<span>📞 ${phone}</span><br>` : ''}
                ${email ? `<span>✉️ ${email}</span>` : ''}
            </div>
            <div class="buttons">
                <button class="favorite-btn">⭐</button>
                <button class="delete-btn">❌</button>
            </div>
        `;
        
        contactList.appendChild(li);

        // Add event listeners to the new buttons
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        li.querySelector('.favorite-btn').addEventListener('click', () => {
            li.classList.toggle('favorite');
        });

        // Clear the form
        contactForm.reset();
    });
});