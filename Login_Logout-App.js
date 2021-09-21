//HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="pagestyle.css"/>
    <title>Momentum app</title>
  </head>
  <body>
  <form class="hidden" id="login-form">
    <input 
    required maxlength="15" 
    type="text" 
    placeholder="what is your name" />
    <button>Log In</button>
  <form class="hidden" id="logout">
      <input 
      required maxlength="15" 
      type="text" />
    <button>Log out</button>
  </form>
  <h1 id="greeting" class="hidden"></h1>
  <h2 id="clock"></h2>
  <script src="page.js"></script>
  <script scr="pageclock.js"></script>
  </body>
</html>



//JS
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutForm = document.querySelector("#logout-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}


logoutForm.addEventListener("click", logoutBtn);

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings()
}
