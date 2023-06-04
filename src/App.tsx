import './App.css'

function App() {
  const inputStyle = {
    width: "100%",
  }
  return (
    <>
      <div>
        This is a tool to fetch ClassDojo pictures and videos and download it as a zip file. To start, follow the
        instruction below:
        <ol>
          <li>Login to Class Dojo on your web browser</li>
          <li>Copy the cookie value</li>
          <li>Type the password for the zip file</li>
          <li>Paste the cookie value on the field below</li>
          <li>Click start</li>
          <li>You will be redirected to a new page and you can see the progress, bookmark the page!</li>
          <li>Once the progress is finished, there will be a link to download the file</li>
          <li>Download the file and use the password to extract it</li>
        </ol>
        <input type="text" className="text" style={inputStyle}/>
        <br />
        <br />
        <button className="submit">Start</button>
      </div>
    </>
  )
}

export default App
