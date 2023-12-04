// Função para fazer a solicitação à API
async function getAgenda() {
  try {
    // Seletor para a tabela
    const tabelaAgendamentos = document.querySelector('.data-table');

    if (!tabelaAgendamentos) {
      console.error('Elemento .data-table não encontrado.');
      return;
    }

    const response = await fetch('http://localhost:8080/agenda');
    const data = await response.json();

    // Seletor para o corpo da tabela
    const tbody = tabelaAgendamentos.querySelector('tbody');

    // Se tbody não for encontrado, cria um novo elemento tbody
    if (!tbody) {
      console.warn('Elemento tbody não encontrado. Criando um novo elemento tbody.');
      const novoTbody = document.createElement('tbody');
      tabelaAgendamentos.appendChild(novoTbody);
    }

    // Atualiza o tbody para garantir que agora existe
    const tbodyAtualizado = tabelaAgendamentos.querySelector('tbody');

    // Limpar o corpo da tabela antes de adicionar novos dados
    tbodyAtualizado.innerHTML = '';

    // Adicionar os dados à tabela
    data.forEach(item => {
      const tr = document.createElement('tr');

      const pacienteTd = document.createElement('td');
      pacienteTd.textContent = item.nomepac;

      const procedimentoTd = document.createElement('td');
      procedimentoTd.textContent = item.descProced;

      const dataehoraTd = document.createElement('td');
      dataehoraTd.textContent = item.dataConsulta;

      tr.appendChild(pacienteTd);
      tr.appendChild(procedimentoTd);
      tr.appendChild(dataehoraTd);

      tbodyAtualizado.appendChild(tr);
    });
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
  }
}

getAgenda();