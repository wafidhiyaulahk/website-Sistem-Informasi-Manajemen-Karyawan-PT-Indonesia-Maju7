const data = [
    { no: 1, kode: 'MGR001', nama: 'Yovan Fiqri', email: 'yf@gmail.com', alamat: 'Jl. Percetakan Negara No. 45, Gang J, Rt 001/Rw 09 Cempaka Putih', jabatan: 'MGR' },
    { no: 2, kode: 'DK002', nama: 'Renate Nindya', email: 'rennindyaa@gmail.com', alamat: 'Solo', jabatan: 'DK' },
    { no: 3, kode: 'STF003', nama: 'Dian Prasetyo', email: 'dian.p@gmail.com', alamat: 'Yogyakarta', jabatan: 'STF' },
    { no: 4, kode: 'SPV004', nama: 'Faisal Rahman', email: 'faisalr@gmail.com', alamat: 'Jl. Diponegoro No. 21, Bandung', jabatan: 'SPV' },
    { no: 5, kode: 'HRD005', nama: 'Aisyah Nur', email: 'aisyahnur@gmail.com', alamat: 'Jl. Merdeka No. 10, Jakarta', jabatan: 'HRD' },
    { no: 6, kode: 'TI006', nama: 'Budi Santoso', email: 'budi.s@gmail.com', alamat: 'Surabaya', jabatan: 'TI' },
    { no: 7, kode: 'MGR007', nama: 'Clara Setiawan', email: 'claras@gmail.com', alamat: 'Medan', jabatan: 'MGR' },
    { no: 8, kode: 'KOM008', nama: 'Eka Putri', email: 'eka.putri@gmail.com', alamat: 'Jl. Raya Sukabumi, Sukabumi', jabatan: 'KOM' },
    { no: 9, kode: 'CFO009', nama: 'Gilang Saputra', email: 'gilangs@gmail.com', alamat: 'Semarang', jabatan: 'CFO' },
    { no: 10, kode: 'CMO010', nama: 'Hana Pramesti', email: 'hana.pr@gmail.com', alamat: 'Jl. Sutera, Tangerang', jabatan: 'CMO' },
    { no: 11, kode: 'SPV011', nama: 'Irfan Hidayat', email: 'irfanh@gmail.com', alamat: 'Balikpapan', jabatan: 'SPV' },
    { no: 12, kode: 'CEO012', nama: 'Joko Widodo', email: 'jokow@gmail.com', alamat: 'Jl. Veteran No. 15, Surakarta', jabatan: 'CEO' },
    { no: 13, kode: 'STF013', nama: 'Karen Hartanto', email: 'karenh@gmail.com', alamat: 'Denpasar', jabatan: 'STF' },
    { no: 14, kode: 'MGR014', nama: 'Lina Saputri', email: 'linas@gmail.com', alamat: 'Bandung', jabatan: 'MGR' },
    { no: 15, kode: 'DK015', nama: 'Mahesa Wijaya', email: 'mahesaw@gmail.com', alamat: 'Makassar', jabatan: 'DK' },
    { no: 16, kode: 'MP016', nama: 'Nina Kartika', email: 'ninak@gmail.com', alamat: 'Jl. Jendral Sudirman, Palembang', jabatan: 'MP' },
    { no: 17, kode: 'TI017', nama: 'Omar Abdullah', email: 'omar.abd@gmail.com', alamat: 'Pekanbaru', jabatan: 'TI' },
    { no: 18, kode: 'HRD018', nama: 'Putri Ayu', email: 'putri.ayu@gmail.com', alamat: 'Pontianak', jabatan: 'HRD' },
    { no: 19, kode: 'CIO019', nama: 'Qori Ananda', email: 'qorian@gmail.com', alamat: 'Jl. Kaliurang, Yogyakarta', jabatan: 'CIO' },
    { no: 20, kode: 'COO020', nama: 'Rendi Saputra', email: 'rendi.s@gmail.com', alamat: 'Mataram', jabatan: 'COO' }
];


const entriesSelect = document.getElementById('entries');
const searchInput = document.getElementById('search');
const tableBody = document.getElementById('tableBody');
let sortDirection = true;

function renderTable(data, entries) {
    tableBody.innerHTML = '';
    for (let i = 0; i < entries && i < data.length; i++) {
        const row = data[i];
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.no}</td>
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
    }
}

function filterData(data, query) {
    return data.filter(row => 
        row.kode.toLowerCase().includes(query.toLowerCase()) || 
        row.nama.toLowerCase().includes(query.toLowerCase()) ||
        row.jabatan.toLowerCase().includes(query.toLowerCase())
    );
}

function sortData(data, column) {
    return data.sort((a, b) => {
        if (a[column] < b[column]) return sortDirection ? -1 : 1;
        if (a[column] > b[column]) return sortDirection ? 1 : -1;
        return 0;
    });
}

entriesSelect.addEventListener('change', (e) => {
    const entries = parseInt(e.target.value, 10);
    const filteredData = filterData(data, searchInput.value);
    renderTable(filteredData, entries);
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    const entries = parseInt(entriesSelect.value, 10);
    const filteredData = filterData(data, query);
    renderTable(filteredData, entries);
});

document.querySelectorAll('th[data-column]').forEach(th => {
    th.addEventListener('click', () => {
        const column = th.getAttribute('data-column');
        sortDirection = !sortDirection;
        const sortedData = sortData(data, column);
        const entries = parseInt(entriesSelect.value, 10);
        renderTable(sortedData, entries);
        document.querySelectorAll('.sort-icon').forEach(icon => icon.className = 'fas fa-sort sort-icon');
        th.querySelector('.sort-icon').className = sortDirection ? 'fas fa-sort-up sort-icon' : 'fas fa-sort-down sort-icon';
    });
});

// Initial render
renderTable(data, parseInt(entriesSelect.value, 10));
