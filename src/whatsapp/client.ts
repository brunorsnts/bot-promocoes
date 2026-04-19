import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from 'qrcode-terminal';

export const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox'],
    }
})

client.on('qr', (qr) => {
    qrcode.generate(qr);
})

client.on('ready', () => {
    console.log('Conectado com sucesso!');
})