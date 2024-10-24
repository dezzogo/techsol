document.querySelector('#register-form').addEventListener('submit', function(){
    
    var validEmail = function () {
        var regex = /\S+@\S+\.\S+/;
        var email = document.querySelector('.name-email');
        if(!email) return;
        if(!regex.test(email.value)) return;
        return email.value;
    }

    var validPhone = function () {
        var g_countryCode = '55';
        var g_getPhone = document.querySelector('[name="telefoneform"]').value;
        g_getPhone = g_countryCode + g_getPhone;
        g_getPhone = g_getPhone.replace(/\D/g, '');
        if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
          return "+" + g_getPhone
        }
    }
    
    var email = validEmail()
    var phone = validPhone()

    gtag('set', 'user_data', {
        email: email,
        phone_number: phone
    })
  
    gtag('event', 'conversion', {
      'send_to': 'AW-952656369/f5NCCLTg3WUQ8cOhxgM'})
  })