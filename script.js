


document.addEventListener("DOMContentLoaded", function () {
   

 
   document.addEventListener("DOMContentLoaded", function () {

    // Open and Close Spell Books
    document.getElementById("change-password-book-cover").addEventListener("click", function () {
        document.getElementById("change-password-book").classList.remove("hidden");
    });

    document.getElementById("change-name-book-cover").addEventListener("click", function () {
        document.getElementById("change-name-book").classList.remove("hidden");
    });

    document.getElementById("summon-familiar-book-cover").addEventListener("click", function () {
        document.getElementById("summon-familiar-book").classList.remove("hidden");
    });

    document.getElementById("close-tome").addEventListener("click", function () {
        document.querySelectorAll(".spell-page").forEach(book => book.classList.add("hidden"));
    });


    // Change Password Form Handling
    document.getElementById("change-password-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let newPassword = document.getElementById("new-password").value;
        let confirmPassword = document.getElementById("confirm-password").value;

        if (newPassword === confirmPassword) {
            alert("Password successfully changed!");
        } else {
            alert("Passwords do not match!");
        }
    });

    // Change Name Form Handling
    document.getElementById("rename-wizard-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let newName = document.getElementById("wizard-name").value;
        let newTitle = document.getElementById("wizard-title").value;

        document.getElementById("wizard-name-display").innerText = newName;
        document.getElementById("wizard-title-display").innerText = newTitle;

        addUser({ wizardName: newName, wizardTitle: newTitle });
    });

   // Summon Familiar Form Handling
   

   document.querySelector("#summon-form").addEventListener("submit", function (event) {
       event.preventDefault();
       let name = document.querySelector("#familiar-name").value;
       let type = document.querySelector("#familiar-type").value;
       let hasWings = document.querySelector("#has-wings").checked;
       let wingsType = document.querySelector("#wings-type").value;
       let traits = Array.from(document.querySelectorAll('input[name="traits"]:checked')).map(trait => trait.value);
       let mood = document.querySelector("#familiar-mood").value;
       let contractEnd = document.querySelector("#contract-end").value;
       
       let familiarData = { name, type, hasWings, wingsType: hasWings ? wingsType : "None", traits, mood, contractEnd };
       addUser(familiarData);


       let familiarDescription = `You have summoned: ${name}, a ${type}`;
       if (hasWings) {
           familiarDescription += ` with ${wingsType} wings.`;
       } else {
           familiarDescription += ".";
       }
       if (traits.length > 0) {
           familiarDescription += ` It has the following customizations: ${traits.join(", ")}.`;
       }
       familiarDescription += ` It appears to be ${mood}. The contract ends on ${contractEnd}.`;

       alert(familiarDescription);
   });


    // Summon Familiar Form Handling
    document.getElementById("summon-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("familiar-name").value;
        let type = document.getElementById("familiar-type").value;
        let hasWings = document.getElementById("has-wings").checked;
        let wingsType = document.getElementById("wings-type").value;
        let traits = Array.from(document.querySelectorAll('input[name="traits"]:checked')).map(trait => trait.value);
        let mood = document.getElementById("familiar-mood").value;
        let contractEnd = document.getElementById("contract-end").value;

        let familiarData = { name, type, hasWings, wingsType: hasWings ? wingsType : "None", traits, mood, contractEnd };
        addUser(familiarData);

        
   });


   // Toggle Wing Type Field
   document.querySelector("#has-wings").addEventListener("change", function () {
       let wingsField = document.querySelector("#wings-type-container");
       if (this.checked) {
           wingsField.classList.remove("hidden");
       } else {
           wingsField.classList.add("hidden");
       }
   });
   



