function() {
  var regex = /\S+@\S+\.\S+/;
  var email;

  document.querySelectorAll('[type="email"]').forEach(function(e) {
    if(e.value) {
       email = e.value
    }
  });
  if(!email) return;
  if(!regex.test(email)) return;
  return email.toLowerCase();
}

/* ---------- x ---------- */

//PHONE NUMBER
var phoneNumber = //no needed, only to avoid erros

function() {
  var g_countryCode = '55';
  var g_getPhone;
 
  document.querySelectorAll('[type="tel"]').forEach(function(e) {
    if(e.value) {
       g_getPhone = e.value
    }
  });
  g_getPhone = g_countryCode + g_getPhone;
  g_getPhone = g_getPhone.replace(/\D/g, '');
  if(g_getPhone.length >= 11 && g_getPhone.length <= 15) {
    return "+" + g_getPhone
  }
}

