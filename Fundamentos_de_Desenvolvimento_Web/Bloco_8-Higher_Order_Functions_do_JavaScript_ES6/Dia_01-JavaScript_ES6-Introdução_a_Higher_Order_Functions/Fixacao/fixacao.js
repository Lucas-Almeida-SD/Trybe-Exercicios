const wakingUp = () => 'Acordando!!';

const breakFast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (action) => console.log(action());

doingThings(wakingUp);
doingThings(breakFast);
doingThings(sleep);
