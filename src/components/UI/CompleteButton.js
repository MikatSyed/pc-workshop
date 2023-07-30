import { removeAll } from "@/redux/features/PcBuildSlice";
import { Button, Col, Row, message } from "antd";

import { useDispatch, useSelector } from "react-redux";

export default function CompleteBuild() {
    const dispatch = useDispatch();
    const { cpu, motherboard, ram, psu, sd, monitor, keyboard,mouse } = useSelector(
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
            disabled={!cpu || !motherboard || !ram || !psu || !sd || !monitor || !keyboard || !mouse }
            onClick={handleComplete}
        >
            Complete Build
        </Button>
        </Col>
        </Row>
    );
}