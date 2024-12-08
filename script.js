// Создаем контейнер для калькулятора
const calculator = document.createElement('div');
calculator.style.width = '300px';
calculator.style.margin = '50px auto';
calculator.style.padding = '20px';
calculator.style.borderRadius = '10px';
calculator.style.textAlign = 'center';
calculator.style.backgroundColor = '#f9f9f9';
calculator.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

// Запрашиваем первое число через prompt
const num1 = parseFloat(prompt('Введите 1-е число:'));

// Функция для получения корректного выбора оператора
function getOperator() {
  let operatorChoice;
  do {
    operatorChoice = prompt(`Выберите оператор:\n1. +\n2. -\n3. *\n4. /`);
    if (!['1', '2', '3', '4'].includes(operatorChoice)) {
      alert('Неверный выбор. Пожалуйста, введите 1, 2, 3 или 4.');
    }
  } while (!['1', '2', '3', '4'].includes(operatorChoice));
  return operatorChoice;
}

// Получаем выбор оператора
const operatorChoice = getOperator();

// Определяем оператор
let operator;
if (operatorChoice === '1') {
  operator = '+';
} else if (operatorChoice === '2') {
  operator = '-';
} else if (operatorChoice === '3') {
  operator = '*';
} else if (operatorChoice === '4') {
  operator = '/';
}

// Запрашиваем второе число через prompt
const num2 = parseFloat(prompt('Введите 2-е число:'));

// Создаем div для отображения примера
const exampleDiv = document.createElement('div');
exampleDiv.style.marginBottom = '20px';
exampleDiv.style.padding = '20px';
exampleDiv.style.borderRadius = '8px';
exampleDiv.style.fontSize = '36px';
exampleDiv.style.fontWeight = 'bold';
exampleDiv.style.fontFamily = "'Arial', sans-serif";
exampleDiv.style.color = 'grey';
exampleDiv.style.backgroundColor = '#FFEB3B'; // Желтый фон
exampleDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
exampleDiv.textContent = `${num1} ${operator} ${num2}`;
calculator.appendChild(exampleDiv);

// Создаем кнопку для вычисления
const calculateButton = document.createElement('button');
calculateButton.textContent = 'Проверить';
calculateButton.style.padding = '15px';
calculateButton.style.marginTop = '20px';
calculateButton.style.backgroundColor = '#4CAF50';
calculateButton.style.color = 'white';
calculateButton.style.border = 'none';
calculateButton.style.borderRadius = '5px';
calculateButton.style.fontSize = '22px';
calculateButton.style.fontWeight = 'bold';
calculateButton.style.cursor = 'pointer';
calculateButton.style.transition = 'all 0.3s ease';

// Добавляем событие для кнопки
calculateButton.addEventListener('click', () => {
  let result;

  // Выполняем вычисление
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num2 !== 0 ? num1 / num2 : 'Ошибка: деление на ноль!';
  }

  // Увеличиваем кнопку и показываем результат
  calculateButton.style.transform = 'scale(1.2)';
  calculateButton.textContent = ` Ответ: ${result}`;

  // Возвращаем размер кнопки через 1 секунду
  setTimeout(() => {
    calculateButton.style.transform = 'scale(1)';
  }, 1000);
});

// Добавляем элементы на страницу
calculator.appendChild(calculateButton);
document.body.appendChild(calculator);



