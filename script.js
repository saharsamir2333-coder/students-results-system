document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateResult);

function calculateResult() {
  // Get grades and attendance
  let g1 = document.getElementById("grade1").value;
  let g2 = document.getElementById("grade2").value;
  let g3 = document.getElementById("grade3").value;
  let attendance = document.getElementById("attendance").value;

  let error = document.getElementById("error");
  let result = document.getElementById("result");

  error.innerHTML = "";
  result.style.display = "none";

  // Check empty fields
  if (g1 === "" || g2 === "" || g3 === "" || attendance === "") {
    error.innerHTML = "Please fill in all fields!";
    return;
  }

  // Convert values to numbers
  g1 = Number(g1);
  g2 = Number(g2);
  g3 = Number(g3);
  attendance = Number(attendance);

  // Validate grades
  if (
    !Number.isFinite(g1) ||
    !Number.isFinite(g2) ||
    !Number.isFinite(g3) ||
    !Number.isFinite(attendance) ||
    g1 < 0 ||
    g1 > 100 ||
    g2 < 0 ||
    g2 > 100 ||
    g3 < 0 ||
    g3 > 100 ||
    attendance < 0 ||
    attendance > 100
  ) {
    error.innerHTML = "Grades and attendance must be between 0 and 100!";
    return;
  }

  // Calculate total marks
  let total = g1 + g2 + g3;

  // Calculate average
  let average = total / 3;

  // Calculate grade
  let grade;

  if (average >= 98) {
    grade = "A";
  } else if (average >= 88) {
    grade = "B";
  } else if (average >= 73) {
    grade = "C";
  } else if (average >= 68) {
    grade = "D";
  } else if (average <= 58) {
    grade = "E";
  }

  // Check final result
  let finalResult;

  if (g1 >= 50 && g2 >= 50 && g3 >= 50 && attendance >= 75) {
    finalResult = "SUCCESSFUL";
  } else {
    finalResult = "FAILED";
  }

  // Display student report
  document.getElementById("total").textContent = total;

  document.getElementById("average").textContent = average.toFixed(2);

  document.getElementById("finalGrade").textContent = grade;

  document.getElementById("showAttendance").textContent = attendance + "%";

  let finalText = document.getElementById("finalResult");

  finalText.textContent = "Final Result: " + finalResult;

  if (finalResult === "SUCCESSFUL") {
    finalText.style.color = "green";
  } else {
    finalText.style.color = "red";
  }

  result.style.display = "block";
}
