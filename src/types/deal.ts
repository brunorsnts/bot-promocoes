export interface Deal {
    title: string;
    price: number;
    discountPercentage: number | null;
    freeShipping: string | null;
    store: string;
    sourceUrl: string;
}