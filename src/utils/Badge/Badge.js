import "./Badge.css";

export default function Badge(props) {
  const { reputation } = props;
  let color = "000";
  let back = "fff";
  let text = "";
  switch (reputation) {
    case "platinum":
      color = "000";
      back = "D4D4D4";
      text = "Platinum";
      break;
    case "gold":
      color = "fff";
      back = "FFC333";
      text = "Gold";
      break;
    default:
      text = "Sin datos";
  }
  return (
    <p
      className="badge"
      style={{ color: "#" + color, backgroundColor: "#" + back }}
    >
      {text}
    </p>
  );
}

// function Badge(reputation) {
//   let color = "000";
//   let back = "fff";
//   let text;
//   switch (reputation.type) {
//     case "platinum":
//       back = "666";
//       color = "fff";
//       text = "Platinum";
//       break;
//     case "gold":
//       back = "666";
//       color = "fff";
//       text = "Gold";
//       break;
//     default:
//       text = "No hay informacion.";
//       break;
//   }
//   return (
//     <p className="badge" style={`color: #${color};background-color: #${back}`}>
//       hola
//     </p>
//   );
// }
