import "../App.css";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img className="card--img" src={props.obj.imageUrl} alt="japan" />
      <div className="card--content">
        <div className="card--location-info">
          <i class="fa-solid fa-location-dot"></i>
          <h3 className="card--country">{props.obj.location}</h3>
          <a href={props.obj.googleMapsUrl} target="_blank">
            <h3 className="card--gmaps-txt">View on Google Maps</h3>
          </a>
        </div>
        <h1 className="card--title">{props.obj.title}</h1>
        <h2 className="card--date">
          <span className="start-date">{props.obj.startDate}</span> -{" "}
          <span className="end-date">{props.obj.endDate}</span>
        </h2>
        <p className="card--desc">{props.obj.description}</p>
      </div>
    </div>
  );
}
