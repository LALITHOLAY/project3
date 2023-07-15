let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = arr.filter((employee) => employee.profession === "developer");
    developers.map((developer) => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    const developers = arr.filter((employee) => employee.profession === "developer");
    developers.forEach((developer) => console.log(developer));
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    arr = arr.filter((employee) => employee.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 4, name: "emma", age: "22", profession: "designer" },
      { id: 5, name: "michael", age: "23", profession: "developer" },
      { id: 6, name: "alice", age: "21", profession: "manager" },
    ];
  
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }
  