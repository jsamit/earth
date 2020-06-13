function main(input) {
    let directionArr = ['WS','MS','AS','AS','MS','WS'];
    let numberArr = [1,3,5,7,9,11];
    input = input.split("\n");

    let testCase = +input[0];

    for(let i=1; i<input.length; i++) {
        const urSeat = +input[i];
        const index = Math.ceil(urSeat/6)%2 !== 0 ? (urSeat%6 === 0 ? urSeat%6 : 6 - urSeat%6) : (urSeat%6 === 0 ? 6 - urSeat%6 - 1 : urSeat%6 - 1);
        console.log(`${(Math.ceil(urSeat/6)%2 !== 0)? urSeat + numberArr[index] : urSeat - numberArr[index]} ${directionArr[index]}`);
    }

}
