//A function that prompts the user to input student marks.The input should be between 0 and 100.The output should correspond the correct grade.
//A>79, B- 60 to 79 C-59 to 49, D- 40 to 49, E- less than 40

function calculateMark(mark) {
    if (mark >79) {
      console.log(`${mark} -Grade A`);
    } else if (mark >= 60) {
     console.log(`${mark} -Grade B`);
    } else if (mark >= 50) {
      console.log(`${mark} -Grade C`);
    } else if (mark >= 40) {
      console.log(`${mark} -Grade D`);
    } else  {
      grade = "E";
      console.log(`${mark} -Grade E`);
    }
  }
  calculateMark(80);
  calculateMark(65);
  calculateMark(55);
  calculateMark(45);
  calculateMark(20);
  