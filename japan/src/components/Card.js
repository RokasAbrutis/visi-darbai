export default function Card(props) {
    return (
        <section className="card">
            <img className="card-img" src={`${props.item.imageUrl}`} />
            <div className="card-2">
                <span className="card-span">
                    <img className="card-location-logo" src={require("../img/location-logo.png")} />
                    <p className="card-location">{props.item.location}</p>
                    <a className="card-location-link" href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </span>
                <h3 className="card-title">{props.item.title}</h3>
                <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card-description">{props.item.description}</p>
            </div>
        </section>
    )
}