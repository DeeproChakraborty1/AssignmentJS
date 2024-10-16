function getSecondEmployeeInfo(employees) {
    if (employees.length >= 2) {
      const secondEmployee = employees[1];
      return {
        name: secondEmployee.name,
        department: secondEmployee.department
      };
    } else {
      return null;
    }
  }
  
  // Example usage:
  const employees = [
    { name: "Alice", department: "HR" },
    { name: "Bob", department: "Engineering" },
    { name: "Charlie", department: "Sales" }
  ];
  
  const secondEmployeeInfo = getSecondEmployeeInfo(employees);
  console.log(secondEmployeeInfo);