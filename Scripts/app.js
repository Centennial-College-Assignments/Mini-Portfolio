// File Name: app.js
// Author: Devesh Kumar
// Pages: index.html (Bio Page), contact.html (Contact Page), project.html (Project Page)
// File Description: Custom Javascript File



"use strict";

(function() {

    function highlightActiveLink() {
        let title = document.title;

        title = title.toLowerCase();

        console.log(`The title of the page is ${title}`);

        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);

            if ((title === "home") && (anchorString === "index") || (title === anchorString)) {
                anchor.className = "nav-link active";
            }
        }

        return title;
    }
    // function used to add content to project.html page
    function addContentToProjectPage() {
        let projectContainer = document.querySelector("#projectContainer");
        if (projectContainer) {
            projectContainer.innerHTML =
                `<br><h1 class="center">My Interests</h1>
                <br>
                <hr>
                <h3 class="center">Computer Science & Software Technology</h3>
                <hr>
                <br>
                <div class="center" "><img src="./Assets/images/unnamed.png " alt=" "></div>
                <br>
                <p>There was a time when I didn’t like Computer Science & Software Technology at all but with time especially after working in finance field, I understood the importance of it and decided to learn it really well.</p>
                <br>
                <hr>
                <h3 class="center "">Trading and Finance</h3>
                <hr>
                <div class="center" "><img src="./Assets/images/trading.png " alt=" "></div><br>
                <p>Being an options trader, I love to watch, read and learn about Options & Futures trading more and more. Now being a Software Engineering Technology Student, I have also been devoting a lot my time studying and learning more about technologies.</p>
                <br>
                <hr>
                <h3 class="center ">Travelling and World Geography</h3>
                <hr><br>
                <div class="center "><img src="./Assets/images/travel.jpg " alt="Travel"></div><br>
                <p>Geography is one my favourite subjects and I love to read about the new places and cultures. I love travelling too. I would rather like to go into the wild and enjoy nature than partying at a night club.</p><br><br><br><br><br><br>`
        }

    }

    // function used to add text to contact.html page
    function addContentToContactPage() {

        let contactContainer = document.querySelector("#contactContainer");
        if (contactContainer) {
            contactContainer.innerHTML = `<h1 class="center">Stay In Touch</h1>
            <div id="errorMessage" class="alert alert-danger" role="alert" hidden>

            </div>
            <hr>
            <form id="conactForm">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="firstName" name="firstName" aria-describedby="firstName" placeholder="Enter your First Name" required="required" autofocus>
                </div>

                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" name="lastName" aria-describedby="lastName" placeholder="Enter your Last Name" required="required">
                </div>

                <div class="form-group">
                    <label for="contactNumber">Contact Number</label>
                    <input type="tel" class="form-control" id="contactNumber" name="contactNumber" aria-describedby="contactNumber" placeholder="Enter your Contact Number" required="required">
                </div>

                <div class="form-group">
                    <label for="emailAddress">Email address</label>
                    <input type="email" class="form-control" id="emailAddress" name="emailAddress" aria-describedby="emailAddress" placeholder="Enter your Email Address" required="required">
                </div>

                <div class="form-group">
                    <label for="shortMessage">Your Message</label>
                    <textarea class="form-control" id="shortMessage" name="shortMessage" rows="3" aria-describedby="shortMessage"></textarea>
                </div>

                <button id="submitButton" type="submit" class="btn btn-primary btn-lg"><i class="fas fa-envelope-square"></i> Send</button>
                <button id="resetButton" type="reset" class="btn btn-warning btn-lg"><i class="fas fa-comment-slash"></i> Try Again</button>
            </form>`;
        }

    }
    // function used to add text to footer on all three pages 
    function addContentTofooter() {
        let footer = document.querySelector("#footer");
        if (footer) {
            footer.innerHTML = `<h6> &copy;
            Copyright - Devesh Kumar Comp 125 - Centennial College.All Rights Reserved.</h6>`;
        }
    }

    // function used to add elements to index.html page
    function addContentToIndexPage() {
        let mainElement = document.querySelector("#indexMain");
        if (mainElement) {
            let indexTextDiv = document.createElement("div");
            indexTextDiv.className = "container";
            indexTextDiv.id = "indexText";
            mainElement.appendChild(indexTextDiv);

            addImageToIndexPage();
            addHeadingToIndexPage();
            addParagraphsToIndexText();
        }
    }

    // function used to add h1 to index.html page
    function addHeadingToIndexPage() {
        let indexText = document.querySelector("#indexText");
        if (indexText) {
            let indexHeading = document.createElement("h1");
            indexHeading.className = "center";
            indexHeading.innerHTML = "My Vision";
            indexText.appendChild(indexHeading);
        }
    }

    // function used to add my image to index.html page
    function addImageToIndexPage() {
        let indexText = document.querySelector("#indexText");
        if (indexText) {
            let indexImg = document.createElement("img");
            indexImg.id = "myImg";
            indexImg.src = "./Assets/images/pic.jpg";
            indexImg.alt = "myImage";

            indexText.appendChild(indexImg);
        }

    }

    // function used to add text to index.html page
    function addParagraphsToIndexText() {
        let indexText = document.querySelector("#indexText");
        if (indexText) {
            let indexP = document.createElement("p");
            indexP.innerHTML = ` <hr><ul><li> I would love to work as a programmer/developer in Finance Industry After completing my course and help grow financial technology and platforms. </li>
                <li>My ultimate goal is to be an entrepreneur and design/create a trading platform of my own and start my own brokerage house.</li><ul>
                `;
            indexText.appendChild(indexP);
        }
    }

    // function used to validate form
    function validateForm() {
        let contactForm = document.forms[0];

        if (contactForm) {
            contactForm.noValidate = true;

            let errorMessage = document.getElementById("errorMessage");

            let firstName = document.getElementById("firstName");
            firstName.addEventListener("blur", (event) => {
                if (firstName.value.length < 2) {
                    firstName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid First Name with a length of 2 or more characters";
                } else {
                    errorMessage.hidden = true;
                }
            });

            let lastName = document.getElementById("lastName");
            lastName.addEventListener("blur", (event) => {
                if (lastName.value.length < 2) {
                    lastName.focus();
                    errorMessage.hidden = false;
                    errorMessage.textContent = "Please enter a Valid Last Name with a length of 2 or more characters";
                } else {
                    errorMessage.hidden = true;
                }
            });

            let contactNumber = document.getElementById("contactNumber");
            contactNumber.addEventListener("keypress", (event) => {
                event = (event) ? event : window.event;
                var charCode = (event.which) ? event.which : event.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    return false;
                }
                return true;
            });

            let submitButton = document.getElementById("submitButton");

            submitButton.addEventListener("click", (event) => {
                event.preventDefault();
                console.log("Submit Button Clicked");
            });
        }
        return false;
    }

    function Start() {
        let title = highlightActiveLink();

        addContentToIndexPage();
        addContentToProjectPage();
        addContentToContactPage();
        addContentTofooter();

        let formValidated = validateForm();
        if (formValidated) {
            console.log("successfully validated form");
        } else {
            console.warn("form not validated - does not exist");
        }
    }

    window.addEventListener("load", Start);

})();