"use strict";
(function(){

  window.addEventListener("load", init);

  function init(){
    $('loginLink').addEventListener("click", showLoginModal);
    $('reserveButton').addEventListener("click", showReserveForm);
  }

  function showLoginModal(){
    $('loginModal').modal({
      keyboard: false
    })
    $('loginModal').modal('show')
  }

  function showReserveForm(){
    $('reserveForm').modal({
      keyboard: false
    })
    $('reserveForm').modal('show');
  }

})();
