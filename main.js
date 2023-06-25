$(document).ready(function() {
    $('#slide-img').slick({
        autoplay: true
    });
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculo: {
                required: false
            },
            msg: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, informe seu nome',
            email: 'Por favor, informe seu email'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    $('.lista-veiculos button').click(function (){
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text();
        
        $('#veiculo').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})