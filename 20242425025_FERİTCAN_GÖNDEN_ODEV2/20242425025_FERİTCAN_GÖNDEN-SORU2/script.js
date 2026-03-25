function kontrolEt() {
    let yas = Number(prompt("Yaşınızı giriniz:"));

    if (isNaN(yas)) {
        alert("Geçerli bir yaş giriniz!");
        return;
    }

    let ogrenciMi = confirm("Öğrenci misiniz?");

    if (yas < 18) {
        alert("Reşit değilsiniz.");
    } 
    else if (yas >= 18 && ogrenciMi) {
        alert("Hoşgeldiniz öğrenci!");
    } 
    else {
        alert("Hoşgeldiniz!");
    }
}