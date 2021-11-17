// Constuctor Function

function Course(title) {
    this.title=title,
    this.enroll=function() {
        console.log('You Are Succesfully Enrolled ');
    }
}
const course=new Course('Anish Kumar Sharma');
course.enroll()

// End the Constructor Function //



//  Start Factory Function //
//    Function Name Should be Camel CASE //
function createCourse(name,roll,semester,branch,email,phone) {
    return {
        title:name,roll,semester,branch,email,phone,
        enroll() {
            console.log('You Are Sucessfully Enrolled');
        }
    }
}
  const course = createCourse('Anish kUmar Sharma',1811141,5,"Information Technolgy","#",9102145879);
console.log(course);

// End Factory Function


// The difference Betwwen Factory and contructor Function is??
//  1> factory function used their Naming  Convention in the form of Camel Case.
// 2> class construction used their Naming Convention in the form of PAscal form.
// 3>In Factory Function We Cannot used The new keyword(Normally same As FunctionName).
// 4>In Constructor FUnction we used the New Keyword      (like const course=new createCourse()   
                                                  // and new Keyword used this. Keyword to Pointing the empty object
                                                //   And also NEW Keyword automaically create and  return the value)
      

