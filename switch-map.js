let marks = "";
let grade = "";
function studentGrade(marks) {
  marks = marks;
  switch (true) {
    case marks <= 100 && marks >= 90:
      grade = "A";
      break;
    case marks <= 89 && marks >= 80:
      grade = "B";
      break;
    case marks <= 79 && marks >= 70:
      grade = "C";
      break;
    case marks <= 69 && marks >= 60:
      grade = "D";
      break;
    case marks <= 59 && marks >= 50:
      grade = "E";
      break;
    case marks <= 49 && marks >= 0:
      grade = "F";
      break;
    default:
      grade = "Invalid marks";
      break;
  }
  return grade;
}

let student = [
  { name: "John", marks: studentGrade(parseInt(92)) },
  { name: "Oliver", marks: studentGrade(parseInt(85)) },
  { name: "Michael", marks: studentGrade(parseInt(79)) },
  { name: "Dwight", marks: studentGrade(parseInt(95)) },
  { name: "Oscar", marks: studentGrade(parseInt(64)) },
  { name: "Kevin", marks: studentGrade(parseInt(48)) },
];
var obj = new Object();
obj.A = [];
obj.B = [];
obj.C = [];
obj.D = [];
obj.E = [];
obj.F = [];
console.log(
  student.forEach((data) => {
    if (data.marks === "A") {
      obj.A.push(data);
    } else if (data.marks === "B") {
      obj.B.push(data);
    } else if (data.marks === "C") {
      obj.C.push(data);
    } else if (data.marks === "D") {
      obj.D.push(data);
    } else if (data.marks === "E") {
      obj.E.push(data);
    } else if (data.marks === "F") {
      obj.F.push(data);
    }
  })
);
console.log(obj);
