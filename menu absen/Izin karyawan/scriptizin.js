document.addEventListener('DOMContentLoaded', function() {
    const selectEntries = document.querySelector('.entries-container select');
    const tableBody = document.querySelector('tbody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const statusFilter = document.querySelector('.search-container select');

    selectEntries.addEventListener('change', function() {
        filterTable();
    });

    statusFilter.addEventListener('change', function() {
        filterTable();
    });

    function filterTable() {
        const value = parseInt(selectEntries.value, 10);
        const statusText = statusFilter.value;

        tableBody.innerHTML = '';
        rows.filter(row => {
            const cells = row.querySelectorAll('td');
            const status = cells[6].textContent.toLowerCase();
            const matchesStatus = statusText === '' || status === statusText;
            return matchesStatus;
        }).slice(0, value).forEach(row => tableBody.appendChild(row));
    }

    // Initialize table with default value
    selectEntries.dispatchEvent(new Event('change'));
});
