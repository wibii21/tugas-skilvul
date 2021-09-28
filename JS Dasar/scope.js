/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// Jawab = - Terdapat dua jenis variabel scope yang ada di JavaScript yaitu Global Variable dan Local Variable 
///         - Variable local scope atau variable fungsi lokal adalah variabel yang dideklarasikan di dalam fungsi pada JavaScript. Variabel lokal hanya dapat diakses dari dalam fungsi tersebut.
///           Global variabel adalah Semua variabel yang dibuat di luar fungsi.
///         - function simpleFunction(){
 ///          var makanan = "Bakso"; (Lokal)
 ///          function simpleFunction() {  
///            makanan = "Bakso"; (Global)


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// Jawab : - Mariah 
///         - Karena yang dimasukan kedalam console log adalah printfirstname dari "Mariah Carey"
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
