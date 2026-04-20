export function converteUrl(sourceUrl: string): string {
    const url = new URL(sourceUrl);
    if (url.hostname.includes('amazon')) {
        url.searchParams.set('tag', '705302-20');  
    }
    return url.toString();
}