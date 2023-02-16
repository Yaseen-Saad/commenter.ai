let signup = document.querySelector("main section:last-of-type p a");
signup.onclick = (e) => {
  e.preventDefault();
  if (e.target.innerText.toLowerCase() === "sign up") {
    document.forms[0].classList.toggle("active");
    document.forms[1].classList.toggle("active");
    document.querySelector("main >section:last-of-type >h2").textContent =
      "Start your journey";
    document.querySelector("main >section:last-of-type >h2 + p").innerHTML =
      "create Acount: <span>step 1 by 2</span>";
    document
      .querySelector("main > section:last-of-type > div:has(>span)")
      .classList.add("active");
    signup.innerText = "Log In";
    document.querySelector("main section:last-of-type >p").textContent =
      "already have an account ? ";
  } else {
    document.forms[0].classList.toggle("active");
    document.forms[1].classList.toggle("active");
    document.querySelector("main >section:last-of-type >h2").textContent =
      "hello again";
    document.querySelector("main >section:last-of-type >h2 + p").innerHTML =
      "Lorem Ipsum Dolor Sit Amet. Lorem, Ipsum.";
    document
      .querySelector("main > section:last-of-type > div:has(>span)")
      .classList.remove("active");
    signup.innerText = "Sign Up";
    document.querySelector("main section:last-of-type >p").textContent =
      "Don't Have An Account Yet ? ";
  }
};

let SignUp = document.querySelector("form:nth-of-type(2)");
let signUp2 = document.querySelector("form:last-of-type");
SignUp.onsubmit = (e) => {
  e.preventDefault();
  let email = document.querySelector("form:last-of-type input[type=text]");
  let password = document.querySelector(
    "form:last-of-type input[type=password]"
  );
  let emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (emailRegex.test(email.value)) {
    if (password.value) {
      if (password.value.length > 8 && password.value.length < 16) {
        if (
          password.value.match(/(\_|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\=|\+|\|)/)
        ) {
          Array(
            ...document.querySelectorAll(
              "body main > section:last-child > div:has(> span) > span "
            )
          ).map((ele) => ele.classList.toggle("active"));
          document.querySelector("main >section:last-of-type >h2").textContent =
            "Start Yor 14-day Free Trail now";
          document.forms[1].classList.toggle("active");
          document.forms[2].classList.toggle("active");
          signup.innerText = "";
          document.querySelector("main section:last-of-type >p").textContent =
            "14 days free from today then $197/month";
        } else {
          giveAlert("Your Password Must Includes At Least 1 Special Charecter");
        }
      } else {
        giveAlert("Your Password Must Be Between 8 & 16 charecters");
      }
    } else {
      giveAlert("Please Enter Your Password");
    }
  } else {
    giveAlert("Please Enter A Valid Email");
  }
};
