const submit_btn = document.querySelector(".btn");
const Ok_btn = document.querySelector(".Ok_btn");
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");
const modal_title = document.querySelector("#modal_title");

submit_btn.addEventListener("click", (e) => {
    e.preventDefault();

    const fname = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const password = document.querySelector("#password").value;

    console.log(fname, email, password, phone);

    if (!(fname && email && phone && password)) {
        alert("All inputs are required");
    } else {
        modal.classList.add("open_modal");
        modal_title.innerHTML = `Welcome <br> ${fname}
        <br><p> Email : ${email}</p>\n<p> phone : ${phone}<p>`;
        container.classList.add("close_form");

        //After submit then clear all input field
        document.querySelector("#name").value = '';
        document.querySelector("#email").value = '';
        document.querySelector("#phone").value = '';
        document.querySelector("#password").value = '';

    }
});

Ok_btn.addEventListener("click", () => {
    modal.classList.remove("open_modal");
    container.classList.remove("close_form");
});
