const convertToCelsius = (tempF) => {
const tempC = (tempF - 32) * 5/9
return tempC
}

const describeTemperature = (tempF) => {
    const tempC = convertToCelsius(tempF)
    if(tempC < 0){
        return 'very cold'
    }else if(tempC < 20 && tempC >= 0){
        return 'cold'
    }else if(tempC < 30 && tempC >= 20){
        return 'warm'
    }else if(tempC < 40 && tempC >= 30){
        return 'hot'
    }else if(tempC >= 40){
        return 'very hot'
    }else{
        return 'something went wrong'
    }
}