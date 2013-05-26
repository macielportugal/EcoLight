$(document).ready(function() {

	$('#conteudo').load('conteudo/home.html');

	$('#home').click(function() {
		$('#conteudo').load('conteudo/home.html');
	});

	$('#quemsomos').click(function() {
		$('#conteudo').load('conteudo/quemsomos.html');
	});

	$('#comofunciona').click(function() {
		$('#conteudo').load('conteudo/comofunciona.html');
	});

	$('#tiposdepainel').click(function() {
		$('#conteudo').load('conteudo/tiposdepainel.html');
	});

	$('#faq').click(function() {
		$('#conteudo').load('conteudo/faq.html');
	});

	$('#contato').click(function() {
		$('#conteudo').load('conteudo/contato.html');
	});

	$('li.menu').click(function() {
	    $('li.menu').removeClass("active");
	    $(this).addClass("active");
	});

});