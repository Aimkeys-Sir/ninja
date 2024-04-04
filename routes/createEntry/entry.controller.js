const { createEntry } = require("../../firebase/index")

async function httpCreateEntry(req, res) {
    const { parkingId, timeIn, licensePlate } = req.body

    const data =await createEntry({ licensePlate, timeIn, parkingId })
    console.log(data)

    return res.json(data).status(201)

}

module.exports = {
    httpCreateEntry
}