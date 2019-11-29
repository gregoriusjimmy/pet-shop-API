const handleItemGet = (req, res, pool) => {
  pool.query("SELECT * FROM pembeli ORDER BY id_pembeli", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const handleItemPost = (req, res, pool) => {
  const { id_pembeli, nama, alamat, no_telp } = req.body;

  pool.query("INSERT INTO pembeli VALUES ($1,$2,$3,$4)", [id_pembeli, nama, alamat, no_telp], (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).json(`User added with ID: ${results.insertId}`);
  });
};

const handleItemPut = (req, res, pool) => {
  const { id_pembeli, nama, alamat, no_telp } = req.body;

  pool.query(
    "UPDATE pembeli SET nama = $2, alamat = $3, no_telp= $4 WHERE id_pembeli = $1",
    [id_pembeli, nama, alamat, no_telp],
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
  const { id_pembeli } = req.body;
  pool.query("DELETE FROM pembeli WHERE id_pembeli = $1", [id_pembeli], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json("User deleted with ID:");
  });
};

module.exports = {
  handleItemGet: handleItemGet,
  handleItemPost: handleItemPost,
  handleItemPut: handleItemPut,
  handleItemDelete: handleItemDelete
};
