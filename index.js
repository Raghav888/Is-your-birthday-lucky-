const dateofBirth = document.querySelector("#date-of-birth")
const luckynumber = document.querySelector("#lucky-number")
const check = document.querySelector("#check-number")
const output = document.querySelector(".message-output")


const checkLucky=()=> {
    const sum = calSum(dateofBirth.value)
    if (sum > 0 && dateofBirth != null) {
        if (sum % luckynumber.value == 0) {
            output.innerText = `Hurray!! You are Lucky!! 🥳 🥳 🥳`
            document.getElementById("img-out").src = "party.gif"

        } else {
            output.innerText = `Sorry , You make your own Luck!!😕`
            document.getElementById("img-out").src = "sad.gif"
        }
    } else {
        output.innerText = `Enter Valid Inputs`
    }

}

let calSum=(datenum) =>{
    datenum = datenum.replaceAll("-", "")
    let sum = 0
    for (let i = 0; i < datenum.length; i++) {
        sum = sum + Number(datenum.charAt(i))
    }
    console.log(sum)
    return sum;

}
check.addEventListener("click", checkLucky, false)
