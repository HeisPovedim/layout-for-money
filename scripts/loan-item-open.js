// NOTE: Открыть "История операций"
const buttonHistory = document.getElementById("loans-history-btn");

if (buttonHistory) {
  buttonHistory.addEventListener("click", () => {
    const historyBody = buttonHistory.closest(".loans-item__history").querySelector(".loans-item__history-body");
    const arrow = buttonHistory.querySelector("img");

    arrow.classList.toggle("active");
    historyBody.classList.toggle("active");
  });
}

// NOTE: Открыть "Документы"
const buttonDocuments = document.getElementById("loans-documents-btn");

if (buttonDocuments) {
  buttonDocuments.addEventListener("click", () => {
    const documentsBody = buttonDocuments
      .closest(".loans-item__documents")
      .querySelector(".loans-item__documents-body");
    const arrow = buttonDocuments.querySelector("img");

    arrow.classList.toggle("active");
    documentsBody.classList.toggle("active");
  });
}
