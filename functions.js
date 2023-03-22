let user;                                       //Nome do jogador
let score = 0;                                  //Pontuação do jogador
let countErrors = 0;                            //Quantidade de erros - MAX 3
let indexNumber = 0;                            //Indice da pergunta
let shuffledQuestions = [];                     //Vetor de objetos com as questões do quiz embaralhadas
let ranking = localStorage.getItem('ranking');  //Ranking das partidas
const questions = [                             //Vetor de objetos com o cadastro das questões do quiz
    {
        id: 1,
        name: "Parafusos",
        correctOption: "metal",
        photo: "img/items/1.PNG"
    },
    {
        id: 2,
        name: "Garrafas",
        correctOption: "glass",
        photo: "img/items/2.PNG"
    },
    {
        id: 3,
        name: "Talheres",
        correctOption: "metal",
        photo: "img/items/3.PNG"
    },
    {
        id: 4,
        name: "Lata de Refrigerante",
        correctOption: "metal",
        photo: "img/items/4.PNG"
    },
    {
        id: 5,
        name: "Prato",
        correctOption: "glass",
        photo: "img/items/5.PNG"
    },
    {
        id: 6,
        name: "Taça",
        correctOption: "glass",
        photo: "img/items/6.PNG"
    },
    {
        id: 7,
        name: "Jarra",
        correctOption: "glass",
        photo: "img/items/7.PNG"
    },
    {
        id: 8,
        name: "Pote de Vidro",
        correctOption: "glass",
        photo: "img/items/8.PNG"
    },
    {
        id: 9,
        name: "Garrafa PET",
        correctOption: "plastic",
        photo: "img/items/9.PNG"
    },
    {
        id: 10,
        name: "Pote Plástico",
        correctOption: "plastic",
        photo: "img/items/10.PNG"
    },
    {
        id: 11,
        name: "Caixa de Pizza",
        correctOption: "paper",
        photo: "img/items/11.PNG"
    },
    {
        id: 12,
        name: "Galão de Água",
        correctOption: "plastic",
        photo: "img/items/12.PNG"
    },
    {
        id: 13,
        name: "Copo Descartável",
        correctOption: "plastic",
        photo: "img/items/13.PNG"
    },
    {
        id: 14,
        name: "Copo Descartável",
        correctOption: "plastic",
        photo: "img/items/14.PNG"
    },
    {
        id: 15,
        name: "Caixa de Papelão",
        correctOption: "paper",
        photo: "img/items/15.PNG"
    },
    {
        id: 16,
        name: "Livro",
        correctOption: "paper",
        photo: "img/items/16.PNG"
    },
    {
        id: 17,
        name: "Panela",
        correctOption: "metal",
        photo: "img/items/17.PNG"
    },
    {
        id: 18,
        name: "Embalagem de Enlatado",
        correctOption: "metal",
        photo: "img/items/18.PNG"
    },
    {
        id: 19,
        name: "Casca de Banana",
        correctOption: "organic",
        photo: "img/items/19.PNG"
    },
    {
        id: 20,
        name: "Revistas",
        correctOption: "paper",
        photo: "img/items/20.PNG"
    },
    {
        id: 21,
        name: "Restos de Maçã",
        correctOption: "organic",
        photo: "img/items/21.PNG"
    },
    {
        id: 22,
        name: "Jornal",
        correctOption: "paper",
        photo: "img/items/22.PNG"
    },
    {
        id: 23,
        name: "Restos de Peixe",
        correctOption: "organic",
        photo: "img/items/23.PNG"
    },
    {
        id: 24,
        name: "Espiga de Milho",
        correctOption: "organic",
        photo: "img/items/24.PNG"
    },
    {
        id: 25,
        name: "Melância",
        correctOption: "organic",
        photo: "img/items/25.PNG"
    },
    {
        id: 26,
        name: "Pilhas",
        correctOption: "special",
        photo: "img/items/26.PNG"
    },
    {
        id: 27,
        name: "Baterias",
        correctOption: "special",
        photo: "img/items/27.PNG"
    },
    {
        id: 28,
        name: "Termômetro de Mercúrio",
        correctOption: "special",
        photo: "img/items/28.JPG"
    },
    {
        id: 29,
        name: "Celular",
        correctOption: "special",
        photo: "img/items/29.PNG"
    },
    {
        id: 30,
        name: "Aparelhos Eletrônicos",
        correctOption: "special",
        photo: "img/items/30.JPG"
    }
];

