const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/chat", (req, res) => {
  const message = (req.body.message || "").toLowerCase();
  let response = "Desculpe, não entendi sua pergunta.";

  if (message.includes("login")) {
    response = "Você pode redefinir sua senha clicando em 'Esqueci minha senha'.";
  } else if (
    message.includes("horário") ||
    message.includes("horario") ||
    message.includes("funcionamento")
  ) {
    response = "Nosso atendimento funciona de segunda a sexta, das 9h às 18h, e aos sábados, das 9h às 13h.";
  } else if (
    message.includes("localização") ||
    message.includes("localizacao") ||
    message.includes("endereço") ||
    message.includes("endereco") ||
    message.includes("onde fica")
  ) {
    response = "Estamos na Rua das Flores, 120, Centro. Também atendemos online.";
  } else if (
    message.includes("promoção") ||
    message.includes("promocao") ||
    message.includes("promoções") ||
    message.includes("promocoes") ||
    message.includes("desconto") ||
    message.includes("oferta")
  ) {
    response = "Neste mês o plano Premium está com 20% de desconto. Quer que eu explique os planos Básico e Premium?";
  } else if (message.includes("plano")) {
    response = "Temos planos Básico e Premium. Qual você gostaria de saber mais?";
  } else if (message.includes("atendente")) {
    response = "Ok! Encaminhando você para um atendente.";
  }

  res.json({ reply: response });
});

app.use(express.static(__dirname));

app.listen(3000, () => console.log("Chatbot rodando na porta 3000"));
