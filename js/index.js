import { createApp, ref } from 'vue';
import { navbar } from 'navbar';
import { LinkService } from 'linkService';

let linkService = new LinkService();

let app = createApp({
    data: function (){
      return {
        liens: [home],
        h1Label: home["label"]
      }
    },
    created: async function() {
        let links = await linkService.getLinks();
        for (let i=0; i<links.length; i++) {
            this.liens.push(links[i]);
        }
    },
    methods: {
        navigateTo: async function(url) {
            let link = await linkService.getLink(url);
            this.h1Label = link["label"];
        }
    }
  });
  app.component("links",navbar);
  app.mount("#app");

  