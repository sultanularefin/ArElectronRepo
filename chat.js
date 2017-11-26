var cookie_status;
jQuery(document).ready(function () {
    var sender_id = SENDER_ID;
    send_message(sender_id, '');
});


//if (inp.val().length > 0)
//if(jQuery('input[id=chat-input-text]').val().length<=0){
//if (jQuery('input[id=chat-input-text]').val().length <= 0) {
window.setInterval(function () {


    chat_initialization();
    scroolbar_down();
}, 20000);
//}

function chat_initialization() {
    //console.log('ss');

    var sender_id = SENDER_ID;

    send_message(sender_id, '');

}

function chat_init()
{
    
    var sender_id = SENDER_ID;
    
    var text = jQuery('input[id=chat-input-text]').val();
//    alert('x');
    
   

//     alert(text);
//    console.log('text');
//    alert(SENDER_ID);
//    return;
    send_message(sender_id, text);

}

function send_message(sender_id, text)
{
//    console.log('text');
//    console.log(text);
//    console.log(sender_id);
//    return;sajib
    
//    alert(text);
//    return;
    
//    alert(CHAT_URL);
//alert(sender_id);
//    alert(typeof(sneder_id));
//return;
    var s = "admin_present";
    jQuery.ajax({
        url: CHAT_URL,
        data:
                {
                    sender_id: sender_id,
                    message: text

                },
        type: 'POST',
        success: function (data) {
            data = jQuery.parseJSON(data);
//            alert(data.code);
//           alert(data.sender_id);
//           alert(data.admin_absent);
//return;
            var msg_container = '';
            //console.log('data.admin_absent');
            
//            console.log('data.admin_absent');
//            console.log(data.admin_absent); 
//          
            
            // console.log(text);
            // return;
            //return;

//console.log('data.code');
//             console.log(data.code);
//             console.log('data.message');
//             console.log(data.message);
             
//            return;


// if (data.code==1 ) then error , not normal operation.
            if (data.code == 1)
            {
                sender_id = sender_id.toString();
//                console.log("89");
//                console.log(sender_id);
                
                
//                alert(sender_id);
//                return;



                jQuery.each(data.message, function (index, value) {

                    // console.log(value.Message.message_date);
                    //return;
                    //console.log(value.Message.sender_id);
                    //return;
                    //console.log(sender_id);

                    //console.log(typeof (value.Message.sender_id));
                    //return;

//                    if (value.Message.sender_id === sender_id)
//                        console.log(12);
//
//                    else
//                        console.log(3434);
//                    return;
                    var temp = 0;
                    
//                    alert(sender_id);
//                    console.log(sender_id);
//                    console.log(value.Message.sender_id );
//                    return;
                    
//                    console.log('line 131');
//console.log(value.Message.sender_id);
//console.log(sender_id);

                    if (value.Message.sender_id === sender_id)
                    {


//console.log('xyz');
                    //return;
                        msg_container += '<div class="row msg_container base_sent">'
                                + '<div class="col-md-10 col-xs-10">'
                                + '<div class="messages msg_sent" id="message_sent">'
                                + '<p>' + value.Message.message + '</p>'
                                + '<time>' + value.Message.message_date + '</time>'
//                                + '<time datetime="2009-11-13T20:00">Timothy � 51 min</time>'
                                + '</div>'
                                + '</div>'
                                + '<div class="col-md-2 col-xs-2 avatar">'
                                + '<img src="./img_new/normal_sender.png" class=" img-responsive ">'
                                + '</div>'
                                + '</div>';

//console.log(value.Message.message);
//console.log(value.Message.message_date);
                    } else // else method is from admin  to sent.
                    {
//                        console.log('zyx');
                    //return
                        msg_container += '<div class="row msg_container base_receive">'
                                + '<div class="col-md-2 col-xs-2 avatar">'
                                + '<img src="./img_new/admin.png" class=" img-responsive "></div>'
                                + '<div class="col-xs-10 col-md-10">'
                                + '<div class="messages msg_receive">'
                                + '<p>' + value.Message.message + '</p>'
                                + '<time>' + value.Message.message_date + '</time>'
                                //+ '<time datetime="2009-11-13T20:00">Timothy � 51 min</time>'
                                + '</div>'
                                + '</div>'
                                + '</div>';


                    }
                });
//                console.log("admin absent");
                //console.log(data.admin_absent);

                //console.log(data.admin_absent == 0);
                //return;

                if (data.admin_absent == 0) {

//                    console.log(123);
//                    return;

                    jQuery('h3[id=admin_online_container]').show();
                    jQuery('h3[id=admin_offline_container]').hide();


                    jQuery('div[id=message_container]').html(msg_container);

                    // clear the input box only if text is sent by pressing enter.
                    // if text== null which means no text is sent then don't execute this.
                    if (!(text === "")) {
                        $('input[id=chat-input-text]').val("");
                        scroolbar_down();
                    }



                } else if (data.admin_absent == 1) {

                    jQuery('h3[id=admin_online_container]').hide();
                    jQuery('h3[id=admin_offline_container]').show();

                    //console.log('data.absent_message');
                    msg_container += '<div class="row msg_container base_receive">'
                            + '<div class="col-md-2 col-xs-2 avatar">'
                            + '<img src="./img_new/admin.png" class=" img-responsive "></div>'
                            + '<div class="col-xs-10 col-md-10">'
                            + '<div class="messages msg_receive">'
                            + '<p>' + data.absent_message + '</p>'
                            //+ '<time datetime="2009-11-13T20:00">Timothy � 51 min</time>'
                            + '</div>'
                            + '</div>'
                            + '</div>';

                    jQuery('div[id=message_container]').html(msg_container);
                    // clear the input box only if text is sent by pressing enter.
                    // if text== null which means no text is sent then don't execute this.

                    //if (text!==0)
                    //   console.log('223232');
                    // if(!(text===""))
                    //   console.log('234');

                    if (!(text === "")) {
                        $('input[id=chat-input-text]').val("");
                        scroolbar_down();
                    }


                }
            } else
            {
                alert('Error');
            }

        }
    });

}


function scroolbar_down() {
    var a = document.getElementById("message_container");
    a.scrollTop = a.scrollHeight;
}

$(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
//    console.log($this.hasClass('panel-collapsed'));
//    return;

    if (!$this.hasClass('panel-collapsed')) {
        // console.log('edsd');
        //$this.parents('.panel').find('.panel-body').slideUp();
        $this.parents('.panel').find('.panel-body').slideUp();

        //console.log(1);
        //$this.removeClass('panel-footer');
        $("#textbox_view").hide();
        $this.addClass('panel-collapsed');

        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');

        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
        $("#textbox_view").show();
        //$("#textbox_view").append("Some appended text.");
        //$("#textbox_view").ad
    }
});

$(document).on('click', '.icon_close', function (e) {
    //$(this).parent().parent().parent().parent().remove();
    $("#chat_window_1").remove();
});

//function setCookie(cname, cvalue, exdays) {
//    var d = new Date();
//    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//    var expires = "expires=" + d.toUTCString();
//    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//}


