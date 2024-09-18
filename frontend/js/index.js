const phoneContainer = document.getElementById('phone-container');
const template = document.getElementById('phones');

function formatDate(iso) {
    if (iso == null) return 'N/A';
    return new Date(iso).toLocaleString('sr-RS');
}

function fetchPhones(url = '') {
    fetch(`http://localhost:8080/api/phone${url}`)
        .then(rsp => rsp.json())
        .then(data => {
            if (data.length === 0) {
                alert('Phone not found');
                fetchPhones();
                return;
            }
            data.forEach(phone => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.phone-img').src = phone.img;
                copy.querySelector('.name').innerText = phone.name;
                copy.querySelector('.screen').innerHTML = `<b>Screen:</b> ${phone.screen}`;
                copy.querySelector('.cpu').innerHTML = `<b>Processor:</b> ${phone.cpu}`;
                copy.querySelector('.battery').innerHTML = `<b>Battery capacity:</b> ${phone.battery}`;
                copy.querySelector('.price').innerHTML = `<b>Price:</b> ${phone.price} $`;
                copy.querySelector('.updated').innerText = `Updated at: ${formatDate(phone.updatedAt)}`;
                copy.querySelector('.edit').href = `./edit-phone.html?id=${phone.id}`;

                // Delete phone
                copy.querySelector('.remove').addEventListener('click', () => {
                    if (confirm(`Do you want to delete phone ${phone.name}?`)) {
                        fetch(`http://localhost:8080/api/phone/${phone.id}`, {
                            method: 'DELETE',
                        })
                            .then(rsp => {
                                if (rsp.status === 204) {
                                    window.location.href = './index.html';
                                    return;
                                }
                                alert(`Deleting phone wasn't successful (HTTP ${rsp.status})`);
                            });
                    }
                });

                const quantityInput = copy.querySelector('.quantity-input');
                copy.querySelector('.increase-quantity').addEventListener('click', () => {
                    let quantity = parseInt(quantityInput.value, 10);
                    quantityInput.value = quantity + 1;
                });

                copy.querySelector('.decrease-quantity').addEventListener('click', () => {
                    let quantity = parseInt(quantityInput.value, 10);
                    if (quantity > 1) {
                        quantityInput.value = quantity - 1;
                    }
                });

                copy.querySelector('.buy').addEventListener('click', () => {
                    const quantity = quantityInput.value;
                    const customerID = 1;

                    const purchaseData = {
                        phone: { id: phone.id },
                        customer: { id: customerID },
                        quantity: quantity
                    };

                    fetch('http://localhost:8080/api/purchase', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(purchaseData)
                    })
                        .then(rsp => {
                            if (rsp.ok) {
                                alert(`Phone ${phone.name} purchased successfully with quantity ${quantity}!`);
                                window.location.href = './purchases.html';
                                return;
                            }
                            alert(`Purchasing phone wasn't successful (HTTP ${rsp.status})`);
                        });
                });

                phoneContainer.appendChild(copy);
            });
        });
}

fetchPhones();
