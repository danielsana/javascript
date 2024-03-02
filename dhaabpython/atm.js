const pin = 5531;
let balance = 30000;

console.log("Welcome to SBI");
for (let i = 0; i < 3; i++) {
    const pin_no = parseInt(prompt("enter your pin number"));
    if (pin_no === pin) {
        console.log("Deposit : d  Withdrawl : w ");
        const option = prompt("choose the option");
        if (option === "d") {
            const depositamount = parseInt(prompt("Enter the amount you want to deposit"));

            let total_balance = balance+depositamount
            console.log("Total amount = ",total_balance);
            console.log("Amount deposited successfully");
            break;
        } else {
            const withdrawlamount = parseInt(prompt("enter the amount you want to withdraw"));
            if (withdrawlamount <= balance) {
                total_balance = balance-withdrawlamount
                // console.log("kirkriirkrkrr");
                console.log('KES .',withdrawlamount," withdrawn successfully");
                console.log("Remaining amount = ",total_balance);
                break;
            } else {
                console.log("insufficient funds");
            }
        }
    } else {
        console.log("your pin is incorrect");
        console.log("card blocked");
    }
}

