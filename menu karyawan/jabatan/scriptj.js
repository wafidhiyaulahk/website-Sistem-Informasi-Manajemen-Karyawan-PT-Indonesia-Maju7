let currentPage = 1;
const rowsPerPage = 5;

function displayTable(page) {
    const table = document.getElementById("jabatanTable");
    const tr = table.getElementsByTagName("tr");
    const totalRows = tr.length - 1;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    for (let i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
    }

    const start = (page - 1) * rowsPerPage + 1;
    const end = page * rowsPerPage + 1;

    for (let i = start; i < end && i < tr.length; i++) {
        tr[i].style.display = "";
    }

    document.getElementById("page-info").innerText = `Showing ${start} to ${Math.min(end - 1, totalRows)} of ${totalRows} entries`;

    document.getElementById("prev-btn").classList.toggle("disabled", page === 1);
    document.getElementById("next-btn").classList.toggle("disabled", page === totalPages);
}

function changePage(page) {
    currentPage = page;
    displayTable(currentPage);
}

window.onload = function() {
    displayTable(currentPage);
}
