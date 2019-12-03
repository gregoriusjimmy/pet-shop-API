const handleItemGet = (req, res, pool) => {
  pool.query('SELECT * FROM pesanan ORDER BY kd_order', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const handleItemPost = (req, res, pool) => {
  const { kd_order, tgl_order, id_supplier, kd_barang, jumlah } = req.body;

  pool.query(
    'INSERT INTO pesanan VALUES ($1,$2,$3,$4,$5)',
    [kd_order, tgl_order, id_supplier, kd_barang, jumlah],
    (error, results) => {
      2;
      if (error) {
        throw error;
      }

      res.status(200).json(`User added with ID: ${results}`);
    }
  );
};

const handleItemPut = (req, res, pool) => {
  const { kd_order, tgl_order, id_supplier, kd_barang, jumlah } = req.body;

  pool.query(
    'UPDATE pesanan SET tgl_order = $2, id_supplier = $3, kd_barang = $4, jumlah = $5  WHERE kd_order = $1',
    [kd_order, tgl_order, id_supplier, kd_barang, jumlah],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(`User modified with ID: ${kd_order}`);
    }
  );
};

const handleItemDelete = (req, res, pool) => {
  const { kd_order } = req.body;
  pool.query('DELETE FROM pesanan WHERE kd_order = $1', [kd_order], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(`User deleted with ID: ${kd_order}`);
  });
};

module.exports = {
  handleItemGet: handleItemGet,
  handleItemPost: handleItemPost,
  handleItemPut: handleItemPut,
  handleItemDelete: handleItemDelete,
};
