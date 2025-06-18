let students = [
    { name: "Ali", rollNumber: "101", marks: 85 },
    { name: "Sara", rollNumber: "102", marks: 67 },
    { name: "Omar", rollNumber: "103", marks: 74 }
];

let studentListDiv = document.getElementById("studentList");

students.forEach((student) => {
    let entry = document.createElement("p");
    entry.textContent = Name: ${student.name}, Roll: ${student.rollNumber}, Marks: ${student.marks};
    studentListDiv.appendChild(entry);
});