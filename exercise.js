//object literal
let bob = {
    fname: "bob",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1603',
        grades: [ 89, 34, 67 ]
      },
      {
        course: 'INFO 1601',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  let sally = {
    fname: "sally",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1601',
        grades: [ 100, 89, 79 ]
      }
    ]
  };
  
  let paul = {
    fname: "paul",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1600',
        grades: [ 89, 34, 67 ]
      }
    ]
  };
  
  
  const students = [bob, sally, paul];


  function getAverageGrade(student, course_code){

    for(let record of student.transcript){

        if(record.course === course_code){

            let sum = 0;
            for(let grade of record.grades){
                sum += grade;
            }
            return sum / record.grades.length;
        }
    }
    return -1;
  }

  console.log(getAverageGrade(bob, "INFO 1603"));


  function getAssignmentMark(student, course_code, num){

    let check;

    for(let record of student.transcript){

        if(record.course == course_code){
            
            if(num >= 0 && num <= record.grades.length)
            return record.grades[num];
        }

        else if(record.course != course_code){

            check = false;
        }
    }

    if(check === false){

        return -1;
    }

  }

  console.log(getAssignmentMark(bob, "INFO 1601", 1));


  function averageAssessment(students, courseName, assignment){

    let avg;
    let sum = 0;
    let num_scores = 0;

    for(let record2 of students) {

      for(let course of record2.transcript){

        if(course.course === courseName){

          sum = sum + course.grades[assignment];
          num_scores++;
        }
      }
    }

    avg = sum / num_scores;


    return avg;

  }

console.log(averageAssessment(students, "INFO 1601", 1));

