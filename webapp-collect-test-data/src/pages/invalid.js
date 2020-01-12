import React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import { Button, Grid } from "@material-ui/core"

const ValidPhotoPage = () => {
  return (
    <Layout>
      <h2>Seria zdjęć nieprawidłowych</h2>
      <div>
        <p>
          Teraz będę Cię prosił o wykonanie zdjęć nieprawidłowych. Postaraj się
          jednak, żeby zapozować do zdjęcia tak, jakby to miała być fotografia
          zgodna ze standardami - w danym kroku "łamiemy" tylko jedną zasadę.
          Np. za chwilę będę Cię prosił o zdjęcie w okularach - postaraj się,
          aby inne wymagania co do zdjęcia - na przykład jednolite tło - były
          spełnione.
        </p>
        <Grid container direction="row" justify="center">
          <Grid item>
            <Button onClick={() => navigate("/glasses")} variant="contained">
              Dalej
            </Button>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default ValidPhotoPage
