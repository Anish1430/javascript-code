// Factory Function
//    Function Name Should be Camel CASE //
function createCourse(name,roll,semester,branch,email,phone) {
    return {
        title:name,roll,semester,branch,email,phone,
        roll1:"sumit",
        enroll() {
            console.log('You Are Sucessfully Enrolled');
        }
    }
}
  const course = createCourse('Anish kUmar Sharma',1811141,5,"Information Technolgy","#",9102145879);
  // Uses Of delete Keyword...//

  delete course.roll1;
  //end delete keyword
  console.log(course);

