     $(document).ready(function () {
    // Inicializar o carrossel com autoplay
    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });

    // Máscaras para os campos do formulário
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Validação do formulário
    $('#form').validate({
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
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        }
    });
});
