
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}

function showEntries() {
    var select, value, table, tr, i;
    select = document.getElementById("entriesSelect");
    value = select.value;
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        if (i <= value) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

window.onload = function() {
    showEntries();
}
