import React from "react"
import Layout from "../components/layout"
import { TakePhotoStepPage } from "../components/takePhotoStepPage"
import { navigate } from "gatsby"
import { Button } from "@material-ui/core"

const GlassesPhotoPage = () => {
  return (
    <Layout>
      <TakePhotoStepPage
        title="(2) Zdjęcie za okularami"
        photoType="2-glasses"
        next="/veiled"
      >
        <div>
          <p>
            Spróbujmy teraz zdjęcie z okularami. Możesz założyć dowolne okulary
            - zwykłe korekcyjne, przeciwsłoneczne lub jakieś inne.
          </p>
          <Button onClick={() => navigate("/veiled")}>
            Nie nosisz okularów? Pomiń ten krok
          </Button>
        </div>
      </TakePhotoStepPage>
    </Layout>
  )
}

export default GlassesPhotoPage
