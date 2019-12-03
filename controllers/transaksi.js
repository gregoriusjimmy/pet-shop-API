const handleItemGet = (req, res, pool) => {
  pool.query('SELECT * FROM transaksi ORDER BY kd_transaksi', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const handleItemPost = (req, res, pool) => {
  const { kd_transaksi, id_pembeli, kd_barang, jumlah, tgl_transaksi } = req.body;

  pool.query(
    'INSERT INTO transaksi VALUES ($1,$2,$3,$4,$5)',
    [kd_transaksi, id_pembeli, kd_barang, jumlah, tgl_transaksi],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(`User added with ID: ${results}`);
    }
  );
};

const handleItemPut = (req, res, pool) => {
  const { kd_transaksi, id_pembeli, kd_barang, jumlah, tgl_transaksi } = req.body;

  pool.query(
    'UPDATE transaksi SET id_pembeli = $2, kd_barang = $3, jumlah=$4, tgl_transaksi=$5  WHERE kd_transaksi = $1',
    [kd_transaksi, id_pembeli, kd_barang, jumlah, tgl_transaksi],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(`User modified with ID: ${kd_transaksi}`);
    }
  );
};

const handleItemDelete = (req, res, pool) => {
  const { kd_transaksi } = req.body;
  pool.query('DELETE FROM transaksi WHERE kd_transaksi = $1', [kd_transaksi], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(`User deleted with ID: ${kd_transaksi}`);
  });
};

module.exports = {
  handleItemGet: handleItemGet,
  handleItemPost: handleItemPost,
  handleItemPut: handleItemPut,
  handleItemDelete: handleItemDelete,
};
