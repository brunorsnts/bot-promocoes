import { client } from "../whatsapp/client";
import { fetchDeals } from "../scraper/pelando";
import { schedule } from "node-cron";
import { converteUrl } from "../url-converter/converter";

export const scheduledTask = schedule('0 * * * *', async () => {
    const deals = await fetchDeals();
    deals.map(d => d.sourceUrl = converteUrl(d.sourceUrl));
    const top5 = deals.slice(0,5);
    const id = process.env.WHATSAPP_GROUP_ID;
    
    if (id != null) {
        top5.map(d => client.sendMessage(id, d.title
                        + '\n' + 'Preço: R$'
                        + d.price
                        + '\n' + 'Link: '
                        + d.sourceUrl));
    }
});

scheduledTask.stop();