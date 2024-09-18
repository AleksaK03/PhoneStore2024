const name = document.getElementById('name');
const screen = document.getElementById('screen');
const cpu = document.getElementById('cpu');
const battery = document.getElementById('battery');
const img = document.getElementById('img');
const price = document.getElementById('price');

document.getElementById('save').addEventListener('click', () => {
    if (name.value == null || name.value === '') {
        alert('The phone name cannot be empty.');
        return;
    }

    if (screen.value === null || screen.value === '') {
        alert('The phone screen cannot be empty.');
        return;
    }

    if (cpu.value === null || cpu.value === '') {
        alert('The phone cpu cannot be empty.');
        return;
    }

    if (battery.value === null || battery.value === '') {
        alert('The phone battery cannot be empty.');
        return;
    }

    if (img.value === null || img.value === '') {
        alert('The phone img cannot be empty.');
        return;
    }

    if (price.value === null || price.value === '') {
        alert('The product price cannot be empty.');
        return;
    }

    fetch('http://localhost:8080/api/phone', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            screen: screen.value,
            cpu: cpu.value,
            battery: battery.value,
            img: img.value,
            price: price.value
        })
    }).then(rsp => {
        if (rsp.ok) {
            window.location.href = './index.html';
            return;
        }
        alert(`Failed to add phone. Please try again. (HTTP ${rsp.status})`);
    });
});
