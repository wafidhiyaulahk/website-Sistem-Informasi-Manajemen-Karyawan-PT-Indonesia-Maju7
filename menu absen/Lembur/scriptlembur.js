function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("overtimeTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}

function changeStatus() {
    var select, selectedValue, table, tr, td, i;
    select = document.getElementById("rowSelect");
    selectedValue = select.value;
    table = document.getElementById("overtimeTable");
    tr = table.getElementsByTagName("tr");

    if (selectedValue !== "none") {
        td = tr[selectedValue].getElementsByTagName("td")[5]; // Status column
        if (td) {
            var newStatus = prompt("Enter new status for row " + selectedValue + " (current status: " + td.innerText + "):", td.innerText);
            if (newStatus !== null && newStatus !== "") {
                td.innerText = newStatus;
            }
        }
    } else {
        alert("Please select a row to change the status.");
    }
}

function changeEntries() {
    var select, value, table, tr, i;
    select = document.getElementById("entriesSelect");
    value = parseInt(select.value);
    table = document.getElementById("overtimeTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        if (i <= value) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function changeStatusWithOptions() {
    var select, selectedValue, table, tr, td, i;
    select = document.getElementById("rowSelect");
    selectedValue = select.value;
    table = document.getElementById("overtimeTable");
    tr = table.getElementsByTagName("tr");

    if (selectedValue !== "none") {
        td = tr[selectedValue].getElementsByTagName("td")[5]; // Status column
        if (td) {
            var newStatus = prompt("Enter new status for row " + selectedValue + " (current status: " + td.innerText + "):", td.innerText);
            if (newStatus === "Disetujui" || newStatus === "Menunggu Konfirmasi") {
                td.innerText = newStatus;
            } else {
                alert("Invalid status. Please enter 'Disetujui' or 'Menunggu Konfirmasi'.");
            }
        }
    } else {
        alert("Please select a row to change the status.");
    }
}