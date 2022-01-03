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
    ulDays.id = 'days';
    for (let monthDay of dezDaysList) {
        let day = document.createElement('li');
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
  function fridayButton() {
    let divButton = document.querySelector('.buttons-container');
    let fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerText = 'Sexta-feira';
    divButton.appendChild(fridayButton);
  }

  fridayButton();


  //QUESTÃO 5
  function fridayButtonOnOff() {
    const fridaysNumbers = [4, 11, 18, 25];
    let fridays = document.getElementsByClassName('friday');
    let fridayButton = document.querySelector('#btn-friday');
    fridayButton.addEventListener('click', fridayButtonEvent);

    function fridayButtonEvent() {
      for (let index = 0; index < fridays.length; index += 1)
        if (fridays[index].innerText === 'Sextooou') {
          fridays[index].innerText = fridaysNumbers[index]
      } else {
        fridays[index].innerText = 'Sextooou';
      }
    }
  }
  fridayButtonOnOff();


  //QUESTÃO 6
  function zoom() {
    let monthListItens = document.getElementsByClassName('day');
    for (let index = 0; index < monthListItens.length; index += 1) {
      monthListItens[index].addEventListener('mouseover', aumentar);
      monthListItens[index].addEventListener('mouseleave', reduzir);
    }
    
    function aumentar(element) {
      element.target.style.fontSize = '35px';
    }

    function reduzir(element) {
      element.target.style.fontSize = '';
    }
  }
  zoom();

  //QUESTÃO 7
  function adicionarTarefa() {
    const myTasks = document.querySelector('.my-tasks');
    const newTask = document.createElement('span');
    newTask.innerText = 'Projeto';
    myTasks.appendChild(newTask);
  }
  adicionarTarefa();

  //QUESTÃO 8
  const myTasks = document.querySelector('.my-tasks');
  function adicionarLegendaATarefa(cor) {
    const legenda = document.createElement('div');
    legenda.className = 'task';
    legenda.style.backgroundColor = cor;
    myTasks.appendChild(legenda);
  }
  adicionarLegendaATarefa('green');

  //QUESTÃO 9
  const task = myTasks.children[2];
  function selectTask() {
    function checkTask(event) {
      const element = event.target;
      if ( element.className === 'task') {
        element.className = 'task selected';
      } else {
        element.className = 'task';
      }
    }
    task.addEventListener('click', checkTask);
  }
  selectTask();

  //QUESTÃO 10
  function changeColorOfTheDay(daySelected, color) {
    const colorOfTheDaySelected = daySelected.style.color;
    if (colorOfTheDaySelected !== color) {
      daySelected.style.color = color;
    } else {
      daySelected.style.color = 'rgb(119,119,119)';
    }
  }
  
  function putColorOnMonth() {
    const days = document.getElementsByClassName('day');
    function checkTaskSelected(event) {
      const daySelected = event.target;
      const taskSelected = document.querySelector('.selected');
      if (taskSelected !== null) {
        const color = taskSelected.style.backgroundColor;
        changeColorOfTheDay(daySelected, color);
      } else {
        window.alert('Selecione uma tarefa!');
      }
    }
    for (let index = 0; index < days.length; index += 1) {
      days[index].addEventListener('click', checkTaskSelected);
    }
  }
  putColorOnMonth();
