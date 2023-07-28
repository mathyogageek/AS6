// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700

  const width = 800;
  const height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(width, height);
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
const scWidth = window.screen.width;
const scHeight = window.screen.height;
const leftPlace = (scWidth - width)/2;
const topPlace = (scHeight - height)/2;
window.moveTo(leftPlace, topPlace);

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
function getElementById(id) {
    return document.getElementById(id);
}

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
const clickCancel = getElementById("cancel");
    clickCancel.addEventListener("click", () => {
        window.close();
    });

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
const employeeForm = getElementById("empForm");
employeeForm.addEventListener("submit", (event) =>{
    event.preventDefault();

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
    const id = getElementById("id").value;
    const name = getElementById("name").value;
    const extension = getElementById("extension").value;
    const email = getElementById("email").value;
    const department = getElementById("department").value;

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
const mainOutput = window.opener.document.getElementById("loginDetails");
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
const formStyle = `Employee ID: ${id}
Full Name: ${name}
Extension: ${extension}
Email: ${email}
Department: ${department}`;
mainOutput.innerText = formStyle;

// CLOSE THE POPUP
window.close();
});
});
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE