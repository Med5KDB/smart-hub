document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("employeeModal");
    const modalTitle = document.getElementById("modalTitle");
    const employeeForm = document.getElementById("employeeForm");
    const employeeId = document.getElementById("employeeId");
    const employeeName = document.getElementById("employeeName");
    const employeeEmail = document.getElementById("employeeEmail");
    const employeePhone = document.getElementById("employeePhone");

    const addEmployeeBtn = document.getElementById("addEmployeeBtn");
    const closeModalBtn = document.getElementById("closeModal");

    let editingEmployee = null;

    addEmployeeBtn.addEventListener("click", function () {
        modal.classList.remove("hidden");
        modalTitle.textContent = "Ajouter un employé";
        employeeForm.reset();
        editingEmployee = null;
    });

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("edit-btn")) {
            modal.classList.remove("hidden");
            modalTitle.textContent = "Modifier un employé";
            const row = event.target.closest("tr");

            editingEmployee = row;
            employeeId.value = row.dataset.id;
            employeeName.value = row.cells[0].textContent;
            employeeEmail.value = row.cells[1].textContent;
            employeePhone.value = row.cells[2].textContent;
        }
    });
    
    closeModalBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
    });

    employeeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = employeeName.value.trim();
        const email = employeeEmail.value.trim();
        const phone = employeePhone.value.trim();

        if (!name || !email || !phone) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        if (editingEmployee) {
            editingEmployee.cells[0].textContent = name;
            editingEmployee.cells[1].textContent = email;
            editingEmployee.cells[2].textContent = phone;
        } else {
            const tableBody = document.getElementById("employee-table");
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td class="p-2">${name}</td>
                <td class="p-2">${email}</td>
                <td class="p-2">${phone}</td>
                <td class="p-2">
                    <button class="edit-btn bg-yellow-500 text-white px-2 py-1 rounded">Modifier</button>
                    <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
                </td>
            `;
            tableBody.appendChild(newRow);
        }

        modal.classList.add("hidden");
        employeeForm.reset();
    });
});
