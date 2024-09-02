// lista de filmes

// Idade 18 anos:
// comédia >>> O lobo de Wall Streat
// romance >>> 50 tons de cinza
// ação >>> Carter

// Idade 16 anos:
// comédia >>> Superbad
// romance >>> As Vantagens de Ser Invisível
// ação >>> Tropa de Elite

// Idade 14 anos:
// comédia >>> American Pie
// romance >>> As péssimas decisões de Layla
// ação >>> Em Ritimo de Fuga

// Idade 12 anos:
// comédia >>> Free Guy
// romance >>> A Culpa é das Estrelas
// ação >>> Velozes e Furiosos (2001)

// Idade livre
// comédia >>> Doze é Demais 
// romance >>> Para Todos os Caras que Já Amei
// ação >>> Karatê Kid

let filme;
let campoIdade; 
let campoAcao;
let campoComedia;
let campoRomance;

function setup() {
  createCanvas(600, 400);
  createElement('h2', 'Recomendador de Filme')
  createSpan('Idade:')
  campoIdade = createInput();
  createElement('h3', 'Selecione somente um gênero de fime');
  campoAcao = createCheckbox('Ação')
  campoComedia = createCheckbox('Comédia')
  campoRomance = createCheckbox('Romance')
}

function draw() {
  background(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill('white')
  
  let idade = campoIdade.value();
  let acao = campoAcao.checked();
  let romance = campoRomance.checked();
  let comedia = campoComedia.checked();
  
  
  filme = geraRecomendacao(idade, acao, romance, comedia);
  
  text(filme, width/2, height/2);

}

function geraRecomendacao(idade, acao, romance, comedia){  
 if(idade >=18){
   if(acao){
    return 'Carter';
  }else if(comedia){
    return 'O lobo de Wall Streat';
  }else if (romance){
    return '50 tons de cinza';
  }else{
    return 'Karatê Kid';
  } 
  
  }else if(idade >= 16){
    if(acao){
    return 'Tropa de Elite';
  }else if(comedia){
    return 'Superbad';
  }else if (romance){
    return 'As Vantagens de Ser Invisível';
  }else{
    return 'Karatê Kid';
  }     

  }else if(idade >= 14){
  if(acao){
    return 'Em Ritimo de Fuga';
  }else if(comedia){
    return 'American Pie';
  }else if (romance){
    return 'As péssimas decisões de Layla';
  }else{
    return 'Karatê Kid';
  }
    
  }else if(idade >= 12){
   if(acao){
    return 'Velozes e Furiosos (2001)';
  }else if(comedia){
    return 'Free Guy';
  }else if (romance){
    return 'A Culpa é das Estrelas';
  }else{
    return 'Karatê Kid';
  }        
           
  }else{
    if(acao){
    return 'Karatê Kid';
  }else if(comedia){
    return 'Doze é Demais';
  }else if (romance){
    return 'Para Todos os Caras que Já Amei';
  }else{
    return 'Karatê Kid';
  }     
  } 


}
