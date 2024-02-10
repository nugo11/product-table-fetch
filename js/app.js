fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let putProducts = document.getElementsByTagName("table")[0];
      let createTR = document.createElement("tr");
      createTR.classList.add("removeThis");
      createTR.innerHTML = `
        <td style="text-align: center;"> ${data[i].id} </td>
        <td> <div class="product-cont"><img src="${data[i].image}" alt="${data[i].title}"> ${data[i].title} </div></td>
        <td>${data[i].category}</td>
        <td> ${data[i].price} </td>
        <td> ${data[i].rating.rate} </td>
        <td> ${data[i].rating.count} </td>
        <td> <div class="delivered">Delivered</div> </td>
        <td style="text-align: center">
        <div class="icon-cont">
        <button id="edit">
        <img src="./icons/edit-icon.png" alt="Edit Icon" />
        </button>
        <button class="remove">
        <img src="./icons/trash-icon.png" alt="Trash Icon" />
        </button>
        </div>
        </td>
        `;
      putProducts.appendChild(createTR);
    }

    for (let o = 0; o < data.length; o++) {
      let removeBut = document.getElementsByClassName("remove");
      let removeThis = document.getElementsByClassName("removeThis");
      removeBut[o].addEventListener("click", () => {
        removeThis[o].style.display = "none";
      });
    }
  });

let dark = document.getElementById("dark");
let light = document.getElementById("light");

dark.addEventListener("click", () => {
  document.getElementsByTagName("link")[1].href = "./css/dark.css";
  dark.style.display = "none";
  light.style.display = "block";
});
light.addEventListener("click", () => {
  document.getElementsByTagName("link")[1].href = "";
  dark.style.display = "block";
  light.style.display = "none";
});
