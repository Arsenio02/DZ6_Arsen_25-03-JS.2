// DZ - 1

const block = document.querySelector('.block');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let count = 1;

const fetchData = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
            `;
        });
};

const handlePrevClick = () => {
    count = Math.max(count - 1, 1);
    fetchData(count);
};

const handleNextClick = () => {
    count++;
    fetchData(count);
};

prevBtn.onclick = handlePrevClick;
nextBtn.onclick = handleNextClick;

fetchData(count);



// DZ - 2

// const url = 'https://jsonplaceholder.typicode.com/posts';
//
// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Ошибка при выполнении запроса:', error));
