const myName = "Anas Abuhatab";
const date = "15/01/2024";

const nameTag = document.querySelector('[class="header-name"]');
const dateTag = document.querySelector('[class="content-date"]');
const modalTag = document.querySelector('[class="modal"]');
const modalCloseTag = document.querySelector('[class="modal-content-close"]');

nameTag.innerHTML = myName.toUpperCase();
dateTag.innerHTML = date;

const handleShowContactModal = (event) => {
  if (event?.target.textContent === "Contact") {
      modalTag.style["display"] = 'flex';
      modalTag.style["z-index"] = 2;
      modalTag.style["opacity"] = 1;
  } else {
      modalTag.style["opacity"] = 0;
    modalTag.style["z-index"] = -2;
    modalTag.style["display"] = 'none';
  }
};

modalCloseTag.setAttribute("onclick", "handleShowContactModal(event)");
