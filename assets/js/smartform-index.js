$(function () {





    /* @custom validation method (smartCaptcha) 

    ------------------------------------------------------------------ */

    $.validator.methods.smartCaptcha = function (value, element, param) {

        return value == param;

    };



    $(".errorsContainer").hide();

    $("#smart-form").validate({



        /* @validation states + elements 

        ------------------------------------------- */



        errorClass: "state-error",

        validClass: "state-success",

        errorElement: "li",



        /* @validation rules 

        ------------------------------------------ */

        groups: {
            formValidation: "name adresse email mobile comment"
        },

        rules: {

            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            mobile: {
                required: true,
                number: true,
            },
            adresse: {
                required: true
            },
            comment: {
                required: true,
            },
            generalTerms: {
                required: true
            }
        },



        /* @validation error messages 

        ---------------------------------------------- */



        messages: {
            name: {
                required: 'Bitte alle Felder ausfüllen',
            },
            adresse: {
                required: 'Bitte alle Felder ausfüllen'
            },

            email: {
                required: 'Bitte alle roten Felder ausfüllen',
                email: 'Bitte gültige E-Mail Adresse eingeben',
            },
            mobile: {
                required: 'Bitte alle roten Felder ausfüllen',
                number: 'Bitte nur Zahlen eingeben',
            },
            comment: {
                required: 'Bitte alle Felder ausfüllen',
            },
            /*
                        name: {
            
                            required: 'Bitte Namen eingeben',
            
                            minlength: 'Bitte geben Sie mindestens 5 Zeichen im Namen ein'
            
                        },
            
                        adresse: {
            
                            required: 'Bitte Adresse angeben'
            
                        },
            
                        email: {
            
                            required: 'Bitte E-Mail Adresse eingeben',
            
                            email: 'Bitte gültige E-Mail Adresse eingeben'
            
                        },
            
                        comment: {
            
                            required: 'Bitte Nachricht eingeben', minlength: "Bitte mehr als 10 Zeichen eingeben"
                        },
            
            
            
                        mobile: {
            
                            required: 'Bitte Telefonnummer eingeben',
            
                            number: 'Bitte nur Zahlen eingeben',
            
                            minlength: 'Bitte geben Sie mindestens 5 Zahlen bei der Telefonnummer an'
            
                        },
            */
            generalTerms: {

                required: 'Bitte Datenschutzerklärung zustimmen'

            }





        },



        /* @validation highlighting + error placement  

        ---------------------------------------------------- */



        invalidHandler: function (form, validator) {

            $(".errorsContainer").show();

        },

        highlight: function (element, errorClass, validClass) {

            $(element).closest('.smart-forms').addClass(errorClass);

            if (this.numberOfInvalids() > 0) {

                $(".errorsContainer").show();

            }

        },

        unhighlight: function (element, errorClass, validClass) {

            $(element).closest('.smart-forms').removeClass(errorClass).addClass(validClass);

            if (this.numberOfInvalids() == 0) {

                $(".errorsContainer").hide();

            }

        },

        errorPlacement: function (error, element) {

            error.appendTo("#smartErrors");

        }

    });






});



