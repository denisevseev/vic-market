// Import necessary hooks from React
import React, { useState, useEffect, useRef } from "react";
import { Mic } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./AudioRecorder.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type MediaRecorderType = MediaRecorder | null;

const FakeWaveform = ({ isRecording }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const fps = 8; // Adjust the fps to slow down the animation

  const draw = (time: any) => {
    const lineColor = "#2a5182";

    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;

      if (deltaTime > 1000 / fps) {
        const canvas = canvasRef.current;
        if (canvas) {
          const context = canvas.getContext("2d");
          if (context) {
            const width = canvas.width;
            const height = canvas.height;
            context.clearRect(0, 0, width, height);
            context.strokeStyle = lineColor; // Set the strokeStyle to your chosen color

            // Draw a simple waveform as a series of vertical lines
            for (let i = 0; i < width; i += 10) {
              const amplitude = Math.random() * height;
              context.beginPath();
              context.moveTo(i, height / 2);
              context.lineTo(
                i,
                height / 2 + (amplitude / 2) * (Math.random() > 0.5 ? -1 : 1)
              );
              context.stroke();
            }
          }
        }
        previousTimeRef.current = time;
      }
    } else {
      // Initialize the previous time if it's the first call
      previousTimeRef.current = time;
    }

    // Keep the animation going
    requestRef.current = requestAnimationFrame(draw);
  };

  useEffect(() => {
    if (isRecording) {
      // Start the animation
      requestRef.current = requestAnimationFrame(draw);
    }
    return () => {
      // Cancel the animation when the component unmounts or stops recording
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isRecording]);

  return <canvas ref={canvasRef} width={150} height={30} />;
};

const AudioRecorder = ({ onAudioRecorded }: any) => {
  const [audioURL, setAudioURL] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recorder, setRecorder] = useState<MediaRecorderType>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  useEffect(() => {
    // Cleanup function to stop the tracks when the component is unmounted
    return () => {
      if (recorder) {
        recorder.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [recorder])



const startRecording = async () => {
  // Check if the recorder exists and is not in the "inactive" state
  if (recorder && recorder.state === "inactive") {
    recorder.start();
    setIsRecording(true);
  } else {
    // Get access to the microphone again and create a new MediaRecorder
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const newRecorder = new MediaRecorder(stream);
    setRecorder(newRecorder);
    newRecorder.ondataavailable = (e) => {
      setAudioURL(URL.createObjectURL(e.data));
    };
    newRecorder.start();
    setIsRecording(true);
  }
};

  const stopRecording = () => {
    if (recorder !== null) {
      recorder.stop();
      setIsRecording(false);
      recorder.onstop = () => {
        // Stop the tracks to release the microphone
        recorder.stream.getTracks().forEach(track => track.stop());
      };
      recorder.ondataavailable = (e) => {
        setAudioURL(URL.createObjectURL(e.data));
        setAudioBlob(e.data);
        onAudioRecorded(URL.createObjectURL(e.data));
      };
    }
  };

  const deleteAudio = () => {
    setAudioURL("");
    onAudioRecorded(null);
    if (recorder) {
      // When deleting the audio, stop the recorder and release the media stream
      if (recorder.state !== "inactive") {
        recorder.stop();
      }
      recorder.stream.getTracks().forEach(track => track.stop());
      // Set recorder to null to allow for a fresh start next time
      setRecorder(null);
    }
  };

  return (
    <div>
      {!audioURL ? (
        <div className="d-flex justify-space-between">
          <div>
            <div className="d-flex ai-center gap-8 mb-8">
              <Mic className="blue-icon" />
              <span>
                {isRecording ? (
                  <span style={{ color: "#2a5182" }}>Recording...</span>
                ) : (
                  <span>Record</span>
                )}
              </span>
            </div>
            {!isRecording && (
              <span
                className="mt-8 cp"
                style={{ fontSize: "12px" }}
                onClick={startRecording}
              >
                click here to record
              </span>
            )}

            {isRecording && (
              <div style={{ marginLeft: "8px", marginTop: "16px" }}>
                <FakeWaveform isRecording={isRecording} />{" "}
              </div>
            )}
          </div>
          <div style={{ textAlign: "end" }}>
            {/* Button component */}

            {/* buttons start */}

            {isRecording && (
              <button
                onClick={stopRecording}
                style={{
                  textTransform: "none",
                  marginLeft: "16px",
                }}
                className="saveAudioButton"
              >
                Save
              </button>
            )}
            {/* buttons end */}
          </div>
        </div>
      ) : (
        <div className="audio-and-delete">
          <audio src={audioURL} controls />
          <DeleteOutlineIcon
            style={{
              marginLeft: "16px",
              cursor: "pointer",
              color: "rgb(226, 26, 34)",
            }}
            onClick={deleteAudio}
          />
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
