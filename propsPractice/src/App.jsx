import './App.css'
import Joke from './components/Joke'
import { jokes } from './components/jokes'

function App() {
  return (
    <div className="App">
      <Joke setup={jokes.jokeSetup1} punchline={jokes.jokePunchline1}/>
      <Joke setup={jokes.jokeSetup2} punchline={jokes.jokePunchline2}/>
      <Joke setup={jokes.jokeSetup3} punchline={jokes.jokePunchline3}/>
      <Joke setup={jokes.jokeSetup4} punchline={jokes.jokePunchline4}/>
      <Joke setup={jokes.jokeSetup5} punchline={jokes.jokePunchline5}/>
      <Joke setup={jokes.jokeSetup6} punchline={jokes.jokePunchline6}/>
    </div>
  )
}

export default App
