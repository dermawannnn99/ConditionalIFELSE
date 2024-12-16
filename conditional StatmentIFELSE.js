let Nama = 'dio'
const umur = 12
let ApakahDioMencuri = 0
/**
 * Input 1 Jika dio Mencuri
 * Input 0 Jika dio Tidak Mencuri
 */

let StatusCurian //utk menyimpan condition
if (ApakahDioMencuri == 1) {
    StatusCurian = 'Terbukti Mencuri'
}
else {
    StatusCurian = 'Tidak Terbukti Mencuri'
}

console.log(
    `Nama ia adalah ${Nama}, berumur ${umur} tahun, dan semalam ia ${StatusCurian}`
)
