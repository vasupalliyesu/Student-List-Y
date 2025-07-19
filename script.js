let students = [
    { name: "Yesu", age: 21 },
    { name: "Aman", age: 20 },
    { name: "Satwik", age: 21 },
    { name: "Yesebu", age: 20 }
];

function showStudent() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";
    students.forEach((student, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${student.name} - Age: ${student.age}`;
        list.appendChild(li);
    });
}

function sortByName() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    showStudent();
}

function sortByAge() {
    students.sort((a, b) => a.age - b.age);
    showStudent();
}
