import React from "react";

class CompareButton extends React.Component {
  render() {
    return (
      <div className="compareButton">
        <span data-action="compare" data-categoryid={419}>
          0 товара в сравнении
        </span>
        <span data-action="clear_compare" data-categoryid={419} />
      </div>
    );
  }
}

export default CompareButton;
