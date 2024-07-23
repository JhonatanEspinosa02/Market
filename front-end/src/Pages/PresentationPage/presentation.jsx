import Input from "./inputLocation/input_location";
import MostRequested from "./mostRequested/mostRequested";
import InfoApp from "./infoApp/infoApp";
import "./styles.css";

export default function PresentationPageMain() {
  return (
    <>
      <Input></Input>
      <MostRequested></MostRequested>
      <InfoApp></InfoApp>
    </>
  );
}
