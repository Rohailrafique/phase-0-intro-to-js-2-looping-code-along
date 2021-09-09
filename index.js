

function writeCards(people, event) {
let messages = [];
    for(let i = 0; i < people.length; i++) {messages.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`)}
    return messages;
}


function countDown(positiveNumber) {
while(positiveNumber >= 0) {
console.log(positiveNumber);
positiveNumber--;
}
}