//Função responsável por iniciar o Quiz
window.onload = function(){
    //Pegando informações do usuário
    while(user == null || user == "")
        user = prompt("Bem vindo(a) ao Aprenda a Reciclar! Qual seu nome?", "Digite seu nome");
    alert("Seja bem vindo(a) " + user + "!");
        
    randomQuestions();          //Embaralhando as perguntas
    showQuestion(0);            //Chamando primeira questão
}

//Função responsável por embaralhar as questões
function randomQuestions(){ 
    while (shuffledQuestions.length <= 29) {
        const random = questions[Math.floor(Math.random() * questions.length)];
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random);
        }
    }
}

//Função responsável por exibir a questão de acordo com o paramêtro enviado "i". Também é responsável por exibir o placar e o número da questão atualizados
function showQuestion(i){
    //Setando informações da pergunta e da pontuação no front
    const question = shuffledQuestions[i];
    document.getElementById("number").innerHTML = indexNumber + 1;
    document.getElementById("score").innerHTML = score;
    document.getElementById("item-name").innerHTML = question.name;
    document.getElementById("item-img").setAttribute("alt", question.name);
    document.getElementById("item-img").setAttribute("src", question.photo);
    document.getElementById("option-one-label").innerHTML = "Metal";
    document.getElementById("option-two-label").innerHTML = "Papel";
    document.getElementById("option-three-label").innerHTML = "Vidro";
    document.getElementById("option-four-label").innerHTML = "Plástico";
    document.getElementById("option-five-label").innerHTML = "Orgânico";
    document.getElementById("option-six-label").innerHTML = "Não Reciclável";
}

//Função responsável por validar toda a pergunta e atualizar o placar
function validateQuestion(){
    //Setando informações cadastrais da questão atual
    const question = shuffledQuestions[indexNumber]; 
    const answer = question.correctOption; 
  
    //Verificando se o usuário selecionou alguma opção. O return eh para forçar que a função seja encerrada
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption){
      alert("Selecione uma alternativa!");
      return;
    }
  
    //Setando resposta do usuário
    const userAnswer = selectedOption.value;
    const correctOption = document.querySelector(`input[value="${answer}"]`);
    const correctOptionId = correctOption.labels[0].id;
  
    if (userAnswer === answer) {            //Caso o usuário acerte, atualiza o placar e indica a resposta correta em verde
        score++;
        document.getElementById(correctOptionId).style.backgroundColor = "green";
    }
    else {                                  //Caso o usuário erre, soma +1 no número de respostas erradas e indica a resposta correta em verde e a errada em vermelho
        countErrors++;
        const wrongLabelId = selectedOption.labels[0].id;
        document.getElementById(wrongLabelId).style.backgroundColor = "red";
        document.getElementById(correctOptionId).style.backgroundColor = "green";
    }

    indexNumber++;
}

//Função responsável por chamar a próxima pergunta
function nextQuestion(){
    validateQuestion();                             //Valida pergunta atual
    setTimeout(() => {
        if (indexNumber <= 29 && countErrors < 3)   //Caso ainda existam perguntas para ser respondidas e o usuário não tenha errado 3 questões, continua
            showQuestion(indexNumber);
        else 
            endGame();                              //Senão, encerra o jogo
        cleanOptions();                             //Limpa a opção selecionada na alternativa anterior
    }, 1000);
}

//Função responsável por limpar a opção selecionada na alternativa anterior
function cleanOptions(){
    const options = document.querySelectorAll('input[name="option"]');
    options.forEach(option => {
      document.querySelector(`label[for="${option.id}"]`).style.backgroundColor = '';
    });
}

//Função resposável por encerrar o jogo
function endGame(){
    let result = {
        player: user, 
        score: score
    }; 
    saveRanking(result);                        //Salvando ranking
    alert("O jogo acabou " + user + ". \nSua pontuação foi de " + score + " pontos!");
    
    window.location.href = "https://pczfelipe.github.io/projeto-sustentabilidade/";   //Reiniciando jogo
}

//Função responsável por salvar o resultado do jogador no ranking
function saveRanking(result){
    var aux = [];
    aux = JSON.parse(localStorage.getItem('ranking')) || [];
    aux.push(result);
    localStorage.setItem('ranking', JSON.stringify(aux));
    ranking = localStorage.getItem('ranking');
}

//Função responsável por exibir o ranking
function showRanking(){
    var aux = [];
    aux = JSON.parse(localStorage.getItem('ranking')) || [];
    var sortedJSON = aux.sort(function(a, b) {
        return b.score - a.score;
    });

    var jsonString = JSON.stringify(sortedJSON);
    alert(jsonString.replace(/},\s*{/g, "},\n{"));
}