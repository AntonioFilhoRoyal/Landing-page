$(function(){
    $('.div-cores').show();
    $('.div-combinacao').hide();
    $('.div-rgb').hide();

    $('.btn-cors').click(function(){
        $('.div-cores').show();
        $('.div-combinacao').hide();
        $('.div-rgb').hide();
    })

    $('.btn-g').click(function(){
        $('.div-cores').hide();
        $('.div-combinacao').show();
        $('.div-rgb').hide();
    })

    $('.btn-c').click(function(){
        $('.div-cores').hide();
        $('.div-combinacao').hide();
        $('.div-rgb').show();
    })
});