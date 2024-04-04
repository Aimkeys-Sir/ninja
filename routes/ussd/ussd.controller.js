const e = require("express")
const { getEntry } = require("../../firebase")

async function httpUssdCallback(req, res) {
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text
    } = req.body

    return res.send(await textResponse(text))
}

async function textResponse(text) {
    if (text === '') {
        return 'CON Welcome to Parking Ninja. \n1.Request checkout amount.'
    } else if (text === '1') {
        return 'CON Enter License Plate.'
    }
    else if (text.includes("1*")) {
        const plate = text.split("*")[1]
        const price = await calculatePrice(plate)
        return `END Your plate is ${plate}.\n Your checkout amount is ksh ${price}`

    } else {
        return 'END Thank you'
    }

}

async function calculatePrice(reg){
    const entry = await getEntry(reg)
    console.log(entry)
    const time = new Date().getTime() - new Date(entry.timeIn).getTime()
    const price =Math.round(time/(1000*60))*5
    console.log(price)

    return price
}

module.exports = {
    httpUssdCallback
}