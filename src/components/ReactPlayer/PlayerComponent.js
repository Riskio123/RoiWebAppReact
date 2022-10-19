/** @format */

import ReactPlayer from "react-player";
import { useState, useRef, useCallback } from "react";
import { Card, CardHeader, CardBody, Row, Col, CardTitle } from "reactstrap";

export function PlayerComponent({ url }) {
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [playedPercent, setPlayedPercent] = useState(0);
  const [duration, setDuration] = useState(0);
  const durationInMinutes = (duration / 60).toFixed(2);
  const [isPlaying, setIsPlaying] = useState("false");
  const [isReady, setIsReady] = useState("false");
  const playerRef = useRef();
  // ...

  const onReady = useCallback(() => {
    if (!isReady) {
      const timeToStart = 12.6;
      playerRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);

  return (
    <Col>
      <p>
        Tempo trascorso: {"  "}
        {playedSeconds > 60
          ? (playedSeconds / 60).toFixed(2) + " minuti"
          : playedSeconds.toFixed(0) + " secondi"}
      </p>
      <p>
        Percentuale completamento video: {"  "}
        {(playedPercent * 100).toFixed(1)} %
      </p>
      <p>Durata video: {durationInMinutes} minuti</p>
      {/* <Player autoPlay src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
        <ControlBar autoHide={false} className="my-class" />
      </Player> */}
      <div>
        {/* <div
          style={{
            backgroundColor: "red",
            position: "absolute",
            width: 400,
            height: 60,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "red",
            position: "absolute",
            bottom: 0,
            width: 400,
            height: 60,
          }}
        ></div> */}
        <ReactPlayer
          ref={playerRef}
          onReady={onReady}
          isplaying={isPlaying}
          width="300px"
          controls
          height="200px"
          url={url}
          onProgress={progress => {
            setPlayedSeconds(progress.playedSeconds);
            setPlayedPercent(progress.played);
          }}
          onDuration={duration => {
            setDuration(duration);
          }}
        />
      </div>
    </Col>
  );
}
