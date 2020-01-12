import React from "react"
import Layout from "../components/layout"
import { TakePhotoStepPage } from "../components/takePhotoStepPage"
import styled from "@emotion/styled"

const ValidPhotoPage = () => {
  return (
    <Layout>
      <TakePhotoStepPage
        title="(1) Poprawne zdjęcie"
        photoType="1-valid"
        next="/invalid"
      >
        <div>
          <Highlighted>
            Za chwilę przeglądarka poprosi Cię o dostęp do kamery - rzecz jasna,
            musisz wyrazić zgodę, inaczej nic nie da się zrobić. :)
          </Highlighted>
          <p>
            W pierwszym kroku proszę Cię o zrobienie sobie zdjęcia, które będzie
            jak najbardziej zgodne z urzędowymi wymaganiami - czyli tak, jakbyś
            robił zdjęcie do dowodu osobistego u fotografa. Proszę, zwróć uwagę
            na poniższe wskazówki:
          </p>
          <ul>
            <li>zdejmij okulary,</li>
            <li>włosy nie mogą zasłaniać twarzy,</li>
            <li>tło za Tobą mus być jednolite,</li>
            <li>twarz jest równo oświetlona, nie ma zbyt jasnych refleksów,</li>
            <li>wykadrowana jest cała głowa powyżej linii ramion.</li>
          </ul>
          <Highlighted>
            Zdjęciom towarzyszyć będzie "nakładka" w postaci dwóch poziomych
            pasów koloru zielonego. Celuj tak, aby w górnym pasie znalazły się
            Twoje oczy, a dolny pasek wyznaczał podbródek.
          </Highlighted>
        </div>
      </TakePhotoStepPage>
    </Layout>
  )
}

export default ValidPhotoPage

const Highlighted = styled.div`
  padding: 10px;
  background-color: yellow;
  color: black;
  font-weight: bold;
`
