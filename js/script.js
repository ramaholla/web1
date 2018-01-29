// event saat link diklik
$('.dropdown-menu').on('click', function() {
	
	//ambil href
	var href=$(this).attr('href');

	//tangkap elemen
	var elemenHref=$(href);

	//pindah scroll
	$('body').animate({
		scrollTop: elemenHref.offset().top-50
	}, 1000, 'swing')


});

// event saat link diklik
$('.nav-link').on('click', function() {
	
	//ambil href
	var href=$(this).attr('href');

	//tangkap elemen
	var elemenHref=$(href);

	//pindah scroll
	$('body').animate({
		scrollTop: elemenHref.offset().top-50
	}, 1000, 'swing')


});