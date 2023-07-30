
import Image from "next/image";
import { useSelector } from "react-redux";
import RemoveButton from "./RemoveButton";

export default function SelectedProduct({ category }) {
  const { Cpu, Motherboard, Ram, Psu, Sd, Monitor, Keyboard,Mouse } = useSelector(
    (state) => state.pcBuilder
  );

  let product;
  switch (category) {
    case "Cpu":
      product = Cpu;
      break;
    case "Motherboard":
      product = Motherboard;
      break;
    case "Ram":
      product = Ram;
      break;
    case "Keyboard":
      product = Keyboard;
      break;
    case "Sd":
      product = Sd;
      break;
    case "Monitor":
      product = Monitor;
      break;
    case "Psu":
      product = Psu;
      break;
    case "Mouse":
      product = Mouse;
      break;
  }

  if (product) {
    const { image, product_name,category } = product;
    console.log({category});

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image src={image} alt="" width={100} height={100} />
      <div style={{ marginLeft: "10px" }}>
        <h3 style={{ marginBottom: "10px" }}>{product_name}</h3>
        <RemoveButton category={category} />
      </div>
    </div>
    );
  }
}
