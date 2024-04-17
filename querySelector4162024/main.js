// Maddox C 4-16-24 querySelector() Work

//INPUT
const student = document.querySelector('#student');
const homeSchool = document.querySelector('#school');
const city = document.querySelector('#city');

//PROCESS
document.body.style.backgroundColor = 'lightblue';

//Student
student.style.color = 'var(--steelblue)';
student.style.fontSize = '1.2rem';

//School
homeSchool.style.fontSize = '1.2rem';
homeSchool.style.marginBottom = '30px';
homeSchool.style.fontFamily = 'Helvetica, sans-serif';
homeSchool.style.fontVariant = 'small-caps';
homeSchool.style.fontStyle = 'italic';

//City
city.style.display = 'inline';
city.style.color = 'salmon';
city.style.padding = '10px';
city.style.border = '4px dotted orange';
