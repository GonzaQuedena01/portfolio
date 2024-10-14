const fetchLanguages = () => {
    const items = document.querySelectorAll('#techStack li');

    items.forEach(item => {
        item.style.display = (item.getAttribute('data-category') === 'language') ? 'block' : 'none';
    });
}

const fetchFrameworks = () => {
    const items = document.querySelectorAll('#techStack li');

    items.forEach(item => {
        item.style.display = (item.getAttribute('data-category') === 'framework') ? 'block' : 'none';
    });
}

document.getElementById('languagesBtn').addEventListener('click', fetchLanguages);
document.getElementById('frameworksBtn').addEventListener('click', fetchFrameworks);

document.addEventListener('DOMContentLoaded', fetchLanguages);