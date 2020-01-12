import React from "react"
import Layout from "../components/layout"
import { TakePhotoStepPage } from "../components/takePhotoStepPage"

const GlassesPhotoPage = () => {
  return (
    <Layout>
      <TakePhotoStepPage
        title="(6) Złe kadrowanie"
        photoType="5-cropping"
        next="/done"
      >
        <div>
          <p>
            Ostatni krok - spróbuj źle skadrować zdjęcie: odsuń telefon od
            twarzy albo ustaw się tak, żeby tylko połowa twarzy była w kadrze.
            Tutaj wolna amerykanka!
          </p>
        </div>
      </TakePhotoStepPage>
    </Layout>
  )
}

export default GlassesPhotoPage
