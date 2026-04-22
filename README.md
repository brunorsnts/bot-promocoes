# Bot Promoções

Bot para WhatsApp que busca automaticamente as melhores promoções do [Pelando.com.br](https://www.pelando.com.br) e envia para um grupo a cada hora, com links de afiliado e mensagens formatadas por IA.

## Funcionalidades

- Busca as promoções em destaque da Amazon e do Mercado Livre via API do Pelando
- Envia as top 5 promoções para um grupo do WhatsApp automaticamente a cada 1 hora
- Injeta links de afiliado nos produtos (Amazon e Mercado Livre)
- Formata as mensagens com emojis usando Gemini AI (com fallback para texto simples)
- Autenticação via QR Code no terminal com sessão persistida localmente

## Stack

| Tecnologia | Função |
|---|---|
| Node.js + TypeScript | Runtime e linguagem principal |
| axios | Requisições HTTP para a API do Pelando |
| whatsapp-web.js | Conexão com WhatsApp via QR Code |
| node-cron | Agendamento de tarefas (executa a cada 1 hora) |
| Gemini AI (`@google/genai`) | Formatação das mensagens com IA |
| dotenv | Gerenciamento de variáveis de ambiente |

## Estrutura do Projeto

```
src/
├── index.ts                  ← entrada da aplicação
├── types/
│   └── deal.ts               ← interface TypeScript das promoções
├── scraper/
│   └── pelando.ts            ← consome a API do Pelando e retorna promoções
├── whatsapp/
│   └── client.ts             ← configura e inicializa o cliente WhatsApp
├── scheduler/
│   └── scheduler.ts          ← agendamento de envio (a cada 1 hora)
├── url-converter/
│   └── converter.ts          ← injeta tags de afiliado nos links
└── util/
    └── format-message.ts     ← formata mensagens com Gemini AI
```

## Pré-requisitos

- Node.js 18+
- Conta no WhatsApp
- Chave de API do [Google Gemini](https://aistudio.google.com/)

## Como rodar

**1. Clone o repositório**
```bash
git clone https://github.com/brunorsnts/bot-promocoes.git
cd bot-promocoes
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

Preencha o `.env` com os seus dados:

```env
WHATSAPP_GROUP_ID=   # ID do grupo do WhatsApp (ex: 5511999999999-0000000000@g.us)
GEMINI_API_KEY=      # Chave da API do Google Gemini
```

> **Como obter o ID do grupo:** envie uma mensagem para o grupo com o bot conectado e observe o ID logado no console.

**4. Inicie o bot**
```bash
npm run dev
```

Na primeira execução, um QR Code será exibido no terminal. Escaneie com o WhatsApp para autenticar. A sessão é salva localmente e não exige novo QR Code nas próximas execuções.

## Como funciona

```
┌─────────────┐     a cada 1h      ┌──────────────────┐
│  node-cron  │ ──────────────────▶ │  API do Pelando  │
└─────────────┘                    └──────────┬───────┘
                                              │ top 5 promoções
                                   ┌──────────▼───────┐
                                   │  url-converter   │ ← injeta afiliado
                                   └──────────┬───────┘
                                              │
                                   ┌──────────▼───────┐
                                   │   Gemini AI      │ ← formata mensagem
                                   └──────────┬───────┘
                                              │
                                   ┌──────────▼───────┐
                                   │  WhatsApp grupo  │
                                   └──────────────────┘
```

## Autor

**Bruno Santos**  
[GitHub](https://github.com/brunorsnts) · [LinkedIn](https://www.linkedin.com/in/bruno-santos-517368206)
