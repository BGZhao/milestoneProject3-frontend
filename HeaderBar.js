import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";
import { Image } from "react-bootstrap";

function HeaderBar() {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(CurrentUser);

  function logout(e) {
    localStorage.removeItem("token");
    setCurrentUser(null)
    navigate("/");
  }
  // this collection of html should be inside of an unordered/ordered list
  let loginActions = (
    <>
      <li>
        <a href="#" onClick={() => navigate("/sign-up")}>
          Sign Up
        </a>
      </li>
      <li>
        <a href="#" onClick={() => navigate("/login")}>
          Login
        </a>
      </li>
    </>
  );

  if (currentUser) {
    loginActions = (
      <ul>
        <li>Logged in as {currentUser.username}</li>
        <button onClick={logout}>Logout</button>
      </ul>
    );
  }
  // console.log(currentUser)

  return (

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Image className="HangryLogo" src="./images/HangryLogo2.jpeg" />
        <Navbar.Brand href="#"><b>"EAT WHATEVER YOU WANT, AND IF ANYONE TRIES TO LECTURE YOU ABOUT YOUR WEIGHT, EAT THEM TOO"</b></Navbar.Brand>
        {loginActions}
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>
    </Navbar>
  );
}

export default HeaderBar;