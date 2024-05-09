import mongodb from "mongodb"

let links

export default class LinksDAO{

    static async injectDB(conn) {
        if(links) {
            return
        } try {
            links = await conn.db(process.env.LINKS_NS).collection('Links')
        } catch(e) {
            console.error(`unable to connect in LinksDAO: ${e}`)
        }
    }

    static async getLink(shortLink) {
        try {
            const link = await links.findOne({shortLink: `${shortLink}`})
            console.log(link)
            return link
        }
        catch (e) {
            console.error(`Full link not found: ${e}`)
        }
    }

    
}