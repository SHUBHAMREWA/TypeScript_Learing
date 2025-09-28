var myPersonalData;
(function (myPersonalData) {
    myPersonalData["student"] = "student";
    myPersonalData["management"] = "management";
})(myPersonalData || (myPersonalData = {}));
var info = myPersonalData.management;
console.log(info);
export {};
