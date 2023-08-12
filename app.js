/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// Define the data structure.

const sectionsData = [
    {
        id: 'section1',
        dataNav: 'Section 1',
        content: 'Content for Section 1 goes here',
    },
    {
        id: 'section2',
        dataNav: 'Section 2',
        content: 'Content for Section 2 goes here',
    },
    {
        id: 'section3',
        dataNav: 'Section 3',
        content: 'Content for Section 3 goes here',
    },
    {
        id: 'section4',
        dataNav: 'Section 4',
        content: 'Content for Section 4 goes here',
    }
]

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Function to create a section.
function createSection(id, dataNav, content) {
    const section = document.createElement('section')
    section.id = id;
    section.classList.add('section-class');
    section.setAttribute('data-nav', dataNav);
    //Create a div element with the class landing__container and adds the content to it.
    const container = document.createElement('div');
    container.classList.add('landing__container');
    container.textContent = content;
    //Adds the div element to the section element.
    section.appendChild(container);
    return section
};
//Loop that iterates through the sectionsData array and creates a section for each object in the array.
for (const sectionData of sectionsData) {
    const section = createSection(sectionData.id, sectionData.dataNav, sectionData.content);
    const mainSection = document.getElementById('main');
    mainSection.appendChild(section);
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//Selects the unordered list element with the id navbar__list.
const navList = docuemnt.getElementById('navbar__list');
//creates a html collection of all the sections with the class section-class and turns into an array.

//Selects all the sections with the class section-class and turns it into an array.
const existingSections = Array.from(document.getElementsByClassName('section-class'));

//Helper function to handle navigation link clicks
function handleNavLinkClick(event) {
    event.preventDefault(); //Prevent the default action of the link
    const sectionId = this.getAttribute('href').slice(1); //Get the ID of the target section from the href attribute
    const targetSection = document.getElementById(sectionId); // Find the corresponding section
    targetSection.scrollIntoView({behavior: 'smooth'}); //Scroll to the target section smoothly
}
//Loop through exisitngSections and create navigation links
existingSections.forEach((existingSection)=> {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-nav', existingSection.getAttribute('data-nav'));

    const anchor = document.createElement('a');
    anchor.setAttribute('href', `#${exisitngSection.id}`);
    anchor.classList.add('menu__link');
    anchor.textContent = existingSection.getAttribute('data-nav');

    anchor.addEventListener('click', handleNavLinkClicks); //Add click event listener to each navigation link

    listItem.appendChild(anchor);
    navList.appendChild(listItem);

});
// Add class 'active' to section when near top of viewport
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.menu__link');

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const dataNav = section.getAttribute('data-nav');

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            //Section is in the viewport
            section.classList.add('your-active-class');
            navItems.forEach((navItem) => {
                if (navItem.textcontent === dataNav) {
                    navItem.classList.add('your-active-class'); //Add class to the active navigation link
                } else {
                    navItem.classList.remove('your-active-class'); //Remove class from other navigation links
                }
            } );
        } else {
            //Section is not in the viewport
            section.classList.remove('your-active-class');
        }
    });
}; // End of highlightActiveSection function

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
//Add an event listener to the window object for the scroll event.
window.addEventListener('scroll', function () {
    //Function to check if a section is in the viewport.
    highlightActiveSection();
});
// Build menu 

// Scroll to section on link click

// Set sections as active

