const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id == null || id === '') {
    window.location.href = './customers.html';
}

const breadcrumb = document.getElementById('breadcrumb');
const cid = document.getElementById('id');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const updated = document.getElementById('updated');

function formatDate(iso) {
    if (iso == null) return 'N/A'
    return new Date(iso).toLocaleString('sr-RS')
}

fetch('http://localhost:8080/api/customer/' + id)
    .then(rsp => {
        if (rsp.status === 200)
            return rsp.json();

        alert('Customer not found');
        window.location.href = './customers.html';
    })
    .then(data => {
        breadcrumb.innerText = `${data.firstName}`;
        cid.value = data.id;
        firstName.value = data.firstName;
        lastName.value = data.lastName;
        email.value = data.email;

        updated.value = formatDate(data.updatedAt);

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8080/api/customer/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    firstName: firstName.value,
                    lastName: lastName.value,
                    email: email.value,
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './customers.html';
                        return;
                    }
                    alert(`Changing customer wasn't successful (HTTP ${rsp.status})`);
                });
        });
    });
