import React, { useState } from "react"
import { PhotoUploader } from "../services/photoUploader"
import { navigate } from "gatsby"
import styled from "@emotion/styled"
import Webcam from "react-webcam"
import {
  Button,
  Grid,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core"
import PhotoIcon from "@material-ui/icons/CameraAlt"
import { observer, inject } from "mobx-react"

export const TakePhotoStepPage = inject(`store`)(
  observer(({ store, title, children, photoType, next }) => {
    const [dataUri, setDataUri] = useState("")
    const [step, setStep] = useState("initial")
    const [isUploading, setIsUploading] = useState(false)
    const webcamRef = React.useRef(null)

    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot()
      setDataUri(imageSrc)
      setStep("photo-taken")
    }, [webcamRef])

    const backToTakingPhoto = () => {
      setDataUri(undefined)
      setStep("initial")
    }

    const submitPhoto = async () => {
      setIsUploading(true)
      await PhotoUploader.upload({
        photoType,
        dataUri,
        sessionId: store.sessionId,
      })
      setIsUploading(false)
      setStep("submitted")
      setDataUri(undefined)

      await navigate(next)
    }

    const goToPhotoTaking = () => {
      setStep("photo-taking")
    }

    const renderFirstStep = () => {
      return (
        <Grid container direction="column" spacing={2}>
          <Grid item>{children}</Grid>
          <Grid item container direction="row" justify="center">
            <Button onClick={goToPhotoTaking} variant="contained">
              Gotowy? Robimy zdjęcie!
            </Button>
          </Grid>
        </Grid>
      )
    }

    const renderPhotoTaken = () => {
      return (
        <div>
          <Grid container directon="column" spacing={4}>
            {isUploading ? (
              <Grid item style={{ flex: 1 }}>
                <LinearProgress />
              </Grid>
            ) : (
              <React.Fragment>
                <Grid
                  item
                  container
                  direction="row"
                  justify="center"
                  spacing={2}
                >
                  <Grid item>
                    <Button variant="outlined" onClick={backToTakingPhoto}>
                      Jeszcze raz?
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" onClick={submitPhoto}>
                      OK, dalej!
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <ImageTaken src={dataUri} />
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        </div>
      )
    }

    const renderPhotoTaking = () => {
      return (
        <div>
          <h2>{title}</h2>
          <div>
            <CameraWrapper>
              <Webcam
                audio={false}
                height={450}
                ref={webcamRef}
                width={350}
                screenshotFormat="image/jpeg"
                mirrored={true}
                videoConstraints={{
                  facingMode: "user",
                  width: 900,
                  height: 700,
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <CameraMask>
                <FaceNavigator />
              </CameraMask>
              <Grid container direction="row" justify="center">
                <Button variant="contained" onClick={capture}>
                  <PhotoIcon /> Pstryk
                </Button>
              </Grid>
            </CameraWrapper>
          </div>
        </div>
      )
    }

    switch (step) {
      case "initial":
        return renderFirstStep()
      case "photo-taken":
        return renderPhotoTaken()
      case "photo-taking":
        return renderPhotoTaking()
      case "submitted":
        return (
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        )
      default:
        return null
    }
  })
)

const CameraWrapper = styled.div`
  width: 350px;
  height: 450px;
  position: relative;
`

const CameraMask = styled.div`
  position: absolute;
  opacity: 0.4;
  width: 350px;
  height: 450px;
  top: 0;
`

const ImageTaken = styled.img`
  width: 350px;
  height: 450px;
`

const FaceNavigator = () => {
  return (
    <svg width="350" height="450">
      <line
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="undefined"
        strokeLinejoin="undefined"
        id="svg_1"
        y2="220"
        x2="350"
        y1="220"
        x1="0"
        strokeWidth="50"
        stroke="#0f0"
        fill="none"
      />
      <line
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="null"
        strokeLinejoin="null"
        id="svg_8"
        y2="400"
        x2="205"
        y1="400"
        x1="145"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="18"
        stroke="#0f0"
        fill="none"
      />
    </svg>
  )
}
