// Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

class Student {
  constructor(name, surname, birthYear, grades) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.attendance = new Array(25).fill(null);
    this.grades = grades || [];
  }

  present() {
    this.updateAttendance(true);
  }

  absent() {
    this.updateAttendance(false);
  }

  updateAttendance(status) {
    const emptyIndex = this.attendance.indexOf(null);
    if (emptyIndex !== -1 && emptyIndex < 25) {
      this.attendance[emptyIndex] = status;
      console.log(
        `${this.name} ${this.surname} marked as ${
          status ? "present" : "absent"
        }`
      );
    } else {
      console.log("Attendance array is full. Cannot add more entries.");
    }
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return "No grades available";
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  getAverageAttendance() {
    if (this.attendance.length === 0) {
      return 0; // Повертаємо 0, якщо масив відвідуваності пустий
    }
    const totalPresent = this.attendance.filter(
      (status) => status === true
    ).length;
    return totalPresent / this.attendance.length;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const averageAttendance = this.getAverageAttendance();

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

// Приклад використання
const student = new Student("Sasha", "Mikhalsky", 1993, [90, 85, 95]);
console.log(student.getAge()); // Виведе вік студента
console.log(student.getAverageGrade()); // Виведе середній бал
console.log(student.getAverageAttendance());
console.log(student.summary());
console.log(student.present()); // Позначити присутність
console.log(student.absent()); // Позначити відсутність
console.log(student.attendance); // Перевірка масиву відвідуваності
