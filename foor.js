

// for 

for (let j = 0; j <= 10; j++) {
    const element = j;
    if(element==6){
        // console.log("6 is the best");
        
    }
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}


let myArray= ["Abhiraj","pappu","Mohan","Manju","Raju"]
for (let index = 0; index < myArray.length; index++) {
    // const element = myArray[index];
    // console.log(element);
    
}


//  break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`detected 5`);
        break
    }
//    console.log(`value of i is ${index}`);
}


// continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
   console.log(`value of i is ${index}`);
}


