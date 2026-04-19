import { Deal } from '../types/deal';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-web.pelando.com.br/',
    timeout: 10000,
    headers: {
        "x-sosho-unlogged-id": 'bd56f7f1-f57b-4443-8657-58fbbbf48795',
        origin: 'https://www.pelando.com.br',
        referer: 'https://www.pelando.com.br/',
        "User-Agent": 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Mobile Safari/537.36'
    }
});

export async function fetchDeals(): Promise<Deal[]> {
    try {
        const response = await api.get('feed/highlights?scenario=Main-Feed-Webmobile&limit=10&abFeedUserTermsPreference=b');
        return response.data.data.deals
    } catch (error) {
        console.error("Erro ao buscar promoções:", error)
        return [];
    }

}