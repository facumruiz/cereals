//METODO LOAD
window.addEventListener('load', () => {
    $('#loading').delay(400).fadeOut('slow', () => {
        console.log('ELIMINAR SPINNER')
    });
    //FADE IN PARA MOSTRAR EL CUERPO DE LA PAGINA
    $('#cuerpo').delay(1000).fadeIn("slow", () => {
        console.log('BODY CARGADO')
    });
})

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
      duration: 5148,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum+"%");
        //alert('finished');
      }
  
    });  
    
    
  
  });