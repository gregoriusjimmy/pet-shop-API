const handleCreateLaporan = (req, res, database) => {
  const {
    idLaporan,
    namaLaporan,
    tglLaporan,
    dataPerkiraan,
    dataSaldoAll,
  } = req.body;
  //laporanRugiLaba
  let pendapatan = getSaldoFromPerkiraan(dataSaldoAll, '41');
  let bebanPerlengkapan = getSaldoFromPerkiraan(dataSaldoAll, '51');
  let bebanGaji = getSaldoFromPerkiraan(dataSaldoAll, '52');
  let bebanSewa = getSaldoFromPerkiraan(dataSaldoAll, '53');
  let bebanListrik = getSaldoFromPerkiraan(dataSaldoAll, '54');
  let bebanTelepon = getSaldoFromPerkiraan(dataSaldoAll, '55');
  let bebanPenyusutan = getSaldoFromPerkiraan(dataSaldoAll, '57');
  let bebanArray = [
    bebanPerlengkapan,
    bebanGaji,
    bebanSewa,
    bebanListrik,
    bebanTelepon,
    bebanPenyusutan,
  ];
  let totalBeban = bebanArray.reduce((a, b) => a + b, 0);
  let laba = pendapatan - totalBeban;

  //perubahanModal
  let modal = getSaldoFromPerkiraan(dataSaldoAll, '31');
  let prive = getSaldoFromPerkiraan(dataSaldoAll, '32');
  let modalBaru = modal - prive;

  //neraca
  let kas = getSaldoFromPerkiraan(dataSaldoAll, '11');
  let piutangDagang = getSaldoFromPerkiraan(dataSaldoAll, '12');
  let perlengkapan = getSaldoFromPerkiraan(dataSaldoAll, '13');
  let sewaDibayarDimuka = getSaldoFromPerkiraan(dataSaldoAll, '14');
  let peralatan = getSaldoFromPerkiraan(dataSaldoAll, '15');
  let akumulasiPenyusutan = getSaldoFromPerkiraan(dataSaldoAll, '19');
  let hutangDagang = getSaldoFromPerkiraan(dataSaldoAll, '21');
  let totalPasiva = hutangDagang + modal;
  let aktivaTetap = peralatan - akumulasiPenyusutan;
  let aktivaLancar = kas + piutangDagang + perlengkapan + sewaDibayarDimuka;
  let totalAktiva = aktivaTetap + aktivaLancar;
  const dataLaporan = {
    idLaporan,
    namaLaporan,
    tglLaporan,
    laporanRugiLaba: {
      pendapatan,
      beban: {
        bebanPerlengkapan,
        bebanGaji,
        bebanSewa,
        bebanListrik,
        bebanTelepon,
        bebanPenyusutan,
      },
      totalBeban,
      laba,
    },
    perubahanModal: {
      modal,
      laba,
      prive,
      modalBaru,
    },
    neraca: {
      totalAktiva,
      totalPasiva,
      aktivaLancar: {
        kas,
        piutangDagang,
        perlengkapan,
        sewaDibayarDimuka,
      },
      aktivaTetap: {
        peralatan,
        akumulasiPenyusutan,
      },
      hutang: {
        hutangDagang,
      },
      modal: {
        modal,
      },
    },
  };
  console.log(dataLaporan);
};

const getSaldoFromPerkiraan = (dataSaldoAll, noAkun) => {
  const found = dataSaldoAll.find(element => element.no_akun == noAkun);
  if (found) {
    return parseInt(found.saldo.replace(/[Rp.]+/g, ''));
  } else {
    return null;
  }
  //  else if (found.jenis_saldo === 'KREDIT') {
  //     const convert = -Math.abs(parseInt(found.saldo.replace(/[Rp.]+/g, '')));
  //     return convert;
  //   }
};

module.exports = {
  handleCreateLaporan: handleCreateLaporan,
};
