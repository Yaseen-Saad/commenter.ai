let signup = document.querySelector("main section:last-of-type p a");
signup.onclick = (e) => {
  e.preventDefault();
  if (e.target.innerText.toLowerCase() === "sign up") {
    document.forms[0].style.display = "none";
    document.forms[1].style.display = "flex";
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
    document.forms[1].style.display = "none";
    document.forms[0].style.display = "flex";

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
