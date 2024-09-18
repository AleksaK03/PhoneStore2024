const table = document.getElementById('customer-table');
const template = document.getElementById('customer');

function formatDate(iso) {
    if (iso == null) return 'N/A'
    return new Date(iso).toLocaleString('sr-RS')
}

function fetchProducts(url = '') {
    fetch(`http://localhost:8080/api/customer${url}`)
        .then(rsp => rsp.json())
        .then(data => {
            if (data.length === 0) {
                alert('Customers not found');
                fetchProducts();
                return;
            }
            data.forEach(customer => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.id').innerText = customer.id;
                copy.querySelector('.first_name').innerText = customer.firstName;
                copy.querySelector('.last_name').innerText = customer.lastName;
                copy.querySelector('.email').innerText = customer.email;
                copy.querySelector('.updated').innerText = formatDate(customer.updatedAt);
                copy.querySelector('.edit').href = `./edit-customer.html?id=${customer.id}`;
                copy.querySelector('.remove').addEventListener('click', () => {
                    if (confirm(`Do you want to delete customer ${customer.firstName} ${customer.lastName}`)) {
                        fetch(`http://localhost:8080/api/customer/${customer.id}`, {
                            method: 'DELETE',
                        })
                            .then(rsp => {
                                if (rsp.status === 204) {
                                    window.location.href = './customers.html';
                                    return;
                                }
                                alert(`Deleting customer wasn't successful (HTTP ${rsp.status})`);
                            });
                    }
                });
                table.appendChild(copy);
            });
        });
}

fetchProducts();
