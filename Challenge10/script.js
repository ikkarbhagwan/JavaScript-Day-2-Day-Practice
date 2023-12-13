const game = {
    team1: 'Boys',
    team2: 'Girls',
    players: [
        [
            'Liam',
            'Noah',
            'Ethan',
            'Jackson',
            'Aiden',
            'Lucas',
            'Mason',
            'Oliver',
            'Elijah',
            'Henry',
            'Alexander'
        ],
        [
            'Emma',
            'Olivia',
            'Ava',
            'Sophia',
            'Isabella',
            'Mia',
            'Amelia',
            'Harper',
            'Evelyn',
            'Abigail',
            'Chloe'
        ]
    ],
    score: '4:0',
    scored: ['Emma', 'Olivia', 'Ava', 'Sophia'],
    date: 'Nov 9th, 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};



// 1

const [players1, players2] = game.players;
console.log(players1, players2);

// 2.

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.

const players1Final = [...players1, 'Olivia', 'Ava', 'Sophia'];
// 5.

const {
    odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);