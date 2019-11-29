const handleItemGet = (req, res, pool) => {
  pool.query("SELECT * FROM data_barang ORDER BY kd_barang", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const handleItemPost = (req, res, pool) => {
  const { kd_barang, nama_barang, satuan, harga, stok_barang } = req.body;

  pool.query(
    "INSERT INTO data_barang VALUES ($1,$2,$3,$4,$5)",
    [kd_barang, nama_barang, satuan, harga, stok_barang],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(`User added with ID: ${results.insertId}`);
    }
  );
};

const handleItemPut = (req, res, pool) => {
  const { kd_barang, nama_barang, satuan, harga, stok_barang } = req.body;

  pool.query(
    "UPDATE data_barang SET nama_barang = $2, satuan = $3, harga= $4, stok_barang=$5 WHERE kd_barang = $1",
    [kd_barang, nama_barang, satuan, harga, stok_barang],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json("User modified with ID:");
      }
    }
  );
};

const handleItemDelete = (req, res, pool) => {
  const { kd_barang } = req.body;
  pool.query("DELETE FROM data_barang WHERE kd_barang = $1", [kd_barang], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(`User deleted with ID:`);
  });
};

module.exports = {
  handleItemGet: handleItemGet,
  handleItemPost: handleItemPost,
  handleItemPut: handleItemPut,
  handleItemDelete: handleItemDelete
};
