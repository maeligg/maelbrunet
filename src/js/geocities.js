export default () => {
  const pressed = [];
  const secretCode = "geocities";

  window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join("") === secretCode) {
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.href = "/geocities.css";
      document.querySelector("head").appendChild(style);

      const logo = document.querySelector(".c-logo");
      logo.innerHTML = '<img src="/images/laptop.gif" />';

      const nav = document.querySelector(".c-nav");
      const construction = document.createElement("img");
      construction.src = "/images/construction.gif";
      nav.parentNode.insertBefore(construction, nav);

      const social = document.querySelector(".c-footer nav");
      const newSocial = document.createElement("marquee");
      newSocial.innerHTML = social.innerHTML;
      social.parentNode.replaceChild(newSocial, social);

      const copyright = document.querySelector(".c-footer__copyright");
      copyright.innerHTML = "";
      const counter = document.createElement("img");
      counter.src = "/images/counter.gif";
      const netscape = document.createElement("img");
      netscape.src = "/images/netscape.gif";
      const notepad = document.createElement("img");
      notepad.src = "/images/notepad.gif";
      copyright.appendChild(counter);
      copyright.appendChild(netscape);
      copyright.appendChild(notepad);
    }
  });
};
