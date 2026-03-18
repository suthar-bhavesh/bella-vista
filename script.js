document.addEventListener('DOMContentLoaded', () => {

    const UserFields = document.querySelectorAll('.userFields');
    const Myform = document.querySelector('.myForm');
    const InputError = document.querySelectorAll('.error');

    Myform.addEventListener('submit', (e) => {
        e.preventDefault();

        let isFormvalid = true;
        let FormData = {};

        UserFields.forEach((Input) => {

            const value = Input.value.trim();
            const FieldName = Input.getAttribute('name') || Input.placeholder;

            if (value === "") {
                isFormvalid = false;
                Input.style.border = '2px solid red';
            }
            else {
                FormData[FieldName] = value;
                Input.style.border = '2px solid green';
            }

        })

        if (isFormvalid) {
            InputError.forEach((error) => {
                error.textContent = "";

                Myform.reset();
            });

        } else {
            InputError.forEach((error) => {
                error.textContent = "Please fill required fields";
                error.style.color = "red";
                return;
            })
        }
    })
})