export default function Transaction(props) {
  return <div className="card">{props.user} gaf {props.amount}€ uit bij de {props.place}.</div>;
}