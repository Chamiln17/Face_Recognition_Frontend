import './FaceRecognition.css';


const FaceRecognition  = ({imgUrlRecog, box}) => {
    return ( <div className="center ma ">
        <div className="absolute mt2">
            <img id="inputimage" src={imgUrlRecog} alt="face"  width="500px" height="auto"/>
            <div className="bounding_box" style={{ left: box.left , right:box.right , top:box.top , bottom:box.bottom,}}></div>
        </div>
    </div> );
}
 
export default FaceRecognition ;