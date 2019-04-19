// Olá Queridas.
// O desafio hoje é animar um carousel de slides utilizando o JQuery.
// Já temos o conhecimento básico de seletores e algumas funções para fazê-lo, mas será necessário pesquisar na documentação outras funções.

// Dicas:
// addCLass(); eq(); next()

// Esses são alguns... boa sorte!!!
// Tem muiiiitos tutoriais na internet, NÃO COPIEM sem tentar, pesquisem, leiam a documentação e tentem fazer funcionar primeiro.

// ATENçÃO!!! O html está puro, não vai renderizar nada na tela enquanto não ativar pelo jQUery.

//ideias de funções para usar
// fadeOut ?
// fadeIn ?
// setInterval ?

//exemplo setInterval
//setInterval(function(){ alert("Hello"); }, 3000);

//aula de revisão - resolução do exercicio para casa
$(function(){
    $('#carousel img:eq(0)').addClass("ativo").show();    //pegue a primeira imagem dentro da tag img (index 0) da id carousel, coloque a classe ativo e mostre
    let legenda = $('.ativo').attr('alt'); //quero o alt da classe ativo. Quando referencia a classe, tem que ter o ponto (.ativo)
    //.append() e .prepend()
    $('#carousel').prepend("<p>"+legenda+"</p>");//
    //Primeiro monta o bloco acima, depois de um tempo de 2500 milisegundos, executa o código da função slider
    setInterval(slider,2500);

    //function slider
    //se a classe ativo existe, pego ela e coloco no próximo
    function slider(){
        if($('.ativo').next().length){  //o elemento do lado do ativo existe? (tem tamanho?)
            //tira a classe ativo da primeira imagem, faz fade out, faz fadein na próxima e passa a classe ativo da anterior pra próxima
            $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo'); //
        }else{ //quando não tiver mais imagem a seguir
            //remove atributo ativo e volta pra foto 1
            $('.ativo').fadeOut().removeClass('ativo');
            $('#carousel img:eq(0)').fadeIn().addClass('ativo');
        }
        let legenda = $('.ativo').attr('alt');
        $('#carousel p').hide().html(legenda).delay(500).fadeIn();//pega o elemento p, esconde, e via html adiciona a legenda da imagem ativa
    }
});

//com click
// $(function () {
//     $('#carousel img:eq(0)').addClass("ativo").show();    //pegue a primeira imagem dentro da tag img (index 0) da id carousel, coloque a classe ativo e mostre
//     let legenda = $('.ativo').attr('alt'); //quero o alt da classe ativo. Quando referencia a classe, tem que ter o ponto (.ativo)
//     //.append() e .prepend()
//     $('#carousel').prepend("<p>" + legenda + "</p>");//
//     //Primeiro monta o bloco acima, depois de um tempo x, executa o código abaixo

//     $('#carousel').click(function () {
//         if ($('.ativo').next().length) {  //o elemento do lado do ativo existe? (tem tamanho?)
//             //tira a classe ativo da primeira imagem, faz fade out, faz fadein na próxima e passa a classe ativo da anterior pra próxima
//             $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo'); //
//         } else { //quando não tiver mais imagem a seguir
//             //remove atributo ativo e volta pra foto 1
//             $('.ativo').fadeOut().removeClass('ativo');
//             $('#carousel img:eq(0)').fadeIn().addClass('ativo');
//         }
//         let legenda = $('.ativo').attr('alt');
//         $('#carousel p').hide().html(legenda).delay(500).fadeIn();
//     });
// });
