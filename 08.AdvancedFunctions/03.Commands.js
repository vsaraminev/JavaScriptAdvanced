function commands(input) {
    let commandProcessor = (function () {
        let result = "";
        return {
            "append": (str) => { result += str },
            "removeStart": (num) => { result = result.substring(num) },
            "removeEnd": (num) => { result = result.substring(0, result.length - num) },
            "print": () => { console.log(result) }
        }
    }());

    for (const line of input) {
        let [command, item] = line.split(" ");
        commandProcessor[command](item);
    }
}

commands([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
]);