module.exports = {

getCards: async(req, res) => {
    try{
        const db = req.app.get('db')
        // let {id} = req.session.user
        console.log(req.session)

        let cardResponse = await db.getCards(id)
        res.send(cardResponse)
    } catch(error){
        console.log('error fetching cards', error)
        res.status(500).send(error)
    }
}




}





