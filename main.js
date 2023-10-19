import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

document.addEventListener('DOMContentLoaded', () => {
    let bokor = 0;
    let imghomoktovis_bogyos = 0;
    let imghomoktovis_parlat = 0;
    let imghomoktovis_szaritottbogyo = 0;
    let homoktovis_szaritottorlemeny = 0;
    document.getElementById('imgbokor').addEventListener('click', () => {
        bokor++;
        document.getElementById('bokor').textContent = `Képre kattintás: ${bokor}.`
    });

    document.getElementById('imghomoktovis_bogyos').addEventListener('click', () => {
        imghomoktovis_bogyos++;
        document.getElementById('homoktovis_bogyos').textContent = `Képre kattintás: ${imghomoktovis_bogyos}.`
    });

    document.getElementById('imghomoktovis_parlat').addEventListener('click', () => {
        imghomoktovis_parlat++;
        document.getElementById('homoktovis_parlat').textContent = `Képre kattintás: ${imghomoktovis_parlat}.`
    });

    document.getElementById('imghomoktovis_szaritottbogyo').addEventListener('click', () => {
        imghomoktovis_szaritottbogyo++;
        document.getElementById('homoktovis_szaritottbogyo').textContent = `Képre kattintás: ${imghomoktovis_szaritottbogyo}.`
    });

    document.getElementById('imghomoktovis_szaritottorlemeny').addEventListener('click', () => {
        homoktovis_szaritottorlemeny++;
        document.getElementById('homoktovis_szaritottorlemeny').textContent = `Képre kattintás: ${homoktovis_szaritottorlemeny}.`
    });

    document.getElementById('fejlechatter').addEventListener('input', () => {
        document.getElementById('fejlec').style.backgroundColor = document.getElementById('fejlechatter').value;
    });
    
})