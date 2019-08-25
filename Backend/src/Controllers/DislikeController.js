const Dev = require("../Models/Dev")

module.exports = {
    async store(req, res){
        const { user } = req.headers
        const { devId } = req.params
        
        const loggedDev = await Dev.findById(user)
        const targgetDev = await Dev.findById(devId)

        if(!targgetDev){
            return res.status(400).json({error: "Dev not exists"}); 
        }

        loggedDev.dislikes.push(targgetDev._id);

        await loggedDev.save();

        console.log(req.params.devId);
        console.log(req.headers.user);

        return res.json(loggedDev);
    }
}