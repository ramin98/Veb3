let add = document.querySelector("#add");
let list = document.querySelector("#list");
let changeContainer = document.querySelector(".change-container");
let changeForm = document.querySelector(".change-container form");
let user_id;
let changingElement;

function showList(goods) {
  let li = document.createElement("li");
  li.innerHTML = `<p class="user-id">ID - ${goods.id}</p>
  <p class="goodsname">NAME - ${goods.goodsname}</p>
  <p class="goodsdescription">DESCRIPTION - ${goods.goodsdescription}</p>
  <p class="storename">STORE NAME - ${goods.storename}</p>
  <p class="storeaddress">STORE ADDRESS - ${goods.storeaddress}</p>
  <p class="goodsprice">PRICE - ${goods.goodsprice}</p>
        <button  onclick="deleteUser('${goods.id}')">X</button>`;

  let findButton = document.createElement("button");
  findButton.innerText = "CHANGE";
  li.appendChild(findButton);
  findButton.addEventListener("click", () => {
    user_id = goods.id;
    document.querySelector("#goodsnameChange").value = goods.goodsname;
    document.querySelector("#goodsdescriptionChange").value =
      goods.goodsdescription;
    document.querySelector("#storenameChange").value = goods.storename;
    document.querySelector("#storeaddressChange").value = goods.storeaddress;
    document.querySelector("#goodspriceChange").value = goods.goodsprice;
    changingElement = event.target.parentElement;
    changeContainer.style = "display:flex";
  });
  list.appendChild(li);
}

fetch("http://localhost:5000/goods")
  .then((res) => res.json())
  .then((data) => {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        showList(item);
      });
    } else {
      console.log(data);
    }
  });

add.addEventListener("submit", (event) => {
  event.preventDefault();
  let goodsname = document.querySelector("#goodsname");
  let goodsdescription = document.querySelector("#goodsdescription");
  let storename = document.querySelector("#storename");
  let storeaddress = document.querySelector("#storeaddress");
  let goodsprice = document.querySelector("#goodsprice");
  let obj = {
    goodsname: goodsname.value,
    goodsdescription: goodsdescription.value,
    storename: storename.value,
    storeaddress: storeaddress.value,
    goodsprice: parseInt(goodsprice.value),
  };
  fetch("http://localhost:5000/add", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      obj = { ...obj, id: data.insertId };
      showList(obj);
    });
});

function deleteUser(id) {
  fetch(`http://localhost:5000/delete/${id}`, {
    method: "DELETE",
  });
  event.target.parentElement.remove();
}

changeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let goodsname = document.querySelector("#goodsnameChange");
  let goodsdescription = document.querySelector("#goodsdescriptionChange");
  let storename = document.querySelector("#storenameChange");
  let storeaddress = document.querySelector("#storeaddressChange");
  let goodsprice = document.querySelector("#goodspriceChange");

  let obj = {
    goodsname: goodsname.value,
    goodsdescription: goodsdescription.value,
    storename: storename.value,
    storeaddress: storeaddress.value,
    goodsprice: parseInt(goodsprice.value),
  };

  let goodsnameChange = changingElement.querySelector(".goodsname");
  let goodsdescriptionChange =
    changingElement.querySelector(".goodsdescription");
  let storenameChange = changingElement.querySelector(".storename");
  let storeaddressChange = changingElement.querySelector(".storeaddress");
  let goodspriceChange = changingElement.querySelector(".goodsprice");

  goodsnameChange.innerText = obj.goodsname;
  goodsdescriptionChange.innerText = obj.goodsdescription;
  storenameChange.innerText = obj.storename;
  storeaddressChange.innerText = obj.storeaddress;
  goodspriceChange.innerText = obj.goodsprice;

  fetch(`http://localhost:5000/change/${user_id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  changeContainer.style = "display:none";
});


fetch("http://localhost:5000/orders")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

      console.log(JSON.parse(data[0].goodsarray));
    
  });