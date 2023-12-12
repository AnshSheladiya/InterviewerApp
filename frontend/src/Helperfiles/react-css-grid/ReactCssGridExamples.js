import React from "react";
import Grid from "@react-css/grid";
import TitleComponent from "../styled-components/TitleComponent";

function ReactCssGridExamples() {
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
      <TitleComponent>Css Grid Examples</TitleComponent>
      <div style={sectionStyle}>
        <h2>Basic Grid</h2>
        <Grid>
          <div style={coloredBoxStyle}>MyComponent 1</div>
          <div style={coloredBoxStyle}>MyComponent 2</div>
          <div style={coloredBoxStyle}>MyComponent 3</div>
        </Grid>
      </div>

      <div style={sectionStyle}>
        <h2>Inline Grid</h2>
        <Grid inline>
          <div style={coloredBoxStyle}>MyComponent 1</div>
          <div style={coloredBoxStyle}>MyComponent 2</div>
        </Grid>
      </div>

      <div style={sectionStyle}>
        <h2>Grid Template Rows</h2>
        <Grid rows="50px auto 25px">
          <div style={coloredBoxStyle}>Row 1</div>
          <div style={coloredBoxStyle}>Row 2</div>
        </Grid>
      </div>

      <div style={sectionStyle}>
        <h2>Grid Template Columns</h2>
        <Grid columns="80px 80px 30px">
          <div style={coloredBoxStyle}>Column 1</div>
          <div style={coloredBoxStyle}>Column 2</div>
        </Grid>
      </div>

      <div style={sectionStyle}>
        <h2>Gap (Grid Gap)</h2>
        <Grid gap="2em">
          <div style={coloredBoxStyle}>Gap 1</div>
          <div style={coloredBoxStyle}>Gap 2</div>
        </Grid>
      </div>

      <div style={sectionStyle}>
        <h2>Justify Items</h2>
        <Grid justifyItems="end">
          <div style={coloredBoxStyle}>End</div>
          <div style={coloredBoxStyle}>Items</div>
        </Grid>
      </div>

      <div style={sectionStyle}>
        <h2>Align Items</h2>
        <Grid alignItems="stretch">
          <div style={coloredBoxStyle}>Stretch</div>
          <div style={coloredBoxStyle}>Items</div>
        </Grid>
      </div>

      <div style={sectionStyle}>
  <h2>Row Gap (Grid Row Gap)</h2>
  <Grid rowGap="100px">
    <div style={coloredBoxStyle}>Item 1</div>
    <div style={coloredBoxStyle}>Item 2</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Column Gap (Grid Column Gap)</h2>
  <Grid columns="80px 80px 30px" columnGap="100px">
    <div style={coloredBoxStyle}>Item 1</div>
    <div style={coloredBoxStyle}>Item 2</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Justify Content</h2>
  <Grid justifyContent="center">
    <div style={coloredBoxStyle}>Content 1</div>
    <div style={coloredBoxStyle}>Content 2</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Align Content</h2>
  <Grid alignContent="space-between">
    <div style={coloredBoxStyle}>Content 1</div>
    <div style={coloredBoxStyle}>Content 2</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Auto Flow</h2>
  <Grid autoFlow="column">
    <div style={coloredBoxStyle}>Item 1</div>
    <div style={coloredBoxStyle}>Item 2</div>
    <div style={coloredBoxStyle}>Item 3</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Auto Rows</h2>
  <Grid autoRows="50px">
    <div style={coloredBoxStyle}>Item 1</div>
    <div style={coloredBoxStyle}>Item 2</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Auto Columns</h2>
  <Grid autoColumns="min-content">
    <div style={coloredBoxStyle} >Item 1</div>
    <div style={coloredBoxStyle}>Item 2</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Template (Shorthand)</h2>
  <Grid template="1fr 2fr">
    <div style={coloredBoxStyle}>Template 1</div>
    <div style={coloredBoxStyle}>Template 2</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Place Items (Shorthand)</h2>
  <Grid placeItems="center">
    <div style={coloredBoxStyle}>Item 1</div>
    <div style={coloredBoxStyle}>Item 2</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Place Content (Shorthand)</h2>
  <Grid placeContent="space-between">
    <div style={coloredBoxStyle}>Content 1</div>
    <div style={coloredBoxStyle}>Content 2</div>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Items</h2>
  <Grid rows="6em" columns="4em 2em">
    <Grid.Item justifySelfStart>
      <div style={coloredBoxStyle}>Item 1</div>
    </Grid.Item>
    <Grid.Item justifySelfEnd>
      <div style={coloredBoxStyle}>Item 2</div>
    </Grid.Item>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Column Start | Grid Column End</h2>
  <Grid>
    <Grid.Item columnStart={2} columnEnd={5}>
      <div>Item 1</div>
    </Grid.Item>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Column (Shorthand)</h2>
  <Grid>
    <Grid.Item column="2 / 5">
      <div>Item 1</div>
    </Grid.Item>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Row Start | Grid Row End</h2>
  <Grid>
    <Grid.Item rowStart="span" rowEnd="row1-end">
      <div>Item 1</div>
    </Grid.Item>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Row (Shorthand)</h2>
  <Grid>
    <Grid.Item row="3 / 6">
      <div>Item 1</div>
    </Grid.Item>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Grid Area (Shorthand)</h2>
  <Grid>
    <Grid.Item area="header">
      <div>Item 1</div>
    </Grid.Item>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Justify Self</h2>
  <Grid>
    <Grid.Item justifySelf="center">
      <div>Item 1</div>
    </Grid.Item>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Align Self</h2>
  <Grid>
    <Grid.Item alignSelf="end">
      <div>Item 1</div>
    </Grid.Item>
  </Grid>
</div>

<div style={sectionStyle}>
  <h2>Place Self (Shorthand)</h2>
  <Grid>
    <Grid.Item placeSelf="center">
      <div>Item 1</div>
    </Grid.Item>
  </Grid>
</div>
    </div>
  );
}

export default ReactCssGridExamples;