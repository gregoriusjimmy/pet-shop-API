const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { Pool, Client } = require('pg');

const app = express();
const port = 3001;

const item = require('./controllers/item');
const supplier = require('./controllers/supplier');
const pembeli = require('./controllers/pembeli');
const transaksi_beli = require('./controllers/transaksi_beli');
const transaksi_jual = require('./controllers/transaksi_jual');
const jurnal = require('./controllers/jurnal');
const perkiraan = require('./controllers/perkiraan');

// perkiraan.test();
app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pet-shop',
  password: 'postgres305',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('it is working');
});

// ITEM CONTROLLER
app.get('/item', (req, res) => {
  item.handleItemGet(req, res, pool);
});

app.post('/item', (req, res) => {
  item.handleItemPost(req, res, pool);
});

app.put('/item', (req, res) => {
  item.handleItemPut(req, res, pool);
});

app.delete('/item', (req, res) => {
  item.handleItemDelete(req, res, pool);
});
// END ITEM
// SUPPLIER CONTROLLER
app.get('/supplier', (req, res) => {
  supplier.handleItemGet(req, res, pool);
});
app.post('/supplier', (req, res) => {
  supplier.handleItemPost(req, res, pool);
});
app.put('/supplier', (req, res) => {
  supplier.handleItemPut(req, res, pool);
});
app.delete('/supplier', (req, res) => {
  supplier.handleItemDelete(req, res, pool);
});
// END SUPPLIER
// PEMBELI CONTROLLER
app.get('/pembeli', (req, res) => {
  pembeli.handleItemGet(req, res, pool);
});
app.post('/pembeli', (req, res) => {
  pembeli.handleItemPost(req, res, pool);
});
app.put('/pembeli', (req, res) => {
  pembeli.handleItemPut(req, res, pool);
});
app.delete('/pembeli', (req, res) => {
  pembeli.handleItemDelete(req, res, pool);
});
// END PEMBELI
// PESANAN CONTROLLER
app.get('/transaksi_beli', (req, res) => {
  transaksi_beli.handleItemGet(req, res, pool);
});
app.post('/transaksi_beli', (req, res) => {
  transaksi_beli.handleItemPost(req, res, pool);
});
// app.put('/pesanan', (req, res) => {
//   pesanan.handleItemPut(req, res, pool);
// });
// app.delete('/pesanan', (req, res) => {
//   pesanan.handleItemDelete(req, res, pool);
// });
// END PESANAN
// TRANSAKSI CONTROLLER
app.get('/transaksi_jual', (req, res) => {
  transaksi_jual.handleItemGet(req, res, pool);
});
app.post('/transaksi_jual', (req, res) => {
  transaksi_jual.handleItemPost(req, res, pool);
});
// app.put('/transaksi_jual', (req, res) => {
//   transaksi.handleItemPut(req, res, pool);
// });
// app.delete('/transaksi_jual', (req, res) => {
//   transaksi.handleItemDelete(req, res, pool);
// });
// END TRANSAKSI
// JURNAL CONTROLLER
app.get('/jurnal', (req, res) => {
  jurnal.handleItemGet(req, res, pool);
});
app.post('/jurnal', (req, res) => {
  jurnal.handleItemPost(req, res, pool);
});
// END JURNAL
// PERKIRAAN
app.get('/perkiraan', (req, res) => {
  perkiraan.handleItemGet(req, res, pool);
});
// app.post('/perkiraan', (req, res) => {
//   perkiraan.handleItemPost(req, res, pool);
// });
// END PERKIRAAN
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
