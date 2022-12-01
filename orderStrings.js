function StringChallenge(str1, str2) {

    // code goes here  
    let value;
    for (let i = 1; i < str1.split('').length; i++) {

        if (!str2.includes(str1.split('')[i])) {
            value = false
        } else {
            value = true;
        }

    }
    return value;




}

// keep this function call here 
console.log(StringChallenge(readline()));