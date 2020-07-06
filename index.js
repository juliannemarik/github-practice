const helloWorld = (firstname, lastname) => {
  return `greetings ${firstname} ${lastname}`;
}

helloWorld("Jane", "Doe");

const repeat = (num, phrase) => {
  for(let i = 0; i < num; i++) {
    console.log(phrase);
  }
}

repeat(10, 'hello there');
