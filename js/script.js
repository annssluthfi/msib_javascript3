function dataPerson() {
	let forms = document.getElementById('frm');
	let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;

    let input = 'Nama Anda: ' + nama + '<br> Pekerjaan Anda: ' + pekerjaan + '<br> Hobi Anda: ' + hobby;
    let no_input = 'Tolong masukkan data diri terlebih dahulu';

    let hasil = (nama && pekerjaan && hobby != '') ? input : no_input;

    document.getElementById('hasil').innerHTML=hasil;

	// tugasnya adalah lengkapi kode berikut dan tampilkan hasilnya ada pada HTML
	// 1. isian nama
	// 2. isian pekerjaan
	// 3. isian hobby
}
