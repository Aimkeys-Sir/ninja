export function httpUssdCallback(req, res){
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text
    } = req.body

    return "Parking Ninja"

}

function textResponse(text){
    if(text === ''){
        return 'CON Welcome to Parking Ninja. \n1.Request checkout amount.'
    }else if(text === '1'){
        return 'CON Enter License Plate.'
    }else if(text === '2'){
        return 'END Thank you'
    }

}