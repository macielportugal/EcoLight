$(document).ready(function() {

	// Carrega home por padrão
	$('#conteudo').load('conteudo/home.html');

	// Função para carregar o conteúdo
	function loadPage(page) {
		$('#' + page).click(function() {
			$('#conteudo').load('conteudo/' + page + '.html');
		});
	}

	// Array das páginas do site
	var pages = ['home','quemsomos','comofunciona', 'tiposdepainel', 'faq', 'contato'];
	
	// Loop de carregamento das páginas
	var length = pages.length;
	for (var i = 0; i < length; i++) {
		var page = pages[i];
		loadPage(page);
	}

	// Classe active ao clicar
	$('li.menu').click(function() {
	    $('li.menu').removeClass("active");
	    $(this).addClass("active");
	});

});