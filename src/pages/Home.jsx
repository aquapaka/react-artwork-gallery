import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      id="Home"
      className="pt-12 h-full flex flex-col justify-center items-center px-12 text-center"
    >
      <h1 className="">Welcome to Artopus</h1>
      <p className="mt-4">
        Immerse yourself in captivating masterpieces, engage with talented
        artists, and find inspiration that transcends boundaries.
      </p>
      <Link to="/gallery" className="primary-button mt-4">View gallery</Link>
    </div>
  );
}
