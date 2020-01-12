const DATA_AKUN = require('../data_akun');

// const convertDataAkun = () => {
//   const DataAkunArray = [];
//   let result = Object.entries(DATA_AKUN);
//   console.log(result);
// };

// const test = () => {
//   convertDataAkun();
// };
const handleItemGet = (req, res, pool) => {
  const dataAkunArray = Object.entries(DATA_AKUN);
  const dataPerkiraan = [];
  for (let i = 0; i < dataAkunArray.length; i++) {
    pool.query(
      'SELECT * FROM jurnal WHERE no_akun = ($1) ORDER BY tgl_transaksi ',
      [dataAkunArray[i][0].toString()],
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

module.exports = {
  handleItemGet: handleItemGet,
  // test: test,
  // handleItemPost: handleItemPost,
  // handleItemPut: handleItemPut,
  // handleItemDelete: handleItemDelete,
};
