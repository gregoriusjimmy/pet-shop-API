const handleItemGet = (req, res, pool) => {
  pool.query(
    'SELECT * FROM jurnal ORDER BY tgl_transaksi, kd_transaksi',
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
    kd_transaksi,
    tgl_transaksi,
    no_akun,
    nama_akun,
    keterangan,
    debit,
    kredit,
  } = req.body;

  pool.query(
    'INSERT INTO jurnal(kd_transaksi,tgl_transaksi,no_akun,nama_akun,keterangan,debit,kredit) VALUES ($1,$2,$3,$4,$5,$6,$7)',
    [
      kd_transaksi.toUpperCase(),
      tgl_transaksi,
      no_akun,
      nama_akun.toUpperCase(),
      keterangan,
      debit,
      kredit,
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

module.exports = {
  handleItemGet: handleItemGet,
  handleItemPost: handleItemPost,
  // handleItemPut: handleItemPut,
  // handleItemDelete: handleItemDelete,
};
