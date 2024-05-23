const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
let app = express();
app.use(cors());
app.use(bodyParser.json());
const HOST = 5000;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ramin1998",
  database: "bootcamp",
});

connection.connect((err) => {
  if (!err) {
    console.log("SUCCESS");
  } else {
    console.log(err);
  }
});

app.get("/users/:id", (req, res) => {
  connection.query(
    `SELECT * FROM goods WHERE id = ${req.params.id};`,
    (err, data) => {
      console.log(data);
      if (data.length > 0 && Array.isArray(data)) {
        res.json(data);
      } else {
        res.json({ error: "THERE ARE NO DATA" });
      }
    }
  );
});

app.get("/goods", (req, res) => {
  connection.query(`SELECT * FROM goods;`, (err, data) => {
    console.log(data);
    if (data.length > 0 && Array.isArray(data)) {
      res.json(data);
    } else {
      res.json({ error: "THERE ARE NO DATA" });
    }
  });
});

app.get("/orders", (req, res) => {
  connection.query(`SELECT * FROM orders;`, (err, data) => {
    console.log(data);
    if (data.length > 0 && Array.isArray(data)) {
      res.json(data);
    } else {
      res.json({ error: "THERE ARE NO DATA" });
    }
  });
});

app.get("/bag", (req, res) => {
  connection.query(`SELECT * FROM bag;`, (err, data) => {
    console.log(data);
    if (data.length > 0 && Array.isArray(data)) {
      res.json(data);
    } else {
      res.json({ error: "THERE ARE NO DATA" });
    }
  });
});

app.post("/add-to-bag", (req, res) => {
  let goods = req.body;
  console.log(goods);
  connection.query(
    `INSERT INTO bag (goodsname, goodsdescription, storename, storeaddress, goodsprice, goodscount)
    VALUES  ('${goods.goodsname}', '${goods.goodsdescription}','${goods.storename}', '${goods.storeaddress}', ${goods.goodsprice},${goods.goodscount});`,
    (err, data) => {
      if (err) {
        console.log(err);
      }
      res.json(data);
    }
  );
});

app.post("/add-orders", (req, res) => {
  let goods = req.body;
  console.log(goods);
  connection.query(
    `INSERT INTO orders (customername,customeremail, customertelephonenumber, goodsarray)
    VALUES  ('${goods.name}', '${goods.telephone}','${goods.email}', '${JSON.stringify(goods.goods)}');`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    }
  );
});

app.post("/add", (req, res) => {
  let goods = req.body;
  console.log(goods);
  connection.query(
    `INSERT INTO goods (goodsname, goodsdescription, storename, storeaddress, goodsprice)
    VALUES  ('${goods.goodsname}', '${goods.goodsdescription}','${goods.storename}', '${goods.storeaddress}', ${goods.goodsprice});`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  let goodsId = req.params.id;
  connection.query(`DELETE FROM goods WHERE id = ${goodsId};`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

app.put("/change/:id", (req, res) => {
  let goodsId = req.params.id;
  let changingGoods = req.body;

  connection.query(
    `UPDATE goods SET goodsname = '${changingGoods.goodsname}',
    goodsdescription = '${changingGoods.goodsdescription}',
    storename = '${changingGoods.storename}',
    storeaddress = '${changingGoods.storeaddress}',
    goodsprice = ${changingGoods.goodsprice}
    WHERE id = ${goodsId};`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    }
  );
});

app.put("/change-goods-count-to-plus", (req, res) => {
  let goodsId = req.query.id;
  let count = parseInt(req.query.value);

  connection.query(
    `UPDATE bag SET goodscount = ${count}
    WHERE id = ${goodsId};`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    }
  );
});

app.put("/change-goods-count-to-minus", (req, res) => {
  let goodsId = req.query.id;
  let count = parseInt(req.query.value);

  connection.query(
    `UPDATE bag SET goodscount = ${count}
    WHERE id = ${goodsId};`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.json(data);
      }
    }
  );
});

app.listen(HOST, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`localhost:${HOST}`);
  }
});

let goodsname = "T-shirt";
let goodsprice = 12;
let gooddescription = "black";

let good = [
  `goodsname = '${goodsname}'`,
  `goodsprice = ${goodsprice}`,
  `gooddescription = '${gooddescription}'`,
];
console.log(good.join(","));
