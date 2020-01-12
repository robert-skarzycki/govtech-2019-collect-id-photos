import React from "react"
import Layout from "../components/layout"
import { TakePhotoStepPage } from "../components/takePhotoStepPage"

const GlassesPhotoPage = () => {
  return (
    <Layout>
      <TakePhotoStepPage
        title="(5) Nieprawidłowe tło"
        photoType="5-background"
        next="/cropping"
      >
        <div>
          <p>
            Następnie kolej na nieprawidłowe tło - zrób sobie zdjęcie na tle
            dowolnego tła, które nie jest jednolite: to może być krajobraz za
            Tobą, tapeta, inna osoba, po prostu cokolwiek.
          </p>
        </div>
      </TakePhotoStepPage>
    </Layout>
  )
}

export default GlassesPhotoPage
