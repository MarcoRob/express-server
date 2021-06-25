module.exports =  {
    create : (req, res) => {
        res.send("Controller");
    },
    list : (req, res) => {
        console.log('list controller')
        res.send("List Ticket controller")
    }
}
