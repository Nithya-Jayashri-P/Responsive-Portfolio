// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle and navbar when click navbar link(scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-container, .education-box, .contact form, .contact li', { origin: 'bottom' });

//copy to clipboard;

var button = document.getElementById("textToCopy");

button.onclick = function () {
  navigator.clipboard.writeText("nithyajayashrip@gmail.com");
};

//Send Email
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("Mobile");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail() {
  const messageBody = `Name: ${fullName.value}<br> Email: ${email.value}<br> Mobile: ${mobile.value}<br> Email subject: ${subject.value}<br> Message: ${mess.value}`;

  Email.send({
    SecureToken: "90873e42-2b71-4fa1-99ce-d2188a1d1212",
    To: 't5486mail@gmail.com',
    From: 't5486mail@gmail.com',
    Subject: subject.value,
    Body: messageBody
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully",
          icon: "success"
        });
      }
    }
  );
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
