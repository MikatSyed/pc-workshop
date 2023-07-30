import { removeAll } from "@/redux/features/PcBuildSlice";
import { Button, Col, Row, message } from "antd";

import { useDispatch, useSelector } from "react-redux";

export default function CompleteBuild() {
    const dispatch = useDispatch();
    const { Cpu, Motherboard, Ram, Psu, Sd, Monitor, Keyboard,Mouse } = useSelector(
        (state) => state.pcBuilder
      );

    const handleComplete = () => {
        message.success("Build Successful");
        dispatch(removeAll());
    };

    return (
        <Row justify="center" align="middle" style={{margin:'30px',}}>
      <Col>
        <Button
            size="large"
            type="primary"
            shape="round"
            disabled={!Cpu || !Motherboard || !Ram || !Psu || !Sd || !Monitor || !Keyboard || !Mouse }
            onClick={handleComplete}
        >
            Complete Build
        </Button>
        </Col>
        </Row>
    );
}