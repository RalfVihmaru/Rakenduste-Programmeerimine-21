function Item(props) {
    return(
        <div>
            <div className="itemName">{props.className}</div>
            <div className="itemEse">{props.price}</div>
            <div className="itemCategory">{props.category}</div>
        </div>
    )
}

export default Item;