import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import ArtworkApi from "../apis/ArtworkApi";
import ArtworkButton from "../components/ArtworkButton";

export default function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Load api
    ArtworkApi.getAllArtworks()
      .then((response) => {
        setArtworks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="Gallery" className="pt-20">
      {isLoading ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <HashLoader color="#d946ef" />
        </div>
      ) : (
        <div className="container mx-auto px-4 grid md:grid-cols-3 xl:grid-cols-4 gap-4">
          {artworks.map((artwork) => (
            <ArtworkButton artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
}
