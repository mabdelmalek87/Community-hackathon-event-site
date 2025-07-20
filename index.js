function toggleTheme() {
    document.body.classList.toggle("dark");
  }
  
  function submitRSVP() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const guests = document.getElementById("guests");
  
    let valid = true;
  
    for (let input of [name, email, guests]) {
      input.classList.toggle("invalid", !input.value.trim());
      if (!input.value.trim()) valid = false;
    }
    
  
    if (valid) {
      const list = document.getElementById("rsvp-list");
      const listItem = document.createElement("li");
      listItem.textContent = `${name.value} (${guests.value} guests)`;
      list.appendChild(listItem);
  
      name.value = "";
      email.value = "";
      guests.value = "";
    }
  }
  const form = document.getElementById("rsvp-form");
const modal = document.getElementById("modal");
const message = document.getElementById("modal-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    // Set personalized message
    message.textContent = `Thanks for RSVPing, ${name}! We'll contact you at ${email}.`;

    // Show modal
    modal.style.display = "flex";

    // Auto close after 4 seconds
    setTimeout(() => {
      modal.style.display = "none";
    }, 4000);
  } else {
    // Optionally show an error message
    alert("Please enter both your name and email.");
  }
});
