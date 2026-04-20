import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from 'qrcode-terminal';
import { scheduledTask } from "../scheduler/scheduler";

export const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox'],
    }
})

client.on('qr', (qr) => {
    qrcode.generate(qr, {
        small: true
    });
})

client.on('ready', () => {
    console.log('Conectado com sucesso!')
    scheduledTask.start();
})