const Url = 'http://localhost:8080/procedimentos';

// Função para fazer a solicitação à API
async function getProcedimentos() {
  
  const response = await fetch(Url);
  console.log(response);

  const data = await response.json();

  console.log(data);
  }

getProcedimentos();