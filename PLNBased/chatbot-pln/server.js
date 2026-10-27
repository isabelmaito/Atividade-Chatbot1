const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const natural = require("natural");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Classificador Bayesiano
const classifier = new natural.BayesClassifier();

// Treinamento básico
classifier.addDocument("oi", "saudacao");
classifier.addDocument("olá", "saudacao");
classifier.addDocument("bom dia", "saudacao");

classifier.addDocument("quero saber meu pedido", "pedido_status");
classifier.addDocument("meu pedido chegou", "pedido_status");
classifier.addDocument("acompanhar pedido", "pedido_status");

classifier.addDocument("obrigado", "agradecimento");
classifier.addDocument("valeu", "agradecimento");

classifier.addDocument("qual o preço", "preco");
classifier.addDocument("qual o preco", "preco");
classifier.addDocument("quanto custa", "preco");
classifier.addDocument("qual o valor", "preco");
classifier.addDocument("preço do plano", "preco");
classifier.addDocument("preco do plano", "preco");
classifier.addDocument("quanto custa o premium", "preco");
classifier.addDocument("valor do plano", "preco");

classifier.addDocument("preciso de ajuda", "ajuda");
classifier.addDocument("pode me ajudar", "ajuda");
classifier.addDocument("não consigo usar", "ajuda");
classifier.addDocument("nao consigo usar", "ajuda");
classifier.addDocument("me ajuda", "ajuda");
classifier.addDocument("socorro", "ajuda");
classifier.addDocument("não sei o que fazer", "ajuda");
classifier.addDocument("nao sei o que fazer", "ajuda");

classifier.addDocument("quero cancelar", "cancelamento");
classifier.addDocument("cancelar pedido", "cancelamento");
classifier.addDocument("como cancelo", "cancelamento");
classifier.addDocument("cancelamento da compra", "cancelamento");
classifier.addDocument("desistir do plano", "cancelamento");
classifier.addDocument("quero o cancelamento", "cancelamento");
classifier.addDocument("cancelar minha compra", "cancelamento");

classifier.train();

app.post("/chat", (req, res) => {
  const message = (req.body.message || "").toLowerCase();
  const intent = classifier.classify(message);
  let reply = "Desculpe, não entendi.";

  switch (intent) {
    case "saudacao":
      reply = "Olá! Em que posso te ajudar hoje?";
      break;
    case "pedido_status":
      reply = "Para consultar seu pedido, informe o número ou e-mail da compra.";
      break;
    case "agradecimento":
      reply = "De nada! Estou sempre à disposição";
      break;
    case "preco":
      reply = "O plano Básico custa R$ 29,90 por mês e o Premium R$ 59,90. Posso detalhar algum deles?";
      break;
    case "ajuda":
      reply = "Claro! Me diga o que você precisa: login, planos, pedidos ou falar com um atendente.";
      break;
    case "cancelamento":
      reply = "Para cancelar, informe o número do pedido ou o e-mail da compra. Posso te encaminhar a um atendente se preferir.";
      break;
  }

  res.json({ reply, intent });
});

app.use(express.static(__dirname));

app.listen(3000, () => console.log("Chatbot PLN rodando na porta 3000"));
