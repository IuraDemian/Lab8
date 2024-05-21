// Отримання доступу до таблиці з курсами валют після завантаження сторінки
document.addEventListener('DOMContentLoaded', function() 
{
    const currencyTable = document.getElementById('currency-body');

    // Функція для додавання рядка до таблиці
    function addRowToTable(currency, rate, date) 
    {
        const row = document.createElement('tr');
        row.innerHTML = 
        `
            <td>${currency}</td>
            <td>${rate}</td>
            <td>${date}</td>
        `;
        currencyTable.appendChild(row);
    }

    // Отримання курсу валют з JSON
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(response => response.json())
        .then(data => 
            {
                // Виведення даних про курс валют у табличну форму
                data.forEach
                (item => {addRowToTable(item.txt, item.rate, item.exchangedate);});
            })
        .catch(error => {console.error('Помилка отримання даних:', error)});
});
