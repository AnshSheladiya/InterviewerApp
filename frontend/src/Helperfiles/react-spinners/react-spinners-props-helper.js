// react-spinners-props-helper.js

import React from "react";
import { CSSProperties } from "react";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SyncLoader,
} from "react-spinners";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";

function SpinnersWithProps() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <CenterScreen>
      <TitleComponent>React-spinners</TitleComponent>
    <div className="sweet-loading flex flex-col gap-y-10">
      {/* Loader: BarLoader */}
      <BarLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        height={4}
        width={100}
      />

      {/* Loader: BeatLoader */}
      <BeatLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
      />

      {/* Loader: BounceLoader */}
      <BounceLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={60}
      />

      {/* Loader: CircleLoader */}
      <CircleLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={50}
      />

      {/* Loader: ClimbingBoxLoader */}
      <ClimbingBoxLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={15}
      />

      {/* Loader: ClipLoader */}
      <ClipLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={35}
      />

      {/* Loader: ClockLoader */}
      <ClockLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={50}
      />

      {/* Loader: DotLoader */}
      <DotLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={60}
      />

      {/* Loader: FadeLoader */}
      <FadeLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        height={15}
        width={5}
        radius={2}
        margin={2}
      />

      {/* Loader: GridLoader */}
      <GridLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={15}
      />

      {/* Loader: HashLoader */}
      <HashLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={50}
      />

      {/* Loader: MoonLoader */}
      <MoonLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={60}
      />

      {/* Loader: PacmanLoader */}
      <PacmanLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={25}
      />

      {/* Loader: PropagateLoader */}
      <PropagateLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={15}
      />

      {/* Loader: PuffLoader */}
      <PuffLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={60}
      />

      {/* Loader: PulseLoader */}
      <PulseLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={15}
        radius={2}
      />

      {/* Loader: RingLoader */}
      <RingLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={60}
        radius={2}
      />

      {/* Loader: RiseLoader */}
      <RiseLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={15}
        radius={2}
      />

      {/* Loader: RotateLoader */}
      <RotateLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={15}
        radius={2}
      />

      {/* Loader: ScaleLoader */}
      <ScaleLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={35}
        height={4}
        width={2}
        radius={2}
        margin={2}
      />

      {/* Loader: SyncLoader */}
      <SyncLoader
        loading={true}
        color="#000000"
        cssOverride={override}
        speedMultiplier={1}
        size={15}
        radius={2}
      />
    </div>
    </CenterScreen>

  );
}

export default SpinnersWithProps;
