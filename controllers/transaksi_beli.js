const handleItemGet = (req, res, pool) => {
  pool.query('SELECT * FROM transaksi_beli ORDER BY kd_beli', (error, results) => {
    if (error) {
      res.status(400).json('unable to fetch');
    } else {
      res.status(200).json(results.rows);
    }
  });
};
const handleItemPost = (req, res, pool) => {
  const { id_supplier, kd_barang, jumlah, harga_total } = req.body;

  pool.query(
    'INSERT INTO transaksi_beli(tgl_beli,id_supplier,kd_barang,jumlah,harga_total) VALUES ($1,$2,$3,$4,$5)',
    [new Date(), id_supplier.toUpperCase(), kd_barang.toUpperCase(), jumlah, harga_total],
    (error, results) => {
      if (error) {
        res.status(400).json('unable to fetch');
      } else {
        res.status(200).json('success');
      }
    }
  );
};

// const handleItemPut = (req, res, pool) => {
//   const { kd_order, tgl_order, id_supplier, kd_barang, jumlah } = req.body;

//   pool.query(
//     'UPDATE pesanan SET tgl_order = $2, id_supplier = $3, kd_barang = $4, jumlah = $5  WHERE kd_order = $1',
//     [kd_order.toUpperCase(), tgl_order, id_supplier.toUpperCase(), kd_barang.toUpperCase(), jumlah],
//     (error, results) => {
//       if (error) {
//         res.status(400).json('unable to fetch');
//       } else {
//         res.status(200).json('success');
//       }
//     }
//   );
// };

// const handleItemDelete = (req, res, pool) => {
//   const { kd_order } = req.body;
//   pool.query('DELETE FROM pesanan WHERE kd_order = $1', [kd_order], (error, results) => {
//     if (error) {
//       res.status(400).json('unable to fetch');
//     } else {
//       res.status(200).json('success');
//     }
//   });
// };

module.exports = {
  handleItemGet: handleItemGet,
  handleItemPost: handleItemPost,
  // handleItemPut: handleItemPut,
  // handleItemDelete: handleItemDelete,
};
