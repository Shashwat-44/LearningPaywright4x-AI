let age = 26;
let is_promod_enjoy = age>18?(age>25?"Goa & Drink":"No Drink, Only Goa") : "No Goa";
console.log(`Promod can enjoy ${is_promod_enjoy}`);

let lanid = 100;
let userconfirm = lanid<5410?(lanid<=100?"Private_User":"Guest_User") : "Not an user";
console.log(userconfirm)

let statusCode = 404;
let category = statusCode<300?"Success":
                statusCode<400?"Redirect":
                statusCode<500?"Client Error":
                "Server Error";
console.log(`Status ${statusCode}: ${category}`);

let temp = 35;
let feel = temp>=40?"Very Hot":
            temp>=30? "Hot":
            temp>=10? "Cool":
            "Cold";
console.log(`The temperature is ${temp}, it feels ${feel}`);
console.log("Temperature:", temp, "| Feel:", feel);