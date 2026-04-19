import { Deal } from '../types/deal';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-web.pelando.com.br/',
    timeout: 10000
});

export async function fetchDeals(): Promise<Deal[]> {
    try {
        const response = await api.get('feed/highlights?scenario=Main-Feed-Webmobile&limit=10&abFeedUserTermsPreference=b');
        return response.data.deals;
    } catch (error) {
        console.error("Erro ao buscar promoções:", error)
        return [];
    }

}