const handleItemGet = (req, res, pool) => {
  pool.query(
    'SELECT * FROM transaksi_jual ORDER BY kd_jual',
    (error, results) => {
      if (error) {
        res.status(400).json('unable to fetch');
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};
const handleItemPost = (req, res, pool) => {
  const {
    id_pembeli,
    kd_barang,
    jumlah,
    harga_normal,
    potongan,
    harga_total,
  } = req.body;

  pool.query(
    'INSERT INTO transaksi_jual (tgl_jual,id_pembeli, kd_barang, jumlah, harga_normal, potongan, harga_total)  VALUES ($1,$2,$3,$4,$5,$6,$7)',
    [
      new Date(),
      id_pembeli.toUpperCase(),
      kd_barang.toUpperCase(),
      jumlah,
      harga_normal,
      potongan,
      harga_total,
    ],
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
//   const { kd_transaksi, id_pembeli, kd_barang, jumlah, tgl_transaksi } = req.body;

//   pool.query(
//     'UPDATE transaksi_jual SET id_pembeli = $2, kd_barang = $3, jumlah=$4, tgl_transaksi=$5  WHERE kd_transaksi = $1',
//     [kd_transaksi.toUpperCase(), id_pembeli.toUpperCase(), kd_barang.toUpperCase(), jumlah, tgl_transaksi],
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
//   const { kd_transaksi } = req.body;
//   pool.query('DELETE FROM transaksi_jual WHERE kd_transaksi = $1', [kd_transaksi], (error, results) => {
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
