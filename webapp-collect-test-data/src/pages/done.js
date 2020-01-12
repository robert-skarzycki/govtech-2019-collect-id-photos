import React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import { Button, Grid } from "@material-ui/core"
import { observer, inject } from "mobx-react"

const IndexPage = inject(`store`)(
  observer(({ store }) => {
    const startAgain = () => {
      store.startNewSession()
      navigate("/valid")
    }

    return (
      <Layout>
        <h3>Zrobione, dzięki!</h3>
        <p>
          To już wszytskie prośby o zdjęcia - bardzo Ci dziękuję za pomoc!
          Oczywiście, jeśli masz ochotę i chcesz dać mi więcej przykładów
          poprawnie lub niepoprawnie wykonanych fotografii do dowodu - możesz
          zacząć rundkę od nowa.
        </p>
        <Grid container direction="row" justify="center">
          <Grid item>
            <Button onClick={startAgain} variant="contained">
              Tak, jeszcze raz!
            </Button>
          </Grid>
        </Grid>
        <p>
          Możesz też zaparzyć sobie dobrą herbatę - należy Ci się nagroda za
          kawał dobrej roboty! :)
        </p>
      </Layout>
    )
  })
)

export default IndexPage
