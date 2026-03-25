function islemYap() {

    let bakiye = 5000;
    let islem = prompt(
        "İşlem Seçiniz:\n" +
        "1 - Bakiye Görüntüle\n" +
        "2 - Para Çek\n" +
        "3 - Para Yatır"
    );
    switch (islem) {
        case "1":
            alert("Bakiyeniz: " + bakiye + " TL");
            break;
        case "2":
            let cekilecek = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));

            if (cekilecek > bakiye) {
                alert("Yetersiz bakiye!");
            } else {
                bakiye -= cekilecek;
                alert("Kalan bakiye: " + bakiye + " TL");
            }
            break;
        case "3":
            let yatirilacak = Number(prompt("Yatırmak istediğiniz tutarı giriniz:"));
            bakiye += yatirilacak;
            alert("Yeni bakiye: " + bakiye + " TL");
            break;
        default:
            alert("Geçersiz işlem kodu seçtiniz.");
    }
}