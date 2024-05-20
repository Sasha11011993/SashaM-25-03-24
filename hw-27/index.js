class Student {
  constructor(name, surname, birthYear, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.assessments = assessments;
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverage() {
    if (this.assessments.length === 0) return 0;
    const sum = this.assessments.reduce((acc, val) => acc + val, 0);
    const average = sum / this.assessments.length;
    return Math.round(average);
  }

  present() {
    if (this.attendance.filter((val) => val === true).length >= 25) {
      console.log("Максимальна кількість відвідувань досягнута.");
      return this;
    }
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === null) {
        this.attendance[i] = true;
        break;
      }
    }
    return this;
  }

  absent() {
    if (this.attendance.filter((val) => val === true).length >= 25) {
      console.log("Максимальна кількість відвідувань досягнута.");
      return this;
    }
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === null) {
        this.attendance[i] = false;
        break;
      }
    }
    return this;
  }

  summary() {
    const averageAssessment = this.getAverage();
    const attendancePercentage =
      this.attendance.filter((val) => val === true).length /
      this.attendance.length;

    if (averageAssessment > 90 && attendancePercentage > 0.9) {
      return "Молодець!";
    } else if (averageAssessment > 90 || attendancePercentage > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student(
  "Олександр",
  "Михальський",
  1993,
  [95, 90, 90, 90, 95, 95]
);
console.log(student1.getAge());
console.log(student1.getAverage());
console.log(student1.present().absent().present());
console.log(student1.summary());

const student2 = new Student("Марія", "Іванова", 2001, [80, 75, 85]);
console.log(student2.getAge());
console.log(student2.getAverage());
console.log(student2.present().present().present());
console.log(student2.summary());
