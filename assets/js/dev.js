var full_url = window.location.href.split("#")[0];
$('#popupform').submit(function(e) {
    e.preventDefault();
    var code = $('#popupform').find('#popupcountrycode').val();
    $(this).find('.logoeminentloader').show();
    var name = $('#popupform input#name').val();
    var email = $('#popupform input#email').val();
    var phone = $('#popupform input#phoneNum2').val();
    var countrycode = code;
    var thepackage = $('#popupform input#popuppackage').val();
    var domain_url = 'https://www.logoeminent.com/';
    $.ajax({
        type: "POST",
        url: domain_url + 'crm/include/signup.php',
        data: {
            name: name,
            email: email,
            phone: phone,
            countrycode: countrycode,
            thepackage: thepackage,
            full_url: full_url
        },
        success: function(data) {
            $('#popupform').find('.logoeminentloader').hide();
            if (data == 'error') {
                $('.packageformsubmit').after('<div class="alreadyerror"> Something Went Wron Please Try Again.</div>');
            } else if (data == 'exists') {
                $('.packageformsubmit').after('<div class="alreadyerror"> You are already a member. <a href="https://www.logoeminent.com/crm">Click Here</a> to sign in.</div>');
            } else {
                window.location.replace(data);
            }
            // if (data == 'success') {
            //     window.location.replace(domain_url + "crm/dashboard/payment.php?package=" + thepackage + "&firstsignup=1");
            // } else if (data == 'exists') {
            //     $('#popupformsubmit').after('<div class="alreadyerror"> You are already a member. <a href="https://www.logoeminent.com/crm">Click Here</a> to sign in.</div>');
            // } else {}
        }
    });
});