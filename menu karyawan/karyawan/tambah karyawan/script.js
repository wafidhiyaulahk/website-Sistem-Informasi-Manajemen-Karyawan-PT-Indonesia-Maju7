// Array data karyawan yang sudah ada
const data = [
    { no: 1, kode: 'K001', nama: 'Yovan Fiqri', email: 'yf@gmail.com', alamat: 'Jl. Percetakan Negara No. 45, Gang J, Rt 001/Rw 09 Cempaka Putih', jabatan: 'Staff' },
    { no: 2, kode: 'K002', nama: 'Renate Nindya', email: 'rennindyaa@gmail.com', alamat: 'Solo', jabatan: 'Kepala Bagian' },
    // Tambahkan data karyawan lain sesuai kebutuhan
];

// Element HTML
const tableBody = document.getElementById('tableBody');

// Function untuk render tabel
function renderTable() {
    tableBody.innerHTML = '';
    data.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${row.kode}</td>
            <td>${row.nama}</td>
            <td>${row.email}</td>
            <td>${row.alamat}</td>
            <td>${row.jabatan}</td>
            <td class="actions">
                <i class="fas fa-eye view"></i>
                <i class="fas fa-edit edit"></i>
                <i class="fas fa-times delete"></i>
                <i class="fas fa-money-bill-wave money"></i>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// Function untuk menyimpan data karyawan baru
function simpanDataKaryawan() {
    const nama = document.getElementById('nama').value;
    const jenisKelamin = document.getElementById('jenis-kelamin').value;
    const email = document.getElementById('email').value;
    const noHp = document.getElementById('no-hp').value;
    const alamat = document.getElementById('alamat').value;
    const password = document.getElementById('password').value;
    const jabatan = document.getElementById('jabatan').value;
    const divisi = document.getElementById('divisi').value;

    // Buat data baru dan tambahkan ke array data
    const newData = {
        no: data.length + 1,
        kode: `K00${data.length + 1}`,  // Kode unik berdasarkan jumlah data
        nama: nama,
        jenis_kelamin: jenisKelamin,
        email: email,
        no_hp: noHp,
        alamat: alamat,
        password: password,
        jabatan: jabatan,
        divisi: divisi
    };

    data.push(newData);  // Tambahkan data baru ke array `data`

    // Tampilkan pesan konfirmasi
    alert('Data karyawan berhasil disimpan.');

    // Render ulang tabel untuk menampilkan data terbaru
    renderTable();
}

// Function untuk membatalkan dan mengosongkan form
function batal() {
    if (confirm("Apakah Anda yakin ingin membatalkan?")) {
        document.getElementById('form-karyawan').reset();
    }
}

// Initial render
renderTable();
