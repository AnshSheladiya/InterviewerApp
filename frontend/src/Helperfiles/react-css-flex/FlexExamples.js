import React from "react";
import Flex from "@react-css/flex";

function ReactCssFlexExamples() {
  const sectionStyle = {
    padding: "20px",
    marginBottom: "20px",
    background: "#f2f2f2",
  };

  const coloredBoxStyle = {
    background: "#e6f7ff", // Light blue background
    border: "1px solid #0077b3", // Border color
    padding: "10px",
    marginBottom: "10px",
  };

  return (
    <div>
      <div style={sectionStyle}>
        <h2>Basic Flexbox</h2>
        <Flex>
          <div style={coloredBoxStyle}>MyComponent 1</div>
          <div style={coloredBoxStyle}>MyComponent 2</div>
          <div style={coloredBoxStyle}>MyComponent 3</div>
        </Flex>
      </div>

      <div style={sectionStyle}>
        <h2>Inline Flexbox</h2>
        <Flex inline>
          <div style={coloredBoxStyle}>MyComponent 1</div>
          <div style={coloredBoxStyle}>MyComponent 2</div>
        </Flex>
      </div>

      <div style={sectionStyle}>
        <h2>Flex Direction</h2>
        <Flex row>
          <div>Row 1</div>
          <div>Row 2</div>
        </Flex>

        <Flex rowReverse>
          <div>Row Reverse 1</div>
          <div>Row Reverse 2</div>
        </Flex>

        <Flex column>
          <div>Column 1</div>
          <div>Column 2</div>
        </Flex>

        <Flex columnReverse>
          <div>Column Reverse 1</div>
          <div>Column Reverse 2</div>
        </Flex>
      </div>

      <div style={sectionStyle}>
        <h2>Flex Wrap</h2>
        <Flex wrap>
          <div>Wrap 1</div>
          <div>Wrap 2</div>
        </Flex>

        <Flex noWrap>
          <div>No Wrap 1</div>
          <div>No Wrap 2</div>
        </Flex>
      </div>

      <div style={sectionStyle}>
        <h2>Justify Content</h2>
        <Flex justifyStart>
          <div>Start</div>
          <div>Content</div>
        </Flex>

        <Flex justifyEnd>
          <div>End</div>
          <div>Content</div>
        </Flex>

        <Flex justifyCenter>
          <div>Center</div>
          <div>Content</div>
        </Flex>

        <Flex justifySpaceBetween>
          <div>Space</div>
          <div>Between</div>
        </Flex>

        <Flex justifySpaceAround>
          <div>Space</div>
          <div>Around</div>
        </Flex>
      </div>

      <div style={sectionStyle}>
        <h2>Align Items</h2>
        <Flex alignItemsStart>
          <div>Start</div>
          <div>Alignment</div>
        </Flex>

        <Flex alignItemsEnd>
          <div>End</div>
          <div>Alignment</div>
        </Flex>

        <Flex alignItemsCenter>
          <div>Center</div>
          <div>Alignment</div>
        </Flex>

        <Flex alignItemsBaseline>
          <div>Baseline</div>
          <div>Alignment</div>
        </Flex>

        <Flex alignItemsStretch>
          <div>Stretch</div>
          <div>Alignment</div>
        </Flex>
      </div>
      
      <div style={sectionStyle}>
        <h2>Flex Items</h2>
        <Flex>
          <Flex.Item order={2}>
            <div style={coloredBoxStyle}>Order 2</div>
          </Flex.Item>
          <Flex.Item grow={5}>
            <div style={coloredBoxStyle}>Grow 5</div>
          </Flex.Item>
          <Flex.Item shrink={3}>
            <div style={coloredBoxStyle}>Shrink 3</div>
          </Flex.Item>
          <Flex.Item basis="4em">
            <div style={coloredBoxStyle}>Basis 4em</div>
          </Flex.Item>
          <Flex.Item flex="1 0">
            <div style={coloredBoxStyle}>Flex 1 0</div>
          </Flex.Item>
          <Flex.Item alignSelf="flex-end">
            <div style={coloredBoxStyle}>Align Self End</div>
          </Flex.Item>
        </Flex>
      </div>
    </div>
  );
}

export default ReactCssFlexExamples;
