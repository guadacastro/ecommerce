

const ItemListContainer = ({ greeting }) => { 
    return (
        <div className="text-center font-sans t text-6xl">
            <h1 className="p-8 font-semibold">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;