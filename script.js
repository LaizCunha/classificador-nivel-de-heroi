// Definindo variáveis globais

let nome = '';
let xp = 0;
const estrela = '\u2606';


// Coletando dados do herói

function onFormSubmit(evt) {
    evt.preventDefault();

    const form = evt.target;
    const formData = new FormData(form);

    nome = formData.get('nome');
    xp = parseInt(formData.get('xp'));


    console.log(nome);
    console.log(xp);

    // Calculando resultado

    if (xp < 1000) {
        document.querySelector('#classificacao').innerHTML = `O Herói de nome ${nome} está no nível de Ferro `;       
    } else if (xp >= 1000 && xp < 2000) {
        document.querySelector('#classificacao').innerHTML = `O Herói de nome ${nome} está no nível de Bronze `;  
    } else if (xp >= 2000 && xp < 5000) {
        document.querySelector('#classificacao').innerHTML = `O Herói de nome ${nome} está no nível de Prata`;        
    } else if (xp >= 5000 && xp < 7000) {
        document.querySelector('#classificacao').innerHTML = `O Herói de nome ${nome} está no nível de Ouro `;   
    } else if (xp >= 7000 && xp < 8000) {
        document.querySelector('#classificacao').innerHTML = `O Herói de nome ${nome} está no nível de Platina `;   
    } else if (xp >= 8000 && xp < 9000) {
        document.querySelector('#classificacao').innerHTML = `O Herói de nome ${nome} está no nível de Ascendente `;    
    } else if (xp >= 9000 && xp < 10000) {
        document.querySelector('#classificacao').innerHTML = `O Herói de nome ${nome} está no nível de Imortal `;
    } else if (xp >= 10000) {
        document.querySelector('#classificacao').innerHTML = `O Herói de nome ${nome} está no nível de Radiante `;   
    } else {
        document.querySelector('#classificacao').innerHTML = `Você precisa informa um nível de experiência para saber sua classificação! ` + estrela; 
    }

    document.querySelector('#dados').style.display = 'none';
    document.querySelector('#resultado').style.display = 'block';

}



    


