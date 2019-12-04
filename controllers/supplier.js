const handleItemGet = (req, res, pool) => {
  pool.query('SELECT * FROM supplier ORDER BY id_supplier', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const handleItemPost = (req, res, pool) => {
  const { id_supplier, nama_supplier, alamat, no_telp } = req.body;

  pool.query(
    'INSERT INTO supplier VALUES ($1,$2,$3,$4)',
    [id_supplier.toUpperCase(), nama_supplier.toUpperCase(), alamat.toUpperCase(), no_telp],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(`User added with ID: ${results}`);
    }
  );
};

const handleItemPut = (req, res, pool) => {
  const { id_supplier, nama_supplier, alamat, no_telp } = req.body;

  pool.query(
    'UPDATE supplier SET nama_supplier = $2, alamat = $3, no_telp=$4  WHERE id_supplier = $1',
    [id_supplier.toUpperCase(), nama_supplier.toUpperCase(), alamat.toUpperCase(), no_telp],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(`User modified with ID: ${id_supplier}`);
    }
  );
};

const handleItemDelete = (req, res, pool) => {
  const { id_supplier } = req.body;
  pool.query('DELETE FROM supplier WHERE id_supplier = $1', [id_supplier], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(`User deleted with ID: ${id_supplier}`);
  });
};

module.exports = {
  handleItemGet: handleItemGet,
  handleItemPost: handleItemPost,
  handleItemPut: handleItemPut,
  handleItemDelete: handleItemDelete,
};
