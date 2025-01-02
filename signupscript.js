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
      const signUpForm = document.getElementById('signUpForm')
      
      signUpForm.addEventListener('submit',function(event){
        event.preventDefault();
        
        const username = iusername.value.trim();
        const password = ipassword.value.trim();
        const email = iemail.value.trim();
        const phonenum = iphonenum.value.trim();

        const storedProfiles = localStorage.getItem('profiles');
        const profilesArray = storedProfiles ? JSON.parse(storedProfiles) : [];
        
        const existedUsername = profilesArray.some(profile => profile.username === username);
        const existedPassword = profilesArray.some(profile => profile.password === password);
        const existedEmail = profilesArray.some(profile => profile.email === email);
        if(username.length<5){
          alert('Username must be at least 5 characters long');
          return;
        }
        if(existedUsername){
          alert('Username already registered');
          return
        }
        if(password.length<5){
          alert('Password must be at least 5 characters long');
          return;
        }
        if(existedPassword){
          alert('Password already registered');
          return
        }
        if(existedEmail){
          alert('Current email already registered');
          return;
        }

        const newProfile = {username,password,email,phonenum}
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