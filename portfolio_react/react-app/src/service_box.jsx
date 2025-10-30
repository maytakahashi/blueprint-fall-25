import "./service_box.css";

function ServiceBox({ title, description }) {
  return (
    <div className="service-box">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceBox;