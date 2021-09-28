/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) { 
    if (salary < 5000000) {
        return "Pajak yang harus dibayar" + 0 * salary;
    }

    else if (salary < 10000000) {
        return "Pajak yang harus dibayar" + 0.05 * salary;
    }
    else if (salary < 20000000) {
        return "Pajak yang harus dibayar" + 0.1 * salary;
    }
    else if (20000000 <= salary) {
        return "Pajak yang harus dibayar" + 0.2 * salary;
    }
 }
 console.log(taxCalc(20000000));
    



/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height, weight) { 
    let $BMI = (weight/height**2) * 10000
    if ($BMI < 18.5) {
        return "under weight"
    }
    else if ($BMI < 24.9) {
        return "normal"
    }
    if ($BMI < 29.9) {
        return "over weightt"
    }
    if ($BMI < 34.9) {
        return "obsese"
    }
    if ($BMI >= 35) {
        return "under weight"
    }
}
console.log(checkBMI(170, 80));


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
    firstChart = sentence.split(" ")
    for (let index = 0; index < firstChart.length; index++) {
     ubah = firstChart[index].toUpperCase()
     firstChart[index] = ubah.charAt(0) + firstChart[index].substring(1)
    }
    let firstChart1 = ""
    for (let index = 0; index < firstChart.length; index++) {
        firstChart1 = firstChart1 + firstChart[index] + " "
        
    }
    return firstChart1;
}

  
  console.log(convToUpperCase("hello bandung"));
  


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

function firstNonRepeatedChar(kata) {
    let huruf;

    for (let index = 0; index < kata.length; index++) {
        huruf = kata[index];
        if(huruf == " "){
            return "kata tidak boleh dipisah";
        }
        
    }

    for (let index = 0; index < kata.length; index++) {
        huruf = kata[index];
        let cek = false;
        for (let j = 0; j < kata.length; j++) {
            if(huruf == kata[j] && j != index){
                cek = true;
                break;
}
        }
        if(cek == false){
            return huruf;
            break;
        }
    }
    return "";
}
console.log(firstNonRepeatedChar("hello world"));
console.log(firstNonRepeatedChar("alloha"));
console.log(firstNonRepeatedChar("wooohoowh"));