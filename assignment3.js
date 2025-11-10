function convertthetemp(){
    temp = prompt("enter the temp");
    scale = prompt("celcius or farenheit: ");
    if(scale == "celcius"){
        var celcius = (temp - 32) * 5/9;
        document.write(`${temp} temperature is ${celcius}`);
    }else if(scale == "farenheit"){
        var farenheit = (temp * 9/5) + 32;
        document.write(`${temp} temperature is ${farenheit}`);
    }else{
        document.write(`That is not a unit.`)
    }
}