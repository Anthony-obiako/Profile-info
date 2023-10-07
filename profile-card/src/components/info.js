import image from "../Blurry-pic.jpg";

function Info() {
  return (
    <div className="container">
      <img src={image} className="profile-image" alt="sarah" />
      <h1 className="name">Sarah Hoggins</h1>
      <h3>Frontend Developer</h3>
      <a href="www.google.com">sarahhoggins.com</a>
      <div className="buttons">
        <button className="email">Email</button>
        <button className="linked">LinkedIn</button>
      </div>
    </div>
  );
}

export default Info;
