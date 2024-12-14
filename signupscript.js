document.addEventListener('DOMContentLoaded', function () {
        // Add fade-in effect when the page is loaded
        setTimeout(function () {
          document.body.classList.add('show');
        }, 500); // Wait for the page to settle before fading in
      });

      const iusername = document.getElementById('susername');
      const ipassword = document.getElementById('spassword');
      const iemail = document.getElementById('semail');
      const iphonenum = document.getElementById('sphone');
      const signUpBtn = document.getElementById('signUp');
      const pageModal = new bootstrap.Modal(document.getElementById('pageModal'));

      const logoutForm = document.getElementById('logoutForm')
      logoutForm.addEventListener('submit',function(event){
        event.preventDefault();
        const username = iusername.value
        const password = ipassword.value
        const email = iemail.value
        const phonenum = iphonenum.value
        const storedProfiles = localStorage.getItem('profiles');
        const profilesArray = JSON.parse(storedProfiles);
        newProfile = {username,password,email,phonenum}
        profilesArray.push(newProfile)  
        localStorage.setItem('profiles', JSON.stringify(profilesArray));
        pageModal.show();
        
      })

    const dismissBtn = document.getElementById('dismissBtn');
    dismissBtn.addEventListener('click',function(){
        document.body.classList.add('fade-out');
        setTimeout(function () {
            window.location.href = '/index.html'; // Redirect to sign-in page
        }, 500);
    })

    const toSignInBtn = document.getElementById('toSignIn');
    toSignInBtn.addEventListener('click', function () {
    document.body.classList.add('fade-out');
    setTimeout(function () {
        window.location.href = '/index.html'; // Redirect to sign-in page
    }, 500);
});