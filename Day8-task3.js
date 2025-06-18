let students = [
    { name: "Ali", rollNumber: "101", marks: 85 },
    { name: "Sara", rollNumber: "102", marks: 67 },
    { name: "Omar", rollNumber: "103", marks: 74 }
];

let studentListDiv = document.getElementById("studentList");
let filterBtn = document.getElementById("filterBtn");

filterBtn.addEventListener("click", () => {
    studentListDiv.innerHTML = ""; // Clear previous
    let topStudents = students.filter(s => s.marks > 70);
    topStudents.forEach((student) => {
        let entry = document.createElement("p");
        entry.textContent = Name: ${student.name}, Roll: ${student.rollNumber}, Marks: ${student.marks};
        studentListDiv.appendChild(entry);
    });
});