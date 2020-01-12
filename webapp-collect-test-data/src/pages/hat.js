import React from "react"
import Layout from "../components/layout"
import { TakePhotoStepPage } from "../components/takePhotoStepPage"

const GlassesPhotoPage = () => {
  return (
    <Layout>
      <TakePhotoStepPage
        title="(4) Zdjęcie z nakryciem głowy"
        photoType="4-hat"
        next="/background"
      >
        <div>
          <p>
            Teraz proszę Cię o zdjęcie z nakryciem głowy: załóż czapkę, beret,
            cokolwiek, co zakryje część Twoich włosów.
          </p>
        </div>
      </TakePhotoStepPage>
    </Layout>
  )
}

export default GlassesPhotoPage
