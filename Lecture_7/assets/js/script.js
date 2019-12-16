/*
  write a program to calculate your grade / GPA
  1. Declare a variable for grade 
  2. check 
     if grade < 0 || grade > 100
            if grade < 0   => negative 
            else grade > 100 => greater than 100
     else 
        if      grade < 50                   => fail
        else if grade >= 50 && grad < 65    => good 
        else if grade >= 65 && grad < 85    => very good 
        else    grade >= 85                  => Excellent  
*/
// if(condition) {}
// else if(condition) {}
// else {}















const grade = 120;
// grade less than 0 OR grade greater than 100
if (grade < 0 || grade > 100) {
  // negative
  if (grade < 0) {
    console.log('negative');
  } else {
    // number > 100
    console.log('greater than 100');
  }
} else {
  if (grade >= 0 && grade < 50) {
    console.log('fail');
  } else if (grade >= 50 && grade < 65) {
    console.log('good');
  } else if (grade >= 65 && grade < 85) {
    console.log('very good');
  } else if (grade >= 85 && grade <= 100) {
    console.log('Excellent');
  }
}
