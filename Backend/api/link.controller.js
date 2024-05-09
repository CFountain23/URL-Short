import LinksDAO from "../dao/linkDAO.js"

export default class LinksController {

    static async apiGetLink(req,res,next) {
        const response = await LinksDAO.getLink(req.query.short)
        
        res.json(response)
    }

}