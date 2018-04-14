var config = {
    apiKey: "AIzaSyAAH3koOW5kzlS_coXNx-t1BPRsFrsqxAI",
    authDomain: "scheduler-b3ec2.firebaseapp.com",
    databaseURL: "https://scheduler-b3ec2.firebaseio.com",
    projectId: "scheduler-b3ec2",
    storageBucket: "scheduler-b3ec2.appspot.com",
    messagingSenderId: "714855811558"
  };

  firebase.initializeApp(config);
var database = firebase.database();

$("#add-train-btn").on("click", function(event){
    event.preventDefault();

var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var trainTime = $("#train-time-input").val().trim();
var trainFrequency = $("#frequency-input").val().trim();

var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency,
};

database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.time);
console.log(newTrain.frequency);

alert("Train successfully added.");


});

database.ref().on("child_added", function(childSnapshot,prevChildKey) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;

console.log(trainName);
console.log(trainDestination);
console.log(trainTime);
console.log(trainFrequency);

var trainTimetPretty = moment.unix(trainTime).format("HH:mm");

var trainDifference = moment().diff(moment.unix(trainTime, "X"), "time");
console.log(trainDifference);

var minsAway = trainFrequency * trainTime;
console.log(minsAway);

$("#train-table >tbody").append("<tr>td" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainTime + "</td><td>" + trainFrequency + "</td><td>" );
});










// var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

//   // Calculate the months worked using hardcore math
//   // To calculate the months worked
//   var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
//   console.log(empMonths);

//   // Calculate the total billed rate
//   var empBilled = empMonths * empRate;
//   console.log(empBilled);

//   // Add each train's data into the table
//   $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
//   empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
// });

// op']").val();

// //create date format          
// var timeStart = new Date("01/01/2007 " + valuestart).getHours();
// var timeEnd = new Date("01/01/2007 " + valuestop).getHours();

// var hourDiff = timeEnd - timeStart;  

// // Add each train's data into the table
// $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
// empStartPretty + "</td><td>" + trainFrequency + "</td></tr>");











