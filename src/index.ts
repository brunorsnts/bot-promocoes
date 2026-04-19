import { fetchDeals } from './scraper/pelando';

async function requisicaoGet() {
    console.log(await fetchDeals());
}


requisicaoGet();