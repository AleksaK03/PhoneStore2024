const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id == null || id === '') {
    window.location.href = './index.html';
}

const breadcrumb = document.getElementById('breadcrumb');
const pid = document.getElementById('id');
const name = document.getElementById('name');
const screen = document.getElementById('screen');
const cpu = document.getElementById('cpu');
const battery = document.getElementById('battery');
const img = document.getElementById('img');
const price = document.getElementById('price');
const updated = document.getElementById('updated');

function formatDate(iso) {
    if (iso == null) return 'N/A'
    return new Date(iso).toLocaleString('sr-RS')
}

fetch('http://localhost:8080/api/phone/' + id)
    .then(rsp => {
        if (rsp.status === 200)
            return rsp.json();

        alert('Phone not found');
        window.location.href = './index.html';
    })
    .then(data => {
        breadcrumb.innerText = `${data.name}`;
        pid.value = data.id;
        name.value = data.name;
        screen.value = data.screen;
        cpu.value = data.cpu;
        battery.value = data.battery;
        img.value = data.img;
        price.value = data.price;

        updated.value = formatDate(data.updatedAt);

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8080/api/phone/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    screen : screen.value,
                    cpu : cpu.value,
                    battery : battery.value,
                    img : img.value,
                    price: price.value
                })
            })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './index.html';
                        return;
                    }
                    alert(`Changing phone wasn't successful (HTTP ${rsp.status})`);
                });
        });
    });
