const buttons = document.querySelectorAll(".btn-area .btn "); //Selecting all btns
const notifications = document.querySelector(".notifications"); //selecting il

const toastData = {
  success: {
    icon: "fa-check-circle",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  warning: {
    icon: "fa-exclamation-triangle",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  error: {
    icon: "fa-times-circle",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  info: {
    icon: "fa-exclamation-circle",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  setTimeout(() => {
    toast.remove(), 500;
  });
};
const createToast = (id) => {
  console.log(id);
  const toast = document.createElement("li");
  const { icon, message } = toastData[id];
  toast.className = `toast ${id}`;
  toast.innerHTML = `<div class="colum">
                    <i class="fa ${icon}" aria-hidden="true"></i>
                    <span>${message}</span>
                    </div>
                    <i class="fa fa-times" aria-hidden="true" onClick="removeToast(this.parentElement)" ></i>`;
  notifications.appendChild(toast);
  setTimeout(() => {
    removeToast(toast);
  }, 5000);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    createToast(btn.id);
  });
});
