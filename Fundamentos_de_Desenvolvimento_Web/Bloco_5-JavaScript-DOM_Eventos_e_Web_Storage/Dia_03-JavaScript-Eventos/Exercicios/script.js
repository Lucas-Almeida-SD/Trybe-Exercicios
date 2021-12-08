function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //QUESTÃO 1

  function addMonthDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const holidays = [24, 25, 31];
    const fridays = [4, 11, 18, 25];
    let ulDays = document.querySelector('.week-days');
    for (let monthDay of dezDaysList) {
        let day = document.createElement('li');
        day.id = 'days';
        day.classList.add('day');
        if (holidays.indexOf(monthDay) !== -1) {
            day.classList.add('holiday');
        }
        if (fridays.indexOf(monthDay) !== -1) {
            day.classList.add('friday');
        }
        day.innerText = monthDay;
        ulDays.appendChild(day);
    }
  }
  
  addMonthDays();


  //QUESTÃO 2

  function holidays(string) {
    let divButton = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerText = string;
    divButton.appendChild(button);
  }

  holidays('Feriados');



  //QUESTÃO 3
  function holidaysButtonOnOff() {
    let button = document.querySelector('#btn-holiday');
    button.addEventListener('click', buttonEvent);

    function buttonEvent() {
      let backgroundColor = document.getElementById('btn-holiday').style.backgroundColor;
      let holidays = document.getElementsByClassName('holiday');
      for (let index = 0; index < holidays.length; index += 1) {
        if (backgroundColor === 'rgb(236, 57, 65)') {
          document.getElementById('btn-holiday').style.backgroundColor = 'rgb(238,238,238)';
          holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        }
        else {
          document.getElementById('btn-holiday').style.backgroundColor = 'rgb(236, 57, 65)';
          holidays[index].style.backgroundColor = 'rgb(236, 57, 65)';
        }
      }
    }
  }

  holidaysButtonOnOff();
  

  //QUESTÃO 4
  function fridayButtonOnOf() {
    let divButton = document.querySelector('.buttons-container');
    let fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerText = 'Sexta-feira';
    divButton.appendChild(fridayButton);
  }

  fridayButtonOnOf();