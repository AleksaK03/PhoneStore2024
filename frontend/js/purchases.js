const table = document.getElementById('purchases-table');
const template = document.getElementById('purchases');

function formatDate(iso) {
    if (iso == null) return 'N/A'
    return new Date(iso).toLocaleString('sr-RS')
}

function fetchPurchases(url = '') {
    fetch(`http://localhost:8080/api/purchase${url}`)
        .then(rsp => rsp.json())
        .then(data => {
            if (data.length === 0) {
                alert('Purchase not found');
                fetchProducts();
                return;
            }
            data.forEach(purchase => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.id').innerText = purchase.id;
                copy.querySelector('.customer_full_name').innerText = `${purchase.customer.firstName} ${purchase.customer.lastName}`;
                copy.querySelector('.phone_name').innerText = purchase.phone.name;
                copy.querySelector('.phone_price').innerText = `${purchase.phone.price} $`;
                copy.querySelector('.total_quantity').innerText = purchase.quantity;
                const total = Math.round(purchase.quantity * purchase.phone.price);
                copy.querySelector('.total_price').innerText = `${total} $`;

                table.appendChild(copy);
            });
        });
}

fetchPurchases();
