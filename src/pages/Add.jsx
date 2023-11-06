import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtworkApi from "../apis/ArtworkApi";

export default function Add() {
    const navigate = useNavigate();

    const [title, setTitle] = useState(null);
    const [year, setYear] = useState(null);
    const [artist, setArtist] = useState(null);
    const [description, setDescription] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const addNewArtwork = () => {
        setIsSubmitting(true);

        const newArtwork = {
            title: title,
            artist: artist,
            publishYear: year,
            description: description,
            src: imageUrl,
        };

        ArtworkApi.addArtwork(newArtwork)
            .then((response) => {
                navigate("/manage");
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                setIsSubmitting(false);
            })
    };

    return (
        <div className="pt-16 min-h-screen flex justify-center items-center">
            <div
                className={`flex flex-col md:flex-row container mx-auto px-4 gap-4`}
            >
                <img
                    className="w-full max-h-[80vh] object-contain md:w-[40vw]"
                    src={imageUrl}
                    alt={title}
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
                                onClick={() => navigate("/manage")}
                            >
                                Return to all artworks
                            </button>
                            <button
                                className="primary-button border-green-500 text-green-500 bg-green-900 bg-opacity-50 w-full mt-4"
                                onClick={() => addNewArtwork()}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Adding new artwork" : "Add new artwork"}
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
        </div>
    )
}