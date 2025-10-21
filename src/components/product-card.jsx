export default function ProductCard(props){

    console.log(props)
    console.log(props.name)
    console.log(props.description)
    console.log(props.price)

    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button>Add to cart</button>
        </div>
    )

}