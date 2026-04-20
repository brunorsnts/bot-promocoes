export function converteUrl(sourceUrl: string): string {
    const url = new URL(sourceUrl);
    if (url.hostname.includes('amazon')) {
        url.searchParams.set('tag', '705302-20');  
    } else if (url.hostname.includes('mercadolivre')) {
        url.searchParams.set('matt_tool', '41976190');
    }
    return url.toString();
}