
function changeImage(element, newSrc) {
    element.src = "assets/" + newSrc;
}


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
  document.getElementById('data').textContent = diaDaSemana + ', ' + dataAtual;
}

// Evocar a função pegarData
pegarData();
// Evocar a função moveRelogio
moveRelogio();