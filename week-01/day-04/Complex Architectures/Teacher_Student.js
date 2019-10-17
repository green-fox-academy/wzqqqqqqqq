// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

class Student{
    learn(){
        console.log('Student is learning something new.');
    }

    question(teacher){
        this.teacher = teacher;
        teacher.answer()
    }
}

class Teacher{
    teach(student){
        this.student = student;
        student.learn();
    }

    answer(){
        console.log('The teacher is answering a question.');
    }
}

const student_a = new Student();
const teacher_a = new Teacher();
student_a.question(teacher_a)
teacher_a.teach(student_a)

