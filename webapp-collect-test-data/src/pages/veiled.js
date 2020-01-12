import React from "react"
import Layout from "../components/layout"
import { TakePhotoStepPage } from "../components/takePhotoStepPage"

const GlassesPhotoPage = () => {
  return (
    <Layout>
      <TakePhotoStepPage
        title="(3) Zakryta twarz"
        photoType="3-veiled"
        next="/hat"
      >
        <div>
          <p>
            A teraz zakryj częściowo twarz: może rozpusć włosy (jeśli masz
            wystarczająco długie), zakryj część twarzy ręką, chustką. Jeśli
            chcesz, możesz sobie założyć opaskę pirata. ;)
          </p>
        </div>
      </TakePhotoStepPage>
    </Layout>
  )
}

export default GlassesPhotoPage
