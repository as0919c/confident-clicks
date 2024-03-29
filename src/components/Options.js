import React from "react";
import { Col, Row, Button, Typography } from "antd";
import {
  changeQuestion,
  toggleModal,
  chooseOption,
  changeScore,
} from "../hooks/actions";
import { GlobalContext } from "../hooks/provider";

function Options({ options }) {
  const [state, dispatch] = React.useContext(GlobalContext);

  function onClick(option) {
    dispatch(changeScore(option.score));
    dispatch(chooseOption(option));
    if (option.alert) {
      dispatch(toggleModal());
    } else {
      dispatch(changeQuestion(option.action));
    }
  }

  function getButtonSize(count){
    return (count == 2 ? "40%": "90%")
  }

  function renderOptions(options) {
    return options.map((option, index) => (
      <Col key={index} span={12}>
        <Button
        ghost
          onClick={() => onClick(option)}
          shape="round"
          style={{
            height: "100%",
            width: "100%",
            marginTop: 5,
            whiteSpace: "normal",
            borderColor: "white"
          }}
          type="primary"
          block
        >
          <Typography.Title style={{ color: "white" }} level={3}>
            {option.text || "text"}
          </Typography.Title>
        </Button>
      </Col>
    ));
  }

  return (
    <Col flex="5">
      <Row style={{ height: getButtonSize(options.length), width: "100%" }} gutter={[8, 8]}>
        {renderOptions(options)}
      </Row>
    </Col>
  );
}

export default Options;
