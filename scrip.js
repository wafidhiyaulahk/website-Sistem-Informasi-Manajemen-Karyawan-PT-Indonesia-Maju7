function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('closed');
    mainContent.classList.toggle('full');
}

// Fetch data from the absensi link
async function fetchData() {
    const response = await fetch('https://example.com/absensi'); // Replace with your actual link
    const data = await response.json();
    return data;
}

// Chart.js setup for attendance
async function setupAttendanceChart() {
    const data = await fetchData();
    const ctxAttendance = document.getElementById('attendanceChart').getContext('2d');
    const attendanceChart = new Chart(ctxAttendance, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: 'Masuk',
                    data: data.masuk,
                    backgroundColor: 'rgba(41, 128, 185, 0.2)',
                    borderColor: 'rgba(41, 128, 185, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Tidak Masuk',
                    data: data.tidakMasuk,
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Chart.js setup for overtime
async function setupOvertimeChart() {
    const data = await fetchData();
    const ctxOvertime = document.getElementById('overtimeChart').getContext('2d');
    const overtimeChart = new Chart(ctxOvertime, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: 'Lembur',
                    data: data.lembur,
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Tidak Lembur',
                    data: data.tidakLembur,
                    backgroundColor: 'rgba(155, 89, 182, 0.2)',
                    borderColor: 'rgba(155, 89, 182, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

setupAttendanceChart();
setupOvertimeChart();

// Add event listeners to change color on click
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.sidebar a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

const karyawan = document.getElementById('karyawan');
const jabatan = document.getElementById('jabatan');
const divisi = document.getElementById('divisi');

// Contoh penggunaan
karyawan.addEventListener('click', function() {
  // Logika untuk tombol karyawan
});

jabatan.addEventListener('click', function() {
  // Logika untuk tombol jabatan
});

divisi.addEventListener('click', function() {
  // Logika untuk tombol divisi
});

function handleClick(section) {
    document.getElementById('content').innerHTML = document.getElementById(section).innerHTML;
}

function logout() {
    alert('Logging out...');
}
function loadKaryawanContent() {
    fetch('menu karyawan/karyawan/data karyawan.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('karyawan-content').innerHTML = data;
        document.getElementById('karyawan-content').style.display = 'block';
      })
      .catch(error => console.error('Error:', error));
  }

  