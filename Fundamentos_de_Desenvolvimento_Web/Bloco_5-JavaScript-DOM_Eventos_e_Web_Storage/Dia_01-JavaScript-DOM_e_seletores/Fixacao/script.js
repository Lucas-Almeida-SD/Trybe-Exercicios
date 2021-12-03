document.querySelector('#header-container').style.background = '#2fc18c';
document.querySelector('.emergency-tasks').style.background = '#FFC3B0';
let titleEmergencyTasks = document.getElementsByClassName('title-emergency-tasks');
for (let index = 0; index < titleEmergencyTasks.length; index += 1){
    titleEmergencyTasks[index].style.background = '#E026A3';
}
document.querySelector('.no-emergency-tasks').style.background = '#E6C45E'
let titleNoEmergencyTasks = document.getElementsByClassName('title-no-emergency-tasks');
for (let index = 0; index < titleNoEmergencyTasks.length; index += 1){
    titleNoEmergencyTasks[index].style.background = 'black';
}
document.querySelector('#footer-container').style.background = '#033B29';