import mongodb from "mongodb"
import { UniqueString, UniqueNumber, UniqueStringId,UniqueNumberId,UniqueOTP,UniqueCharOTP,HEXColor,uuid } from 'unique-string-generator';

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

    static async createLink(fullLink) {
        try {
            //generate random sequence of characters & add to your site addy
            const short = "http://localhost:3000/" + `${UniqueCharOTP(6)}`
            //enter the fullLink & shortLink into the database
            const linkDoc = {
                fullLink: fullLink,
                shortLink: short
            }
            await links.insertOne(linkDoc)
            //return the address + sequence of characters
            return short
        } catch (e) {
            console.error(`Error creating shortened link: ${e}`)
        }
    }

    
}