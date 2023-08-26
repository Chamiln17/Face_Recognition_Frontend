import React, { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Rank from "./components/Rank/Rank";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

const App = () => {
  const [input, setInput] = useState("");
  const [imgUrlRecog, setImgUrlRecog] = useState("");
  const [box, setBox] = useState({});
  const [route ,setRoute]=useState("signin")
  const [isSignedIn,setisSignedIn]=useState(false)

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //await console.log(container);
  }, []);
  const partclesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  // This function calculates the box dimensions for the face
const calcBoxFace = (data) => {
  const image = document.getElementById("inputimage");
  const width = Number(image.width);
    const height = Number(image.height);
  return {
    right: width - (width * data.right_col),
    bottom: height - (height * data.bottom_row),
    left: width * data.left_col,
    top: height * data.top_row,
};
  };
  const displayFaceBox = (box) => {
    //console.log(box);
    setBox(box);
  };

  // This function updates the input state with the value from the input field

  const onInputChange = (event) => {
    //console.log(event.target.value);
    setInput(event.target.value);
  };

  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const MODEL_ID = "face-detection";
  // This function creates the JSON body for your request

  const requestOptionsJSON = (imgUrl) => {
    const PAT = "a3cf559c3aea45cc8c8f5c0f7c9ee95d";
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = "chamil_n13";
    const APP_ID = "test";
    // Change these to whatever model and image URL you want to use
    const IMAGE_URL = imgUrl;

    // Create the JSON body for your prediction
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Key ${PAT}`,
      },
      body: raw,
    };
    return requestOptions;
  };

  const onButtonSubmit = () => {
    setImgUrlRecog(input);
    fetch(
      "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
      requestOptionsJSON(input)
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
            displayFaceBox(calcBoxFace(result.outputs[0].data.regions[0].region_info.bounding_box));
      })
      .catch((error) => console.log("error", error));
  };

  const onRouteChange=(route)=>{
    if(route==="home"){
      setisSignedIn(true);
    }else {
      setisSignedIn(false);
    }
    setRoute(route)
  };


  return (
    <div className="App">
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={partclesOptions}
      />
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === "signin" ? (
        <SignIn onRouteChange={onRouteChange}  />
      ) : route === "register" ? (
        <Register onRouteChange={onRouteChange}  />
      ) : (
        <div>
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition box={box} imgUrlRecog={imgUrlRecog} />
        </div>
      )}
    </div>
  );
  };
  
  export default App;
  