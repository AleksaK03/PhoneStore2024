const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');

document.getElementById('save').addEventListener('click', () => {
    if (firstName.value == null || firstName.value === '') {
        alert('The customer\'s first name cannot be empty.');
        return;
    }

    if (lastName.value === null || lastName.value === '') {
        alert('The customer\'s last name cannot be empty.');
        return;
    }

    if (email.value === null || email.value === '') {
        alert('The customer email cannot be empty.');
        return;
    }

    fetch('http://localhost:8080/api/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
        })
    }).then(rsp => {
        if (rsp.ok) {
            window.location.href = './customers.html';
            return;
        }
        alert(`Failed to add customer. Please try again. (HTTP ${rsp.status})`);
    });
});
