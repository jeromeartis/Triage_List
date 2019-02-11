/* Script Owner: Jerome Artis
   Date:         02/08/19
   Assignment #: 3
*/


const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]
// 

let add = function (){
  // let command = prompt('Choose one: update, delete, add, reorder');
  alert(patientList);
  const addPatient = prompt("Enter Patient Name");
  patientList.push(addPatient);
  alert(patientList);

};

let update = function (){
  // let command = prompt('Choose one: update, delete, add, reorder ');
  alert(patientList);
  let getPatient = prompt("Enter person from existing Patient List");
  console.log(getPatient);
  patientList.indexOf(getPatient);
  let indexOf = patientList.indexOf(getPatient);
  const addPatient = prompt("Enter Patient Name");
  patientList.splice(indexOf,1,addPatient);
  alert(patientList);
};

let deleted = function(){
  // let command = prompt('Choose one: update, delete, add, reorder');
  alert(patientList);
  let getPatient = prompt("Enter person from existing Patient List");
  let indexOf = patientList.indexOf(getPatient);
  patientList.splice(indexOf, 1);
  alert(patientList);
};

let reorder = function (){
  // let command = prompt('Choose one: update, delete, add, reorder');
  alert(patientList);
  const getPatient = prompt("Select Patient to be replaced ");
  let indexOf = patientList.indexOf(getPatient);
  console.log(indexOf);
  const replacePatient = prompt("Enter Patient Name")
  const indexOf2 = patientList.indexOf(replacePatient)
  console.log(indexOf2);
  patientList.splice(indexOf, 1, replacePatient);
  patientList.splice(indexOf2,1, getPatient);
  // [patientList[indexOf],patientList[indexOf2]] = [patientList[indexOf2],patientList[indexOf]];
  alert(patientList);
};
let command = prompt('Choose one: update, delete, add, reorder');
switch(command){
  case "add":
  // let command = prompt('Choose one: update, delete, add, reorder');
  add();
  break;
  case "update":
  // let command = prompt('Choose one: update, delete, add, reorder');
  update();
  break;
  case "delete":
  // let command = prompt('Choose one: update, delete, add, reorder');
  deleted()
  break;
  case "reorder":
  // let command = prompt('Choose one: update, delete, add, reorder');
  reorder();
  break;
  default:
  alert("Command not recognized...")
}
