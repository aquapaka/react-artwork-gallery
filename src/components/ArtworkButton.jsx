export default function ArtworkButton({artwork}) {

    return (
        <button className="shadow h-[40vh] overflow-hidden brightness-75 hover:brightness-100 hover:scale-105 active:scale-100 duration-100">
            <img className="w-full h-full object-cover" src={artwork.src} alt={artwork.name} />
        </button>
    )
}