//se guia por el id de home.html "btnEmpezarS"
$(document).on("click","#btnEmpezar",function(){
	//alert("Homa Mundo Javascript");
	let usuario = $("#txtusuario").val();
	let password = $("#txtpassword").val();
	$("#lbldatos").text("Usuario:" + usuario + "- Password: "+ password);
	$("#modalempezar").modal("show");
})