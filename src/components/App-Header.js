function Header() {
  return (
    <header className="App-header">
      <nav className="topnav">
        <a className="active" href="#home">
          Home
        </a>

        <a href="#login">Login </a>

        <a href="#signup">Sign Up </a>

        <a href="#about">About </a>

        <a href="#search">Search</a>
      </nav>
      <h1 id="dinnerdash">DINNER DASH</h1>
      <form className="postcodeForm">
        <input
          id="postcode"
          type="text"
          placeholder="Enter your postcode here."
        ></input>
        <br></br>
        <button type="submit" value="Submit" id="postcodeButton">
          Let's Go
        </button>
      </form>
    </header>
  );
}

export default Header;
