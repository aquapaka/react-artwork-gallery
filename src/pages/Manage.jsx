import { HashLoader } from "react-spinners";
import ArtworkButton from "../components/ArtworkButton";
import ArtworkApi from "../apis/ArtworkApi";
import { useEffect } from "react";
import { useState } from "react";

export default function Manage() {
  const [artworks, setArtworks] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [title, setTitle] = useState(null);
  const [year, setYear] = useState(null);
  const [artist, setArtist] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [reloadTrigger, triggerReload] = useState(false);

  const handleSetSelectedArtwork = (artwork) => {
    setSelectedArtwork(artwork);
    setTitle(artwork.title);
    setYear(artwork.publishYear);
    setArtist(artwork.artist);
    setDescription(artwork.description);
    setImageUrl(artwork.src);
  };

  const updateSelectedArtworkInformation = () => {
    const newArtwork = {
      id: selectedArtwork.id,
      title: title,
      artist: artist,
      publishYear: year,
      description: description,
      src: imageUrl,
    };
    ArtworkApi.updateArtworkInformation(selectedArtwork.id, newArtwork)
      .then((response) => {
        console.log(response);
        setSelectedArtwork(null);
        triggerReload(state => !state)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteSelectedArtwork = () => {
    ArtworkApi.deleteSelectedArtwork(selectedArtwork.id)
      .then((response) => {
        console.log(response);
        setSelectedArtwork(null);
        triggerReload(state => !state)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);

    // Load api
    ArtworkApi.getAllArtworks()
      .then((response) => {
        setArtworks(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reloadTrigger]);

  return (
    <div
      id="Gallery"
      className="pt-16 min-h-screen flex justify-center items-center"
    >
      {/* All artwork view */}
      {isLoading ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <HashLoader color="#d946ef" />
        </div>
      ) : (
        !selectedArtwork && (
          <div className="container mx-auto px-4 grid md:grid-cols-3 xl:grid-cols-4 gap-4">
            {artworks.map((artwork) => (
              <ArtworkButton
                key={artwork.id}
                artwork={artwork}
                setSelectedArtwork={handleSetSelectedArtwork}
              />
            ))}
          </div>
        )
      )}

      {/* Detail update view */}
      {selectedArtwork && (
        <div
          className={`flex flex-col md:flex-row container mx-auto px-4 gap-4`}
        >
          <img
            className="w-full max-h-[80vh] object-contain md:w-[40vw]"
            src={imageUrl}
            alt={selectedArtwork.name}
          />
          <div className="w-full">
            <div className="flex justify-between gap-4">
              <div>
                <div>
                  <label>Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label>Publish Year</label>
                  <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label>Artist</label>
                  <input
                    type="text"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  className="primary-button"
                  onClick={() => setSelectedArtwork(null)}
                >
                  Return to all artworks
                </button>
                <button
                  className="primary-button border-blue-500 text-blue-500 bg-blue-900 bg-opacity-50 w-full mt-4"
                  onClick={() => updateSelectedArtworkInformation()}
                >
                  Update information
                </button>
                <button
                  className="primary-button border-red-500 text-red-500 bg-red-900 bg-opacity-50 w-full mt-4"
                  onClick={() => deleteSelectedArtwork()}
                >
                  Update information
                </button>
              </div>
            </div>
            <div className="mt-4">
              <label>Image Url</label>
              <input
              className="w-full"
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label>Description</label>
              <textarea
                className="w-full h-[400px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
