function validateForm() {
    if (!$('#nameInput').val()) {
        createAlert('Insira um Nome!', 'danger', true, true, 'pageMessages');
        return false;
    }
    if (!$('#emailInput').val()) {
        createAlert('Insira um Email!', 'danger', true, true, 'pageMessages');
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test($('#emailInput').val())){
            createAlert('Email Inválido!', 'danger', true, true, 'pageMessages');
            return false;
        }
    }
    if (!$('#phoneInput').val()) {
        createAlert('Insira um Contacto Telefónico', 'danger', true, true, 'pageMessages');
        return false;
    }
    if (!$('#messageInput').val()) {
        createAlert('Insira uma Mensagem!', 'danger', true, true, 'pageMessages');
        return false;
    }
    if (!$('#acceptTerms').is(":checked"))
    {
        createAlert('Aceite os termos de privacidade', 'warning', true, true, 'pageMessages');
        return false;
    }

    successFunction()
}

function successFunction() {
    $('input').each(function(index, elem) {
        $(this).val('')
    })
    $('textarea').val('')
    $('#acceptTerms').prop('checked', false);
    createAlert('Email Enviado!', 'success', true, true, 'pageMessages')
}

$("#submitForm").on('click',function(e){
    e.preventDefault();
});

function createAlert(summary, severity, dismissible, autoDismiss, appendToId) {
    var iconMap = {
        info: "bi bi-info-circle mx-2",
        success: "bi bi-check-circle mx-2",
        warning: "bi bi-exclamation-diamond mx-2",
        danger: "bi bi-exclamation-triangle mx-2"
    };
  
    var alertClasses = ["alert", "animated", "fade", "show", "d-flex", "align-items-center"];
    alertClasses.push("alert-" + severity.toLowerCase());
  
    if (dismissible) {
        alertClasses.push("alert-dismissible");
    }
  
    var msgIcon = $("<i />", {
        "class": iconMap[severity]
    });
  
    var msg = $("<div />", {
        "class": alertClasses.join(" ")
    });

    if (summary) {
        var msgSummary = msg.append('<strong>'+ summary +'</strong>')
        msgSummary.prepend(msgIcon)
    }
    
    if (dismissible) {
        msg.append('<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');
    }
    
    $('#' + appendToId).prepend(msg);
    
    if(autoDismiss){
        setTimeout(function(){
            msg.addClass("flipOutX");
            setTimeout(function(){
                msg.fadeOut( "slow", function() {
                    msg.remove();
                });
            },1000);
        }, 5000);
    }
}
  