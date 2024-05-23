let list = document.querySelector("#list");

function showList(goods) {
  console.log(goods);
  let li = document.createElement("li");
  li.innerHTML = `<p class="user-id">ID - ${goods.id}</p>
    <p class="goodsname">NAME - ${goods.goodsname}</p>
    <p class="goodsdescription">DESCRIPTION - ${goods.goodsdescription}</p>
    <p class="storename">STORE NAME - ${goods.storename}</p>
    <p class="storeaddress">STORE ADDRESS - ${goods.storeaddress}</p>
    <p class="goodsprice">PRICE - ${goods.goodsprice}</p>
    <p class="goodsprice">COUNT - ${goods.goodscount}</p>
    <div class="valueChange"></div>
    `;
  let div = document.createElement("button");
  li.appendChild(div);
  let minusButton = document.createElement("button");
  minusButton.innerText = "-";
  let plusButton = document.createElement("button");
  plusButton.innerText = "+";
  let countValue = document.createElement("input");
  countValue.type = "number";
  countValue.disabled = true;
  countValue.value = goods.goodscount;
  div.appendChild(minusButton);
  div.appendChild(countValue);
  div.appendChild(plusButton);
  list.appendChild(li);
  minusButton.addEventListener("click", () => {
    if (countValue.value <= 1) {
      return;
    } else {
      countValue.value = parseInt(countValue.value) - 1;
      fetch(
        `http://localhost:5000/change-goods-count-to-minus?id=${goods.id}&value=${countValue.value}`,
        {
          method: "PUT",
        }
      );
    }
  });
  plusButton.addEventListener("click", () => {
    countValue.value = parseInt(countValue.value) + 1;
    fetch(
      `http://localhost:5000/change-goods-count-to-plus?id=${goods.id}&value=${countValue.value}`,
      {
        method: "PUT",
      }
    );
  });
}

fetch("http://localhost:5000/bag")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    localStorage.setItem('goods',JSON.stringify(data))
    if (Array.isArray(data)) {
      data.forEach((item) => {
        showList(item);
      });
    } else {
      console.log(data);
    }
  });

let form = document.querySelector("form");

form.addEventListener('submit', (event) => {
  event.preventDefault()
  let name = document.querySelector("#name");
  let telephone = document.querySelector("#telephone");
  let email = document.querySelector("#email");

  let obj = {
    name: name.value,
    telephone: telephone.value,
    email: email.value,
    goods: JSON.parse(localStorage.getItem('goods'))
  };
  fetch("http://localhost:5000/add-orders", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
})