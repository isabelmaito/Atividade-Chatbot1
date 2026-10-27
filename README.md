# Atividade ChatBot I - Parte 2

Atividade da disciplina de **Processamento de Linguagem Natural (PLN)** da **Fatec Votorantim**, 6º semestre do curso de **Desenvolvimento de Software Multiplataforma**.

O projeto contém dois chatbots de suporte, cada um com uma abordagem diferente:

- **Chatbot baseado em regras** (`RulesBased/chatbot-node`)
- **Chatbot baseado em PLN** (`PLNBased/chatbot-pln`)

## O que foi feito

Partindo do repositório base da atividade, cada chatbot foi executado localmente, testado no navegador e ampliado com novas funcionalidades.

### Chatbot baseado em regras

Responde com base em palavras-chave encontradas na mensagem (`if/else` com `includes`). Além das respostas originais de `login`, `plano` e `atendente`, foram adicionadas novas regras:

- **Horário**: informa os horários de atendimento.
- **Localização**: informa o endereço e o atendimento online.
- **Promoções**: informa o desconto do plano Premium.

As novas regras reconhecem as palavras com e sem acento (ex.: `horário`/`horario`, `promoção`/`promocao`). A pasta também é servida pelo Express, permitindo abrir o chat direto em `http://localhost:3000`.

### Chatbot baseado em PLN

Usa um classificador Bayesiano (biblioteca [`natural`](https://www.npmjs.com/package/natural)) que é treinado na inicialização do servidor. A partir de frases de exemplo, o modelo identifica a **intenção** da mensagem e responde de acordo. Além das intenções originais (`saudacao`, `pedido_status`, `agradecimento`), foram adicionadas e treinadas três novas intenções:

- **`preco`**: dúvidas sobre valores dos planos.
- **`ajuda`**: pedidos genéricos de ajuda.
- **`cancelamento`**: pedidos de cancelamento de compra/plano.

Cada intenção recebeu várias frases de treino (com e sem acento), e o classificador é re-treinado sempre que o servidor sobe.

## Como executar

Os dois chatbots usam a porta `3000`, então execute **um de cada vez**.

### Chatbot baseado em regras

```bash
cd RulesBased/chatbot-node
npm install
npm start
```

Abra `http://localhost:3000` no navegador.

### Chatbot baseado em PLN

```bash
cd PLNBased/chatbot-pln
npm install
npm start
```

Abra `http://localhost:3000` no navegador.

## Exemplos de mensagens para testar

**Chatbot de regras:** `esqueci meu login`, `quero saber sobre o plano`, `falar com atendente`, `qual o horário de funcionamento?`, `onde fica a loja?`, `tem promoção esse mês?`

**Chatbot de PLN:** `bom dia`, `quero saber meu pedido`, `obrigado`, `qual o preço`, `preciso de ajuda`, `quero cancelar`

## Estrutura do projeto

```
.
├── RulesBased/
│   └── chatbot-node/     # chatbot baseado em regras
└── PLNBased/
    └── chatbot-pln/      # chatbot baseado em PLN
```
