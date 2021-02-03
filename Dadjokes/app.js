const btn = document.querySelector('#btn');
const jokes = document.querySelector('#jokes');

const getNewJoke = async () => {
    try {
        const jokeText = await getDadJoke();
        // console.log(jokeText);
        const newLI = document.createElement('LI');
        newLI.append(jokeText)
        jokes.append(newLI)
    } catch (er) {
        return "Something went wrong try again later"
    }

}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        // console.log(res.data.joke);
        return res.data.joke
    } catch (er) {
        return "No jokes available sorry :("
    }

}
btn.addEventListener('click', getNewJoke)