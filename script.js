
// function loginCheck(profilesArray, email, password) {
//     for (let i = 0; i < profilesArray.length; i++) {
//         const profile = profilesArray[i];
//         console.log(profile.email);
//         if (profile.email === email && profile.password === password) {
//             console.log("hello");
//             return true; 
//         }
//     }
//     return false;
// }


document.addEventListener('DOMContentLoaded', function () {
    const profiles = [
        { username: 'Alice', password: "alicepass", email: 'alice@example.com',phonenum:'087875841314' },
        { username: 'Bob', password: "bobpass", email: 'bob@example.com',phonenum:'087875841314'  },
        { username: 'Charlie', password: "charliepass", email: 'charlie@example.com',phonenum:'087875841314'}
      ];

      if(localStorage.getItem('profiles') == false){
          localStorage.setItem('profiles', JSON.stringify(profiles));
      }

    const signinForm = document.getElementById('loginForm');
    const signEmail = document.getElementById('femail');
    const signPassword = document.getElementById('fpassword');
    const pageModal = new bootstrap.Modal(document.getElementById('pageModal'));

    // Apply fade-in effect when page is loaded
    setTimeout(function () {
        document.body.classList.add('show');
    }, 500);


    const dismissButton = document.getElementById('dismissBtn');
    dismissButton.addEventListener('click',function(event){
        signEmail.value = '';
        signPassword.value = '';
    })

    const storedProfiles = localStorage.getItem('profiles');
    const profilesArray = JSON.parse(storedProfiles);

    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = signEmail.value.trim();
        const password = signPassword.value.trim();
        
        console.log(loginCheck(profilesArray, email, password))
        
        if (loginCheck(profilesArray, email, password) == false) {
            pageModal.show();
        } else {
            // saves user's data to dashboard.html
            const userLoggedIn = profilesArray.find(profile => profile.username === email);
            localStorage.setItem('userLoggedIn', JSON.stringify(userLoggedIn))

            // Apply fade-out class and redirect after a small delay
            document.body.classList.add('fade-out');
            setTimeout(function () {
                window.location.href = '/dashboard.html'; // Redirect to dashboard page
            }, 500); // Wait for fade-out to complete
        }
    });

    // Sign-up button click handler
    const signupButton = document.getElementById('signupBtn');
    signupButton.addEventListener('click', function () {
        // Apply fade-out and redirect to signup page after delay
        document.body.classList.add('fade-out');
        setTimeout(function () {
            window.location.href = '/signup.html'; // Redirect to signup page
        }, 500);
    });
});

function loginCheck (profilesArray, email, password){
    return profilesArray.some(profile => profile.username === email && profile.password === password);
}