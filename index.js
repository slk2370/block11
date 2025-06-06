const userTempInF = () => {
    let tempF = prompt("Please enter your temperature in Fahrenheit");
    return Number(tempF)
}

const convertToCelsius = () => {
    const tempF = userTempInF();
    let tempC = (tempF - 32) * 5/9
    tempC = Math.round(tempC)
    return { tempC, tempF }
}

const describeTemperature = () => {
    const { tempC, tempF } = convertToCelsius()
    if(tempC < 0){
        alert (`${tempF} F is equal to ${tempC} C and it feels like very cold`)
    }else if(tempC < 20){
        alert (`${tempF} F is equal to ${tempC} C and it feels like cold`)
    }else if(tempC < 30){
        alert (`${tempF} F is equal to ${tempC} C and it feels like warm`)
    }else if(tempC < 40){
        alert (`${tempF} F is equal to ${tempC} C and it feels like hot`)
    }else if(tempC >= 40){
        alert (`${tempF} F is equal to ${tempC} C and it feels like very hot`)
    }else{
        alert ('something went wrong')
    }
}

describeTemperature()