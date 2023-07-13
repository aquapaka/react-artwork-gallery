import avatar from "../assets/images/Aquatixel Pixel Art 800x800.png";
import emailIcon from "../assets/images/Email.png";
import githubIcon from "../assets/images/Github.png";
import linkinIcon from "../assets/images/Linkedin.png";

export default function Contact() {
  return (
    <div
      id="Contact"
      className="pt-16 flex flex-col md:flex-row justify-center items-center min-h-screen gap-[5vw]"
    >
      <div className="text-center">
        <img src={avatar} alt="avatar" className="max-w-[200px]" />
        <p className="text-2xl font-bold mt-3">Tam Long</p>
        <p className="text-xl font-semibold mt-2">@aquapaka</p>
      </div>
      <div>
        <a
          className="flex items-center gap-2 p-2"
          href="mailto:aqua.tamlong@gmail.com"
          target="_blank" rel="noreferrer"
        >
          <img className="w-8" src={emailIcon} alt="email" />{" "}
          aqua.tamlong@gmail.com
        </a>
        <a
          className="flex items-center gap-2 p-2"
          href="https://github.com/aquapaka"
          target="_blank" rel="noreferrer"
        >
          <img className="w-8" src={githubIcon} alt="github" />{" "}
          github.com/aquapaka
        </a>
        <a
          className="flex items-center gap-2 p-2"
          href="https://www.linkedin.com/in/aquapaka/"
          target="_blank" rel="noreferrer"
        >
          <img className="w-8" src={linkinIcon} alt="linkin" />{" "}
          linkedin.com/in/aquapaka/
        </a>
      </div>
    </div>
  );
}
