document.querySelectorAll('.accordion-triger').forEach((item) => {

    item.addEventListener('click', () => {

        item.parentNode.classList.toggle('accordion-item-active')

    })

});



document.getElementById('my-form').addEventListener('submit', function(event) {

    event.preventDefault();



    const formData = new FormData(this);

    const data = {};



    formData.forEach((value, key) => {

        data[key] = value;

    });



    fetch('https://your-server-endpoint.com/api', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(data) // Перетворення даних на JSON

    })

    .then(response => response.json())

    .then(data => {

        document.getElementById('response').innerText = 'Дані успішно відправлені: ' + JSON.stringify(data);

    })

    .catch(error => {

        document.getElementById('response').innerText = 'Виникла помилка при відправленні даних: ' + error;

    });

});
