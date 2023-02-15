export default function Cards(props) {
    let badgeText;

    if (props.item.openSpots === 0) {
        badgeText = "Sold out";
     } else if (props.item.location === "Online") {
        badgeText = "Online";
    }
    
    return ( 
        <div>
            { badgeText && <p className="card-badge"><b>{badgeText}</b></p>}
            <img src={require("../img/" + props.item.image + ".png")} className="card-image" />
            <span className="card-span">
                <img src={require('../img/star.png')} className="card-star" />
                <p className="card-rating">{props.item.stats.rating}</p>
                <p className="card-reviewCount">({props.item.stats.reviewCount})</p>
                <p className="card-location">{props.item.location}</p>
            </span>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><b>From ${props.item.price} /</b> person</p>
        </div>
    )
}