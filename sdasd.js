document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.responsive-button');
    const navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !toggleButton.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
});



// Get all dropdown buttons
var dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(function(dropdown) {
  dropdown.addEventListener("click", function() {
    // Toggle display of the dropdown content
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});



// document.addEventListener('DOMContentLoaded', function () {
//   const menuItems = document.querySelectorAll('.faq-menu ul li');
//   const faqItems = document.querySelectorAll('.faq-item');
//   const faqContent = document.getElementById('faq-content');

//   // Function to display questions for the clicked category
//   menuItems.forEach(menuItem => {
//       menuItem.addEventListener('click', () => {
//           // Add active class to the clicked menu item
//           menuItem.classList.add('active');

//           // Get the category of the clicked item
//           const category = menuItem.getAttribute('data-category');

//           // Display all questions for the selected category without hiding others
//           faqItems.forEach(faqItem => {
//               const itemCategory = faqItem.getAttribute('data-category');
//               if (itemCategory === category) {
//                   faqItem.style.display = 'block'; // Display the relevant questions
//               }
//           });
//       });
//   });

//   // Handle showing and hiding answers for each question
//   faqItems.forEach(item => {
//       const questionButton = item.querySelector('.faq-question');
//       questionButton.addEventListener('click', () => {
//           item.classList.toggle('active');
//       });
//   });

//   // Initially hide all questions, they will appear upon category selection
//   faqItems.forEach(faqItem => {
//       faqItem.style.display = 'none';
//   });
// });






function showTab(tabName) {
    var tabs = document.querySelectorAll('.faq-tab');
    var sections = document.querySelectorAll('.faq-section');

    // Hide all sections
    sections.forEach(section => section.style.display = 'none');

    // Remove active class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected section
    document.getElementById(tabName).style.display = 'block';

    // Add active class to clicked tab
    event.currentTarget.classList.add('active');
}

function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    var icon = element.querySelector('i');

    // Toggle answer visibility
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    } else {
        answer.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    }
}
















// /// Select the elements for Programming, CMS, and Frameworks buttons
// const programmingBtn = document.getElementById('programming');
// const cmsBtn = document.getElementById('cms');
// const frameworksBtn = document.getElementById('frameworks');

// // Select the corresponding bubble sections
// const programmingBubbles = document.getElementById('programming-bubbles');
// const cmsBubbles = document.getElementById('cms-bubbles');
// const frameworksBubbles = document.getElementById('frameworks-bubbles');

// // Hide all bubbles initially
// function hideAllBubbles() {
//     programmingBubbles.style.display = 'none';
//     cmsBubbles.style.display = 'none';
//     frameworksBubbles.style.display = 'none';

//     programmingBubbles.style.opacity = '0';
//     cmsBubbles.style.opacity = '0';
//     frameworksBubbles.style.opacity = '0';
// }

// // Function to show bubbles with fade-in effect
// function showBubbles(bubblesSection) {
//     hideAllBubbles();
//     bubblesSection.style.display = 'flex';
//     setTimeout(() => {
//         bubblesSection.style.opacity = '1';
//     }, 100);
// }

// // Show the programming bubbles on hover
// programmingBtn.addEventListener('mouseenter', () => {
//     showBubbles(programmingBubbles);
// });

// // Show the CMS bubbles on hover
// cmsBtn.addEventListener('mouseenter', () => {
//     showBubbles(cmsBubbles);
// });

// // Show the frameworks bubbles on hover
// frameworksBtn.addEventListener('mouseenter', () => {
//     showBubbles(frameworksBubbles);
// });
