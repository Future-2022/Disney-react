import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];
  let sliders = [];

  useEffect(() => {

    //   const docData  = [
    //     {
    //         "backgroundImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg",
    //         "cardImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg",
    //         "description": "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
    //         "subTitle": "2015 • 1h 35m • Coming of Age, Family, Animation",
    //         "title": "Inside Out",
    //         "titleImg": "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78",
    //         "type": "recommend"
    //     },
      
    // ]
    // docData.forEach(x=> {
    //   db.collection("movies").doc().set(x);
    // })
    
    db.collection("sliders").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        sliders =[...sliders, { id: doc.id, ...doc.data() }];
      })})

    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        // eslint-disable-next-line default-case
        switch (doc.data().type) {
          case "recommend":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            // eslint-disable-next-line react-hooks/exhaustive-deps
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
          slider: sliders
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
