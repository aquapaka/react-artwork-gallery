import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import ArtworkApi from "../apis/ArtworkApi";
import ArtworkButton from "../components/ArtworkButton";

export default function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

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
    <div id="Gallery" className="pt-16 min-h-screen flex justify-center items-center">
      {/* All artwork view */}
      {isLoading ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <HashLoader color="#d946ef" />
        </div>
      ) : (
        !selectedArtwork && <div className="container mx-auto px-4 grid md:grid-cols-3 xl:grid-cols-4 gap-4">
          {artworks.map((artwork) => (
            <ArtworkButton
              key={artwork.id}
              artwork={artwork}
              setSelectedArtwork={setSelectedArtwork}
            />
          ))}
        </div>
      )}

      {/* Detail view */}
      {selectedArtwork && (
        <div
          className={`flex flex-col md:flex-row container mx-auto px-4 gap-4`}
        >
          <img
            className="w-full max-h-[80vh] object-contain md:w-[40vw]"
            src={selectedArtwork.src}
            alt={selectedArtwork.name}
          />
          <div>
            <div className="flex justify-between">
              <h2 className="my-2">
                {selectedArtwork.title} - {selectedArtwork.publishYear}
              </h2>
              <button
                className="primary-button"
                onClick={() => setSelectedArtwork(null)}
              >
                Return to all artworks
              </button>
            </div>
            <p className="my-4">By {selectedArtwork.artist}</p>
            <p className="mt-8">{selectedArtwork.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
