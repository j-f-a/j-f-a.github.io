        <!-- Info Popup -->

            $(function() {
            	
                $('#activator').click(function(){
                		$("#modal_box").show();
                    	$('#modal_box').animate({'top':'60px'},500,function(){
                        $('#overlay').fadeIn('slow');
                         
                    });
                });
                $('#modal_boxclose').click(function(){
                    $('#modal_box').animate({'top':'-300px'},500,function(){
                        $('#overlay').fadeOut('fast');
                        $("#modal_box").hide();
                    });
                });
				$('#activator2').click(function(){
                    $('#modal_box').animate({'top':'-300px'},500,function(){
                    $('#overlay').fadeOut('fast');
                    $("#modal_box").hide();
                    });
                });
            });

        <!-- Download Popup -->

            $(function() {
                $('#activator2').click(function(){
               			$("#modal_box2").show();
                    	$('#modal_box2').animate({'top':'60px'},500,function(){
                        $('#overlay2').fadeIn('slow');
                    });
                });
                $('#modal_boxclose2').click(function(){
                    $('#modal_box2').animate({'top':'-300px'},500,function(){
                        $('#overlay2').fadeOut('fast');
                        $("#modal_box2").hide();
                    });
                });
				$('#activator').click(function(){
                    $('#modal_box2').animate({'top':'-300px'},500,function(){
                    $('#overlay2').fadeOut('fast');
                    $("#modal_box2").hide();
                    });
                });
            });

        <!-- Tooltip -->

/* JavaScript code */       