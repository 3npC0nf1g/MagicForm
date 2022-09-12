const KEY = "25dd5d11-a89a-48d7-8d80-288943a51bb0";
let dbPersons = JSON.parse(localStorage.getItem(KEY));

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};
document.addEventListener("delete-card", () => {
    showCards();
    console.log("ici niveau 2");
});

function showCards() {
    dbPersons = JSON.parse(localStorage.getItem(KEY));
    const cards = document.querySelector("#history__main");
    if (cards) {
        removeChilds(cards);
        console.log("child removed");
    }
    for (person of dbPersons) {
        createHistoryCard(person);
    }
}

function deleteCard() {
    let deleteButton = document.querySelectorAll(".delete-button");
    deleteButton.forEach((currentButton) => {
        currentButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(event.currentTarget.dataset.id);
            let object = dbPersons.filter((person) => person.id !== event.currentTarget.dataset.id);
            localStorage.setItem(KEY, JSON.stringify(object));
            console.log(object);
            document.dispatchEvent(new CustomEvent("delete-card"));
        });
    });
}

showCards();

function createHistoryCard(data) {

    const div = document.createElement('div');
    div.className = "submit-history-card";
    const firstNameTitle = document.createElement('h4');
    const lastNameTitle = document.createElement('h4');
    const emailTitle = document.createElement('h4');
    const phoneTitle = document.createElement('h4');
    const compagnyTitle = document.createElement('h4');
    const addressTitle = document.createElement('h4');
    const button = document.createElement('button');
    button.className = "delete-button";
    button.setAttribute("data-id", data["id"]);

    firstNameTitle.innerHTML = "First Name";
    lastNameTitle.innerHTML = "Last Name";
    emailTitle.innerHTML = "Email";
    phoneTitle.innerHTML = "Phone";
    compagnyTitle.innerHTML = "Company";
    addressTitle.innerHTML = "Address";
    button.innerHTML = "Delete";


    const firstNameP = document.createElement('p');
    firstNameP.className = "card-first-name";
    const lastNameP = document.createElement('p');
    lastNameP.className = "card-last-name";
    const emailP = document.createElement('p');
    emailP.className = "card-email";
    const phoneP = document.createElement('p');
    phoneP.className = "card-phone";
    const compagnyP = document.createElement('p');
    compagnyP.className = "card-company";
    const addressP = document.createElement('p');
    addressP.className = "card-address";

    firstNameP.innerHTML = data["first-name"];
    lastNameP.innerHTML = data["last-name"];
    emailP.innerHTML = data["email"];
    phoneP.innerHTML = data["phone"];
    addressP.innerHTML = data["address"];
    compagnyP.innerHTML = data["company"];

    div.appendChild(firstNameTitle);
    div.appendChild(firstNameP);
    div.appendChild(lastNameTitle);
    div.appendChild(lastNameP);
    div.appendChild(emailTitle);
    div.appendChild(emailP);
    div.appendChild(phoneTitle);
    div.appendChild(phoneP);
    div.appendChild(compagnyTitle);
    div.appendChild(compagnyP);
    div.appendChild(addressTitle);
    div.appendChild(addressP);
    div.appendChild(button);

    document.querySelector('#history__main').appendChild(div);
    deleteCard();
}

