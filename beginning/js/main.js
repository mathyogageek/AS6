
// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
let btnAddNewEmployee = document.getElementById('btnAddEmployee');
btnAddNewEmployee.addEventListener('click', () => {
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
let popupNewWindow = window.open("add-employee.html", "_blank");
  });
});
