import 'dotenv/config';
import { client } from './whatsapp/client';
import { scheduledTask } from './scheduler/scheduler';

client.initialize();
scheduledTask.start();