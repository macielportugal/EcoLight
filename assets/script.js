$(document).ready(function() {

	// Lista das páginas do site
	var pages = ['home', 'quemsomos', 'comofunciona', 'tiposdepainel', 'faq', 'contato'];

	// Carrega home por padrão
	$('#conteudo').load('conteudo/' + pages[0] + '.html');

	// Função para carregar o conteúdo ao clicar
	function loadPage(page) {
		$('#' + page).click(function() {
			$('#conteudo').load('conteudo/' + page + '.html');
		});
	}
	
	// Pra cada página, utiliza a função clicada
	var pLen = pages.length;
	for (var i = 0; i < pLen; i++) {
		var page = pages[i];
		loadPage(page);
	}

	// Adiciona classe active ao clicar nos ítens do menu
	$('li.menu').click(function() {
	    $('li.menu').removeClass("active");
	    $(this).addClass("active");
	});

});