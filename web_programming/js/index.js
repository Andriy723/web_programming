function displayTrolleybuses() {
  const trolleybusesContainer = document.querySelector(".card_field");
  trolleybusesContainer.innerHTML = "";

  trolleybuses.forEach((trolleybus, index) => {
    const trolleybusItem = document.createElement("li");
    trolleybusItem.classList.add("item-card");
    trolleybusItem.draggable = true;
    trolleybusItem.id = index;

    trolleybusItem.innerHTML = `
            <img src="images/trolleybus.png" class="card-img" alt="card"/>
            <div class="card_body">
                <h4 class="card-title">Title: ${trolleybus.title}</h4>
                <p class="card-description">Description: ${trolleybus.description}</p>
                <p class="card-price">Price: $${trolleybus.price.toFixed(2)}</p>
                <p class="card-type">Type: ${trolleybus.type}</p>
            </div>
            <div class="card_buttons">
                <button class="edit_button" data-trolleybus-id="${index}">Edit</button>
                <button class="delete_button" data-trolleybus-id="${index}">Delete</button>
            </div>
        `;

    trolleybusesContainer.appendChild(trolleybusItem);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const defaultTrolleybuses = [
      {
        title: "sdfdbfn",
        description: "ht5rgdfdww",
        price: 40.00,
        type: "40_people",
      },
      {
        title: "fvbfhr",
        description: "bfhrgdfry4",
        price: 220.00,
        type: "70_people",
      },
      {
        title: "fvgfhret",
        description: "fegrhtrtegd",
        price: 70.00,
        type: "70_people",
      },
      {
        title: "fvhrge",
        description: "ghmythr",
        price: 80.00,
        type: "70_people",
      },
      {
        title: "frfrf",
        description: "gthrg",
        price: 10.00,
        type: "30_people",
      }
    ];

    trolleybuses.push(...defaultTrolleybuses);
    displayTrolleybuses();
  });
}

function createTrolleybus(title, description, price, type) {
  const newTrolleybus = {
    title: title,
    description: description,
    price: parseFloat(price),
    type: type,
  };
  trolleybuses.push(newTrolleybus);
  displayTrolleybuses();
}

function deleteTrolleybus(index) {
  trolleybuses.splice(index, 1);
}

const trolleybuses = [];
let sortDescending = true;

function sortTrolleybuses() {
  trolleybuses.sort((a, b) => {
    if (sortDescending) {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });
  displayTrolleybuses(trolleybuses);
}


document.getElementById("sort_button").addEventListener("click", function () {
  sortTrolleybuses();
  searchTrolleybuses();
});


function calculateTotalPrice() {
  const searchInput = document.querySelector(".Search_for_trolleybuses");
  const searchValue = searchInput.value.toLowerCase();
  const visibleTrolleybuses = trolleybuses.filter((trolleybus) => {
    const title = trolleybus.title.toLowerCase();
    return title.includes(searchValue);
  });

  const totalPrice = visibleTrolleybuses.reduce((total, trolleybus) => total + trolleybus.price, 0);
  document.getElementById("price").textContent = `$${totalPrice.toFixed(2)}`;
}


displayTrolleybuses();

document.getElementById("clear_button").addEventListener("click", () => {
  const searchInput = document.querySelector(".Search_for_trolleybuses");
  searchInput.value = "";
  searchTrolleybuses();
});


document.getElementById("search_button").addEventListener("click", searchTrolleybuses);

function searchTrolleybuses() {
  const searchInput = document.querySelector(".Search_for_trolleybuses");
  const searchValue = searchInput.value.toLowerCase();
  const trolleybusItems = document.querySelectorAll(".item-card");

  trolleybusItems.forEach((trolleybusItem) => {
    const title = trolleybusItem.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(searchValue)) {
      trolleybusItem.style.display = "block";
    } else {
      trolleybusItem.style.display = "none";
    }
  });
}

document.getElementById("count_button").addEventListener("click", calculateTotalPrice);


document.getElementById("add_form1").addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInput = document.getElementById("title_input1").value.trim();
  const descriptionInput = document.getElementById("description_input1").value.trim();
  const priceInput = document.getElementById("price_input1").value.trim();
  const typeInput = document.getElementById("type_trolleybus1").value;
  if (titleInput && descriptionInput && priceInput && typeInput !== "select") {
    createTrolleybus(titleInput, descriptionInput, priceInput, typeInput);
    document.getElementById("add_form1").reset();
  }
});

document.getElementById("add_form2").addEventListener("submit", function (e) {
  e.preventDefault();
  const titleInput = document.getElementById("title_input2").value.trim();
  const descriptionInput = document.getElementById("description_input2").value.trim();
  const priceInput = document.getElementById("price_input2").value.trim();
  const typeInput = document.getElementById("type_trolleybus2").value;
  if (titleInput && descriptionInput && priceInput && typeInput !== "select" && editedTrolleybusId !== null) {
    editTrolleybus(editedTrolleybusId, titleInput, descriptionInput, parseFloat(priceInput), typeInput);
    document.getElementById("add_form2").reset();
  }
});

document.querySelector(".card_field").addEventListener("click", function(event) {
  if (event.target.classList.contains("delete_button")) {
    const trolleybusId = event.target.dataset.trolleybusId;
    deleteTrolleybus(trolleybusId);
    displayTrolleybuses();
  }
});


let editedTrolleybusId = null;
function editTrolleybus(index, title, description, price, type) {
  const editedTrolleybus = trolleybuses[index];
  editedTrolleybus.title = title;
  editedTrolleybus.description = description;
  editedTrolleybus.price = parseFloat(price);
  editedTrolleybus.type = type;
  displayTrolleybuses();

  Control_trolleybuses({ currentTarget: document.getElementById("home_button") }, "My trolleybuses");

  editedTrolleybusId = null;
}

document.querySelector(".card_field").addEventListener("click", function(event) {
  if (event.target.classList.contains("edit_button")) {
    const trolleybusId = event.target.dataset.trolleybusId;

    editedTrolleybusId = trolleybusId;

    const editedTrolleybus = trolleybuses[trolleybusId];
    document.getElementById("title_input2").value = editedTrolleybus.title;
    document.getElementById("description_input2").value = editedTrolleybus.description;
    document.getElementById("price_input2").value = editedTrolleybus.price;
    document.getElementById("type_trolleybus2").value = editedTrolleybus.type;

    Control_trolleybuses({ currentTarget: document.getElementById("edit_button") }, "Edit trolleybuses");
  }
});

const modal = document.getElementById("myModal");
const modalMessage = document.getElementById("modal-message");
const span = document.getElementsByClassName("close")[0];

function showModal(message) {
  modalMessage.textContent = message;
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
};
