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

// email 

var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject' + subject + '<br/> message' + message;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "t5486mail@gmail.com",
    Password: "tbal vrst upqm btlr",
    To: 't5486mail@gmail.com',
    From: email,
    Subject: subject,
    Body: body
  }).then(
    message => alert(message)
  );
});

