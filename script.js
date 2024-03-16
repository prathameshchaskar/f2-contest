/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((e) =>{
    if(e.profession === "developer") console.log(e)
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((e) =>{
    if(e.profession === "developer") console.log(e)
  })
}

function addData() {
  //Write your code here, just console.log
  let newObj =  {id:4,name:"susan",age:"20",profession:"intern"} 
  arr.push(newObj)
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  let newArr = arr.filter((e) => {
    return e.profession !== "admin"
  })
  console.log(newArr)
}

 
function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "harry", age: "21", profession: "HR" },
    { id: 6, name: "ron", age: "22", profession: "intern" },
    { id: 7, name: "hermione", age: "23", profession: "admin" },
  ];
  let ans = arr.concat(newArr)
  console.log(ans)
}