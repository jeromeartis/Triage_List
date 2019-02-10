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


 const command = prompt('Choose one: update, delete, add, reorder');


let add = function (){
  alert(patientList);
  const addPatient = prompt("Enter Patient Name");
  patientList.push(addPatient);
  alert(patientList);

};

let update = function (){
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
  alert(patientList);
  let getPatient = prompt("Enter person from existing Patient List");
  let indexOf = patientList.indexOf(getPatient);
  // const deletePatient = prompt("Delete Patient List by index number");
  // console.log(`Patient: ${patientList[deletePatient]} has been removed`);
  delete patientList[indexOf];
  alert(patientList);
};

let reorder = function (){
  alert(patientList);
  const getPatient = prompt("Select Patient to be replaced ");
  let indexOf = patientList.indexOf(getPatient);
  console.log(indexOf);
  const replacePatient = prompt("Enter Patient Name")
  const indexOf2 = patientList.indexOf(replacePatient)
  console.log(indexOf2);
  [patientList[indexOf],patientList[indexOf2]] = [patientList[indexOf2],patientList[indexOf]];
  alert(patientList);
};



while (command !== "add" && command !== "update" && command !== "delete" && command !== "reorder"){
  alert("You entered the wrong command type")
}
if(command === "add"){
      add();
     // patientList[i] + addPatient;
     console.log("add")
   }
if (command === "update"){
     // patientList[i] + updatePatient;
     update();
     console.log("update")
   }
if (command === "delete"){
     // patientList[i] - deletePatient;
     deleted();
     console.log("delete")
   }
if (command === "reorder"){
     // patientList[i]
     reorder();
    console.log("reorder")
}
