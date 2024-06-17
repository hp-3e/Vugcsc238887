function addCourse() {
    var totalCourses = parseInt(document.getElementById("totalCourses").value);

    var coursesDiv = document.getElementById("courses");
    coursesDiv.innerHTML = "";

    for (var i = 1; i <= totalCourses; i++) {
        var courseDiv = document.createElement("div");
        courseDiv.className = "course";
        courseDiv.innerHTML = "<h4>Course " + i + "</h4>" +
            "<div class='input-group'>" +
            "<label for='credit" + i + "'>Credit Hours:</label>" +
            "<input type='number' id='credit" + i + "' placeholder='Enter credit units'>" +
            "</div>" +
            "<div class='input-group'>" +
            "<label for='grade" + i + "'>Grade:</label>" +
            "<input type='text' id='grade" + i + "' placeholder='Enter grade (e.g., A, B, C)'>" +
            "</div>";
        coursesDiv.appendChild(courseDiv);
    }
}

function calculateCGPA() {
    var totalCourses = parseInt(document.getElementById("totalCourses").value);
    var totalCredits = 0;
    var totalGradePoints = 0;

    for (var i = 1; i <= totalCourses; i++) {
        var credit = parseFloat(document.getElementById("credit" + i).value);
        var grade = document.getElementById("grade" + i).value.toUpperCase();

        var gradePoints;
        switch (grade) {
            case "A":
                gradePoints = 4.5;
                break;
            case "B":
                gradePoints = 3.0;
                break;
            case "C":
                gradePoints = 2.0;
                break;
            case "D":
                gradePoints = 1.0;
                break;
            case "F":
                gradePoints = 0.0;
                break;
            default:
                gradePoints = 0.0;
        }

        totalCredits += credit;
        totalGradePoints += (credit * gradePoints);
    }

    var cgpa = totalGradePoints / totalCredits;

    document.getElementById("result").innerHTML = "CGPA: " + cgpa.toFixed(2);
}
