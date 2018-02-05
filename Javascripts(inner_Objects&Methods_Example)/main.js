function createGroup(name){
    this.Name = name;
    this.studentList = [];
    let idGenerator = 1;
    // add student begin
    this.addStudent = function(name,surname,email){
       let newStudent = {};
       newStudent.id = idGenerator;
       idGenerator ++;
       newStudent.Name = name;
       newStudent.Surname = surname;
       newStudent.Email = email;
       newStudent.scores = [];

       this.studentList.push(newStudent);
       
      // find avarage score in al students begin
      newStudent.Avarage = function()
      {
          let information;
          if(newStudent.scores.length == 0)
          {
              return "Hec bir qiymet yoxdur";
          }
          else{
              var avarage = 0;
              for(i = 0;i < this.scores.length;i++)
              {
                  avarage += this.scores[i];
              }
              avarage = avarage / this.scores.length;
               information = "Telebe "+this.Name+"-in ortalama qiymeti "+ avarage+"-a beraberdir";
          }
          return information;
      }
      // find avarage score end
    }
    // add student end
     //    add scores begin
     this.addScore = function(id,score){
         this.studentList[id-1].scores.push(score);
     }
    // add scores end
    // find max Avarage score begin
    this.findMaxGPA = function () {
        maxGPA = 0;
        id = 0;
        for (i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].scores.length == 0) {
            } else {
                var total = 0;
                var average = 0;
                for (var a = 0; a < this.studentList[i].scores.length; a++) {
                    total += this.studentList[i].scores[a];
                }
                average = total / this.studentList[i].scores.length;
            }
            if (average > maxGPA) {
                maxGPA = average;
                id = i+1
            }
        }
        return "Maksimum netice "+maxGPA+"-a beraberdir ve id-si "+id+" olan telebededeir";
    }
    // find max Avarage score end
    // find min Avarage score begin
    this.findMinGPA = function () {
        minGPA = 100;
        id = 0
        for (i = 0; i < this.studentList.length; i++) {
            if (this.studentList[i].scores.length == 0) {
            } else {
                var total = 0;
                var average = 0;
                for (var a = 0; a < this.studentList[i].scores.length; a++) {
                    total += this.studentList[i].scores[a];
                }
                average = total / this.studentList[i].scores.length;
            }
            if (average < minGPA) {
                minGPA = average;
                id = i+1
            }
        }
        return "Minimum netice "+minGPA+"-a beraberdir ve id-si "+id+" olan telebededeir";
    }
    // find min Avarage score end  
    // delete student begin
    this.deleteStudent = function(id){
        if(id < 1 && (id > this.studentList.length + 1)){
            return "Bele parametre uygun telebe movcud deyil";
        }
        else{
            for (i = 0; i < this.studentList.length; i++)
            {
                if(id == this.studentList[i].id){
                    this.studentList.splice(id-1,1);
                    return "id -si "+id+" olan student silindi<br>Ve yeni listimiz bele oldu "+this.studentList;
                }
            }
        }
    } 
    // delete student end
}
// console try begin
let firstGroup = new createGroup("P105");
// add student begin in console
firstGroup.addStudent("Mursel","Murselov","mirmursalaam@code.edu.az");
firstGroup.addStudent("Elxan","Cabbarov","cabbarov@code.edu.az");
firstGroup.addStudent("Emrah","Emrahov","emirah@code.edu.az");
// add student end in console
// add scores begin in console
firstGroup.addScore(1,100);
firstGroup.addScore(1,80);

firstGroup.addScore(2,80);
firstGroup.addScore(2,50);

firstGroup.addScore(3,70);
firstGroup.addScore(3,40);
// add scores end in console
// show avarage in console begin
console.log(firstGroup.studentList[1].Avarage());
// show avarage in console end
console.log(firstGroup.studentList[1].scores); 
// find Max avarage in consol begin
console.log(firstGroup.findMaxGPA());
// find max avarage in consol end
// find min in console begin
console.log(firstGroup.findMinGPA());
// find min in console end
// deleteStudent console begin
console.log(firstGroup.studentList);
console.log(firstGroup.deleteStudent(2));
// deletestd console end