$(document).on("ready", function(){
    
    function iniciar(){
        $("#formulario").submit(enviarMensaje);
    }
    function enviarMensaje(){
        alert("Mensaje enviado " + $("#nombre").val() );
    }
    function recibirMensaje(){
        //
    }
    
    iniciar();
})