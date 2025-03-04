document.addEventListener("DOMContentLoaded", async function () {
    const tableBody = document.getElementById("employee-table");
    const apiUrl = "https://jsonplaceholder.typicode.com/users"; 

    async function fetchEmployees() {
        try {
            const response = await fetch(apiUrl);
            const employees = await response.json();
            renderEmployees(employees);
        } catch (error) {
            console.error("Erreur de chargement :", error);
        }
    }

    function renderEmployees(employees) {
        tableBody.innerHTML = "";
        employees.forEach(emp => {
            tableBody.innerHTML += `
                <tr class="border-t">
                    <td class="p-2">${emp.name}</td>
                    <td class="p-2">${emp.email}</td>
                    <td class="p-2">${emp.phone}</td>
                    <td class="p-2">
                        <button class="bg-yellow-500 text-white px-2 py-1 rounded">Modifier</button>
                        <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
                    </td>
                </tr>`;
        });
    }

    fetchEmployees();
});
