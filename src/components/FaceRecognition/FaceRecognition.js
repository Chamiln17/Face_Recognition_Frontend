const FaceRecognition  = ({imgUrlRecog}) => {
    return ( <div className="center ma ">
        <div className="absolute mt2">
            <img src={imgUrlRecog} alt="face"  width="500px" height="auto"/>
        </div>
    </div> );
}
 
export default FaceRecognition ;