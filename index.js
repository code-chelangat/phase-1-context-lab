/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeArray){
    let testEmployee = {
         firstName : employeeArray[0],
         familyName : employeeArray[1],
         title : employeeArray[2],
         payPerHour : employeeArray[3],
         timeInEvents: [],
         timeOutEvents: [],
    }
    return testEmployee;
 }
 function createEmployeeRecords(arrayOfArrays){
     return arrayOfArrays.map(createEmployeeRecord);
 }
 
 const getHour = function (dateTime) {
     return parseInt(dateTime.match(/\d{4}$/)[0]);
 };
 
     const getDate = function (dateTime) {
     return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0];
 };
 
 function createTimeInEvent(employeeObject, timeIn) {
     employeeObject.timeInEvents.push({
         type: "TimeIn",
         date: getDate(timeIn),
         hour: getHour(timeIn),
     });
     return employeeObject;
 }
 
 function createTimeOutEvent(employeeObject, timeOut){
     employeeObject.timeOutEvents.push({
         type: "TimeOut",
         date: getDate(timeOut),
         hour: getHour(timeOut)
     });
     return employeeObject;
 }
 
 function hoursWorkedOnDate(employeeObject, dateGiven) {
     let timeIn = employeeObject.timeInEvents.find(
         (event) => event.date == dateGiven
     );
     let timeOut = employeeObject.timeOutEvents.find(
         (event) => event.date == dateGiven
     );
     let totalTime = (timeOut.hour - timeIn.hour) / 100;
     return totalTime;
 }
 
 function wagesEarnedOnDate(employeeObject, dateGiven) {
     let hours = hoursWorkedOnDate(employeeObject, dateGiven);
     return employeeObject.payPerHour * hours;
 }
 
//  function allWagesFor(employeeObject) {
//      return employeeObject.timeInEvents.reduce((total, event) => {
//          return total + wagesEarnedOnDate(employeeObject, event.date);
//      }, 0);
//  }

function findEmployeeByFirstName(array, name) {
    return array.find((employee) => employee.firstName == name);
}
 
 function calculatePayroll(employeeRecord) {
     return employeeRecord.reduce((total, employee) => {
         return total + allWagesFor(employee);
     }, 0);
 }
