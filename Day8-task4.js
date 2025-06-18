let students = [];

let form = document.getElementById("studentForm");
let studentListDiv = document.getElementById("studentList");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let marks = parseInt(document.getElementById("marks").value);

    students.push({ name, rollNumber: roll, marks });

    displayStudents();
    form.reset();
});

function displayStudents() {
    studentListDiv.innerHTML = "";
    students.forEach((student) => {
        let entry = document.createElement("p");
        entry.textContent = Name: ${student.name}, Roll: ${student.rollNumber}, Marks: ${student.marks};
        studentListDiv.appendChild(entry);
    });
}