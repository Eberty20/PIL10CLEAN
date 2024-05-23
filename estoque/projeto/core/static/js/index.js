function moveRelogio() {
	let momentoAtual = new Date();
  
	let hora = momentoAtual.getHours();
	let minuto = momentoAtual.getMinutes();
	let segundo = momentoAtual.getSeconds();
  
	let strHora = new String(hora);
	let strMinuto = new String(minuto);
	let strSegundo = new String(segundo);
  
	if (strSegundo.length == 1) segundo = '0' + segundo;
	if (strMinuto.length == 1) minuto = '0' + minuto;
	if (strHora.length == 1) hora = '0' + hora;
  
	// Atualizar hora
	document.getElementById('hora').textContent = hora + ':' + minuto + ':' + segundo;
  
	setTimeout(moveRelogio, 1000);
  }
  
  function pegarData() {
	let dataHora = new Date();
	let diaDaSemana = dataHora.getDay();
	let dia = dataHora.getDate();
	let mes = dataHora.getMonth() + 1;
	let ano = dataHora.getFullYear();
  
	let strDia = new String(dia);
	let strMes = new String(mes);
  
	if (strDia.length == 1) dia = '0' + dia;
	if (strMes.length == 1) mes = '0' + mes;
  
	switch (diaDaSemana) {
		case 0:
			diaDaSemana = 'DOM';
			break;
		case 1:
			diaDaSemana = 'SEG';
			break;
		case 2:
			diaDaSemana = 'TER';
			break;
		case 3:
			diaDaSemana = 'QUA';
			break;
		case 4:
			diaDaSemana = 'QUI';
			break;
		case 5:
			diaDaSemana = 'SEX';
			break;
		case 6:
			diaDaSemana = 'SÁB';
			break;
	} // fim switch case
  
	let dataAtual = dia + '/' + mes + '/' + ano;
  
	// Atualizar data
	document.getElementById('data').textContent =  dataAtual;
  }
  
  // Evocar a função pegarData
  pegarData();
  // Evocar a função moveRelogio
  moveRelogio();

  document.addEventListener('DOMContentLoaded', function () {
    // Selecione todas as imagens dentro de elementos com a classe 'imagens'
    const imagens = document.querySelectorAll('.imagens img');

    // Itere sobre cada imagem selecionada
    imagens.forEach(imagem => {
        // Obtenha o caminho original da imagem e seu ID
        const originalSrc = imagem.getAttribute('src');
        const id = imagem.getAttribute('id');
        // Construa o caminho da imagem de hover adicionando 'c' ao final do ID e prefixo 'static/assets/'
        const hoverSrc = `static/assets/${id}c.svg`;

        // Adicione um ouvinte de evento para quando o mouse passar sobre a imagem
        imagem.addEventListener('mouseover', () => {
            // Altere o atributo 'src' para o caminho da imagem de hover
            imagem.setAttribute('src', hoverSrc);
        });

        // Adicione um ouvinte de evento para quando o mouse sair da imagem
        imagem.addEventListener('mouseout', () => {
            // Restaure o atributo 'src' para o caminho original da imagem
            imagem.setAttribute('src', originalSrc);
        });
    });
});

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const taskDate = document.getElementById('task-date').value;

    if (taskInput === '' || taskDate === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = `${taskDate}: ${taskInput}`;
    taskList.appendChild(taskItem);
}
