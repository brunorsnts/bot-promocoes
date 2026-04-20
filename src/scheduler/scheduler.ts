import { client } from "../whatsapp/client";
import { fetchDeals } from "../scraper/pelando";
import { schedule } from "node-cron";
import { converteUrl } from "../url-converter/converter";
import { formatMessage } from "../util/format-message";

export const scheduledTask = schedule("* * * * *", async () => {
  const deals = await fetchDeals();
  deals.map((d) => (d.sourceUrl = converteUrl(d.sourceUrl)));
  const top5 = deals.slice(0, 5);
  const id = process.env.WHATSAPP_GROUP_ID;

  if (id != null) {
    for (const d of deals) {
      const mensage = await formatMessage(
        d.title + "\n" + "Preço: R$" + d.price + "\n" + "Link: " + d.sourceUrl,
      );
      client.sendMessage(id, mensage);
    }
  }
});

scheduledTask.stop();
