
document.getElementById('list').addEventListener('click', () => {
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display= 'block';
});

document.getElementById('close').addEventListener('click', () => {
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display= 'none';
});
document.getElementById('services').addEventListener('click', () => {
    const dropdown=document.querySelector('#dropdown');
    dropdown.style.display= 'block';

});
document.getElementById('dropdown').addEventListener('mouseleave', () => {
    const dropdown=document.querySelector('#dropdown');
    dropdown.style.display= 'none';

});
