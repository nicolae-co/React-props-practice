function Joke(props) {
    return (
        <div className="joke">
            {props.setup && <p className="joke--setup">{props.setup}</p>}
            <p className="joke--punchline">{props.punchline}</p>
        </div>
    )
}

export default Joke
