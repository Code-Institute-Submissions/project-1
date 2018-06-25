$(document).ready(function() {
    // $('body').append('<div>Hello World!</div>');
    // $('.year').text( (new Date).getFullYear() );

    // Responsive Menu Button collapse the menu when selection made.
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });

    // show Extra Information when button in activities is clicked
    $( "#btn-composition" ).on( "click", function() {
        $("#composition").removeClass( "hidden" ).addClass( "show" );
        $("#composition").siblings().removeClass( "show" ).addClass( "hidden" );
      });
    $( "#btn-soundDesign" ).on( "click", function() {
        $("#soundDesign").removeClass( "hidden" ).addClass( "show" );
        $("#soundDesign").siblings().removeClass( "show" ).addClass( "hidden" );
    });
    $( "#btn-conducting" ).on( "click", function() {
        $("#conducting").removeClass( "hidden" ).addClass( "show" );
        $("#conducting").siblings().removeClass( "show" ).addClass( "hidden" );
    });
    $( "#btn-performance" ).on( "click", function() {
        $("#performance").removeClass( "hidden" ).addClass( "show" );
        $("#performance").siblings().removeClass( "show" ).addClass( "hidden" );
    });
    $( "#btn-musicTuition" ).on( "click", function() {
        $("#musicTuition").removeClass( "hidden" ).addClass( "show" );
        $("#musicTuition").siblings().removeClass( "show" ).addClass( "hidden" );
    });
    $( "#btn-research" ).on( "click", function() {
        $("#research").removeClass( "hidden" ).addClass( "show" );
        $("#research").siblings().removeClass( "show" ).addClass( "hidden" );
    });

    // Close extra information div
    $( ".btn-card" ).on("click", function() {
        // $(this).parent().fadeOut(1000);
        // $(this).parent().removeClass( "show" ).addClass( "hidden" );

        $(this).parent().animate({
            height: "0px",
            padding: "0px"
          }, 500,
            function() { $( this )
                .removeClass( "show" )
                .addClass( "hidden" );}
          );
      });


    // Form Validation and alert
    $("#btn-submit").on("click", function() {
        if (validateForm()) {
            var alertPrepare = "Form was submitted with the following content.\n";
            $('#contact :input').each(function() {
                alertPrepare += this.name + ": " + this.value + "\n";
            });
            alertText = alertPrepare.slice(0, -4);
            alert(alertText);
        }
        
    }); 
    
    function validateForm(){

        var nameReg = /^[A-Za-z ]+$/;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var inputVal = new Array(email, name, message);
    
            $('.error').hide();

            if(inputVal[0] == ""){
                $('#emailLabel').after('<span class="error"> Please enter your email</span>');
                return false;
            } 
            else if(!emailReg.test(email)){
                $('#emailLabel').after('<span class="error"> Please enter a valid email address</span>');
                return false;
            }

            if(inputVal[1] == ""){
                $('#nameLabel').after('<span class="error"> Please enter your name</span>');
                return false;
            } 
            else if(!nameReg.test(name)){
                $('#nameLabel').after('<span class="error"> Letters only</span>');
                return false;
            }
    
            if(inputVal[2] == ""){
                $('#messageLabel').after('<span class="error"> Please enter your message</span>');
                return false;
            }
            return true; 
    }   

    // SCROLLING
    // The notes below are for learning the functionality of this code
    // This method is well documented both on youtube and stackflow
    // Make array of all elements having scroll class.
    var scrollLink = $(".scroll");
    // console.log(scrollLink);
    scrollLink.click(function(e) {
        e.preventDefault(); //ie. do not jump to the link.
        //console.log($(this.hash));
        $("body,html").animate({
            scrollTop:$(this.hash).offset().top - 40 //Find this object's offset from the top,
        }, 1000); // and scroll to that place in 1000ms.
    });
    // Switching Active Link
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 40;
            // console.log(sectionOffset);
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        })
    })

      


});