// IMPORT CSS WEEK 4
import "./service_box.css";

function ServiceBox({ title, description }) {
  // THIS IS A COMPONENT TO DISPLAY A SERVICEBOX WEEK 4
  // PROPS: title: The title of the service
  //        description: The description of the service


  // RETURN THE JSX FOR THE SERVICE BOX WEEK 4
  return (
    <div className="service-box">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


// EXPORT THE COMPONENT WEEK 4
export default ServiceBox;