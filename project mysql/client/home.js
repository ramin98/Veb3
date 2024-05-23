let list = document.querySelector('#list')

function showList(goods) {
  let li = document.createElement("li");
  li.innerHTML = `<p class="user-id">ID - ${goods.id}</p>
    <p class="goodsname">NAME - ${goods.goodsname}</p>
    <p class="goodsdescription">DESCRIPTION - ${goods.goodsdescription}</p>
    <p class="storename">STORE NAME - ${goods.storename}</p>
    <p class="storeaddress">STORE ADDRESS - ${goods.storeaddress}</p>
    <p class="goodsprice">PRICE - ${goods.goodsprice}</p>`;

  let findButton = document.createElement("button");
  findButton.innerText = "ADD TO BAG";
  li.appendChild(findButton);
  findButton.addEventListener("click", () => {
    let obj = {...goods, goodscount:1}
    fetch("http://localhost:5000/bag")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        let inBag
        if(Array.isArray(data)){
            inBag = data.some((item) => item.goodsname === obj.goodsname);
        }
        if (inBag) {
          return;
        } else {
          fetch("http://localhost:5000/add-to-bag", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(obj),
          });
        }
      });
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
