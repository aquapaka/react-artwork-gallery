export default function ArtworkButton({artwork}) {

    return (
        <button className="shadow brightness-75 hover:brightness-100 hover:scale-105 active:scale-100 duration-150">
            <img src={artwork.src} alt={artwork.name} />
        </button>
    )
}