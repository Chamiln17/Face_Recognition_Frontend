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
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setisSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });
  const [particles, setParticles] = React.useState(0);


const initialState = ()=>{
    setInput("");
    setImgUrlRecog("");
    setBox({});
    setRoute("signin");
    setisSignedIn(false);
    setUser({
      id: "",
      name: "",
      email: "",
      entries: 0,
      joined: "",
    });
}

  const loadUser = (user) => {
    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      entries: user.entries,
      joined: user.joined,
    });
  };

  /*   useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then(console.log);
  }, []);  */ // TESTING THE WATERS XD

  const MAX_PARTICLES = 100;
  const PUSH_NUMBER = 2;
  const handleParticlesPush = (mode) => {
    if (mode === "push" && particles >= MAX_PARTICLES) {
      return;
    }
    setParticles((prev) => prev + PUSH_NUMBER);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //await console.log(container);
  }, []);
  const partclesOptions = {
    fpsLimit: 90,
    animation: {
      enable: true,
      speed: 1,
      minimumValue: 0,
      sync: false,
    },
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
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: PUSH_NUMBER,
          particles_nb: PUSH_NUMBER,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      /* life: {
        duration: {
          value: 5,
        },
      }, */
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
        value: MAX_PARTICLES,
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
      right: width - width * data.right_col,
      bottom: height - height * data.bottom_row,
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

  const onPictureSubmit = () => {
    setImgUrlRecog(input);
    fetch(
      "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
      requestOptionsJSON(input)
    )
      .then((response) => response.json())
      .then((result) => {
        if(result){
          setUser(Object.assign(user , {entries:Number(user.entries)+1}))
          fetch("http://localhost:5000/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
            })
          })
          .then(response => response.json())
          .then(count =>{console.log(user.entries)})
          .catch(console.log);
        }
        displayFaceBox(
          calcBoxFace(
            result.outputs[0].data.regions[0].region_info.bounding_box
          )
        );
      })
      .catch((error) => console.log("error", error));
  };

  const onRouteChange = (route) => {
    if (route === "home") {
      setisSignedIn(true);
    } else {
      initialState();
    }
    setRoute(route);
  };

  return (
    <div className="App">
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={partclesOptions}
        onParticlesUpdate={handleParticlesPush}
      />
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === "signin" ? (
        <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : route === "register" ? (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <div>
          <Rank userEntires={user.entries} userName={user.name} />
          <ImageLinkForm
            onInputChange={onInputChange}
            onPictureSubmit={onPictureSubmit}
          />
          <FaceRecognition box={box} imgUrlRecog={imgUrlRecog} />
        </div>
      )}
    </div>
  );
};

export default App;
