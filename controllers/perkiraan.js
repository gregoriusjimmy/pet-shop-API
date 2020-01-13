const DATA_AKUN = require('../data_akun');

// const convertDataAkun = () => {
//   const DataAkunArray = [];
//   let result = Object.entries(DATA_AKUN);
//   console.log(result);
// };

// const test = () => {
//   convertDataAkun();
// };
const handleItemPost = (req, res, pool) => {
  const { startDate, endDate } = req.body;

  const dataAkunArray = Object.entries(DATA_AKUN);
  const dataPerkiraan = [];
  const query =
    ' SELECT * FROM jurnal WHERE no_akun = ($1) AND tgl_transaksi BETWEEN ($2) AND ($3) ';
  for (let i = 0; i < dataAkunArray.length; i++) {
    pool.query(
      query,
      [dataAkunArray[i][0].toString(), startDate, endDate],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).json('unable to fetch');
        } else if (results.rows.length < 1) {
          console.log('skip');
        } else {
          dataPerkiraan.push(results.rows);
        }
      }
    );
  }
  setTimeout(() => {
    // console.log(dataPerkiraan);
    res.status(200).json(dataPerkiraan);
  }, 2000);
};
const handleItemGet = (req, res, pool) => {
  const dataAkunArray = Object.entries(DATA_AKUN);
  const dataPerkiraan = [];

  const query =
    'SELECT * FROM jurnal WHERE no_akun = ($1) ORDER BY tgl_transaksi ';
  for (let i = 0; i < dataAkunArray.length; i++) {
    pool.query(query, [dataAkunArray[i][0].toString()], (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).json('unable to fetch');
      } else if (results.rows.length < 1) {
        console.log('skip');
      } else {
        dataPerkiraan.push(results.rows);
      }
    });
  }

  setTimeout(() => {
    // console.log(dataPerkiraan);
    res.status(200).json(dataPerkiraan);
  }, 2000);
};

module.exports = {
  handleItemGet: handleItemGet,

  handleItemPost: handleItemPost,
  // handleItemPut: handleItemPut,
  // handleItemDelete: handleItemDelete,
};
