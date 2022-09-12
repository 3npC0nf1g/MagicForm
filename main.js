document.querySelectorAll('input').forEach(input => {
    input.addEventListener("input", (event) => {
        localStorage.setItem(input.id, event.target.value);
    });
    input.value = localStorage.getItem(input.id);
});

function saveFormDataToLocalStorage() {
    const myForm = document.querySelector("#myForm");
    const person = {};
    const KEY = "25dd5d11-a89a-48d7-8d80-288943a51bb0";

    if (localStorage.getItem(KEY) === null) {
        localStorage.setItem(KEY, JSON.stringify([]));
    }
    let array = JSON.parse(localStorage.getItem(KEY))
    const fd = new FormData(myForm);
    for (const key of fd.keys()) {
        person[key] = fd.get(key)
        person.id = crypto.randomUUID();
    }
    array.push(person);
    localStorage.setItem(KEY, JSON.stringify(array));
}

function resetForm() {
    document.querySelector("#myForm").reset();
}

document.addEventListener("submit", (event) => {
    event.preventDefault();
    saveFormDataToLocalStorage();
    resetForm();
});
window.addEventListener('storage', () => {
    document.getElementById("first-name").value = localStorage.getItem('first-name');
    document.getElementById("last-name").value = localStorage.getItem('last-name');
    document.getElementById("email").value = localStorage.getItem('email');
    document.getElementById("phone").value = localStorage.getItem('phone');
    document.getElementById("company").value = localStorage.getItem('company');
    document.getElementById("address").value = localStorage.getItem('address');
});

