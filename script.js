// Wait for the document to load before executing JS
document.addEventListener('DOMContentLoaded', function() {
//loginForm
const signinForm = document.getElementById('loginForm');
    //sign in button
  const signEmail = document.getElementById('femail');
  const signPassword = document.getElementById('fpassword');
  // Get the modal element
  const pageModal = new bootstrap.Modal(document.getElementById('pageModal'));

  setTimeout(function() {
    document.body.classList.add('show');
  }, 1000); // 1 second delay
  
  signinForm.addEventListener('submit',function(event){
    const email = signEmail.value
    const password = signPassword.value
    event.preventDefault();
        if(email == 'email' && password == 'password'){
        pageModal.show();
    }
    else{
        document.body.classList.add('fade-out');
        setTimeout(function() {
            // Redirect to another page (replace with your actual URL)
            window.location.href = '/signup.html';
          }, 500);
    } 
  });

  //signUp
  const signupButton = document.getElementById('signupBtn');
  signupButton.addEventListener('click', function() {
    document.body.classList.add('fade-out');
        setTimeout(function() {
            // Redirect to another page (replace with your actual URL)
            window.location.href = '/signup.html';
          }, 500);
  });

});
