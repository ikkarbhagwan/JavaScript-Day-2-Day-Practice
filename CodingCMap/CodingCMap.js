

const gameEvents = new Map([
[17, 'Goal'],
[36, 'subsitution'],
[47, 'Goal'],
[61, 'subsitution'],
[64, 'Yellow Card'],
[69, 'Red Card'],
[70, 'subsitution'],
[72, 'subsitution'],
[76, 'Goal'],
[80, 'Goal'],
[92, 'Yellow Card'],

]);


console.log(gameEvents.values());
// 1

const events = [new Set(gameEvents.values())]
console.log(events);

// 2

gameEvents.delete(64);

// 3

console.log(`an event happened , on average ,every ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`an event happened , on average ,every ${time / gameEvents.size} minutes`);


// 4

for(const[min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half}  HALF] ${min} : ${event}`);
}