let age = 17;
let can_I_go = age>18? "Yes" : "No";
console.log(can_I_go);

let actualstatuscode=200;
let expectedstatuscode=200;
let testresult = actualstatuscode===expectedstatuscode? "Success":"Failed"
console.log(testresult);

let environment = "staging";
let baseurl = environment==="prod"?"https://prod-api.example.com" : "https://staging-api.example.com";
console.log(baseurl);

let isCI=true;
let browsermode = isCI?"headless":"headed";
console.log("Launching browser in", browsermode, 'mode.');

let responsetime = 1000;
let sla = 850;
let slastatus = responsetime<sla?"Within Status" : "SLA Breached";
console.log(`Response: ${responsetime}ms - ${slastatus}`);
console.log(`What is sla time? - ${sla}`);

let condition = -5;
let isSKMale = condition? true: false;
console.log(isSKMale);
console.log(`Value is, ${isSKMale}`);