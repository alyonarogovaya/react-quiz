function StartScreen({quantity}) {
  return (
    <div className="start-wrapper">
      <h2>Welcome to The React Quiz!</h2>
      <h3> {quantity} question to test your React mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  )
}

export default StartScreen
