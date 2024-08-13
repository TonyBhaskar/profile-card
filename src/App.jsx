import './App.css'

function App() {
  return (
    <div className="card">
      <div className="left-part">
        <img src="./tonystark.jpg" alt="profile-img" width={200} />
      </div>
      <div className="right-part">
        <h1 className="name">Robert Downey Jr.</h1>
        <h4 className="summary">
          You know who I am.
        </h4>
        <h3 className='reach'>REACH ME ON</h3>
        <div className="icons">

          <a href="https://www.instagram.com/robertdowneyjr" target='_blank' rel='noopener noreferrer'><img src="./instagram.svg" alt="" /></a>

          <a href="https://x.com/robertdowneyjr" target='_blank' rel='noopener noreferrer'><img src="./twitter-x.svg" alt="twitter-x" /></a>

          <a href="https://www.facebook.com/robertdowneyjr/" target='_blank' rel='noopener noreferrer'><img src="./facebook.svg" alt="facebook" /></a>

        </div>
      </div>
    </div>
  )
}

export default App;