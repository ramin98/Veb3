let list = document.querySelector("#list");

function showList(goods) {
  let li = document.createElement("li");
  li.innerHTML = `<p class="user-id">ID - ${goods.id}</p>
    <p class="goodsname">NAME - ${goods.goodsname}</p>
    <p class="goodsdescription">DESCRIPTION - ${goods.goodsdescription}</p>
    <p class="storename">STORE NAME - ${goods.storename}</p>
    <p class="storeaddress">STORE ADDRESS - ${goods.storeaddress}</p>
    <p class="goodsprice">PRICE - ${goods.goodsprice}</p>
    <p class="goodsprice">COUNT - ${goods.goodscount}</p>
    `;
  list.appendChild(li);
}

fetch("http://localhost:5000/orders")
  .then((res) => res.json())
  .then((data) => {
    let i = 0
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let telephone = document.querySelector("#telephone");
    data.forEach((item) => {
      i++
      console.log()
      name.innerText = item.customername;
      email.innerText = item.customeremail;
      telephone.innerText = item.customertelephonenumber;
        JSON.parse(item.goodsarray).forEach((item) => {
          showList(item);
        });
      
    });
  });
