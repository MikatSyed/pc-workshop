import Image from "next/image";
import { useSelector } from "react-redux";

export default function SelectedProduct({ category }) {
  const { cpu, motherboard, ram, psu, sd, monitor, keyboard,mouse } = useSelector(
    (state) => state.pcBuilder
  );

  let product;
  switch (category) {
    case "cpu":
      product = cpu;
      break;
    case "motherboard":
      product = motherboard;
      break;
    case "ram":
      product = ram;
      break;
    case "keyboard":
      product = keyboard;
      break;
    case "sd":
      product = sd;
      break;
    case "monitor":
      product = monitor;
      break;
    case "psu":
      product = psu;
      break;
    case "mouse":
      product = mouse;
      break;
  }

  if (product) {
    const { image, product_name } = product;

    return (
      <div>
        <Image src={image} alt="" width={100} height={100} />
        <div>
          <h3 style={{ marginBottom: "10px" }}>{product_name}</h3>
          
        </div>
      </div>
    );
  }
}
