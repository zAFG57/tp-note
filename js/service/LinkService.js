export class LinkService {

    async getLinks() {
        let links = await this.getLinksStub();
        return await links.json();
    }
    
    async getLinksStub() {
        return fetch(stubUrl);
    }

    async getLink(url) {
        let links = await this.getLinks();
        for (let i=0; i<links.length; i++) {
            if (links[i]["link"] == url) return links[i];
        }
        return home;
    }
}