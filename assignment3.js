function convertthetemp(temp, scale){
    temp = prompt("enter the temp");
    scale = prompt("celcius or farenheit: ")
    let celcius;
    let farenheit;
    if(scale = "celcius"){
        celcius = (farenheit - 32) * 5/9;
        document.write(`${celcius} temperature is ${farenheit}`);
    }else if(scale = "farenheit"){
        farenheit = (celcius * 9/5) + 32;
        document.write(`${farenheit} temperature is ${celcius}`);
    }
}