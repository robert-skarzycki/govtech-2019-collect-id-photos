import React from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import { Grid, Button } from "@material-ui/core"

const IndexPage = () => {
  return (
    <Layout>
      <h3>O co chodzi?</h3>
      <p>
        Biorę udział w{" "}
        <a href="https://konkursy.govtech.gov.pl/start/postepowanie/47">
          konkursie GovTech
        </a>
        , organizowanym przez Ministerstwo Cyfryzacji. Jedno z zadań polega na
        stworzeniu aplikacji, która ma umożliwić zrobienie poprawnego zdjęcia do
        dowodu osobistego.
      </p>
      <p>
        Żeby stworzyć taką aplikację, muszę wytrenować sztuczną inteligencję,
        aby rozpoznawała, czy dane zdjęcie spełnia standardy, a jeśli nie -
        dlaczego. Na przykład - bo tło jest zbyt jasne albo włosy zakrywają
        część twarzy.
      </p>
      <p>
        Żeby wytrenować do tego zadania sztuczną inteligencję potrzebuję dużo
        zdjęć - zarówno poprawnych, jak i takich, które nie spełniają urzędowych
        wymogów. Do tego celu przygotowałem tę stronę, dzięki której mogę zebrać
        te zdjęcia w odpowiednich kategoriach.
      </p>
      <p>
        Proszę Cię zatem o pomoc - wystarczy, że zrobisz kilka selfie, kierując
        się wskazówkami krok po kroku. Zapewniam Cię, że zrobione zdjęcia
        wykorzystam tylko do tego zadania - nauczenia sztucznej inteligencji
        rozpoznawania błędnie zrobionych zdjęć - a potem <b>wszystkie usunę</b>.
      </p>
      <p>
        Razem możemy usprawnić naszą administrację państwową i uczynić ją
        bardziej przyjazną obywatelowi. To co, zaczynamy?
      </p>
      <Grid container direction="row" justify="center">
        <Grid item>
          <Button variant="contained" onClick={() => navigate("/valid")}>
            Tak! Do dzieła!
          </Button>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
