import video from "../video/video.mp4";
function Hero() {
  return (
    <div className="h-screen">
      {/* <video className='h-full w-full object-cover' autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
      <p className="h-screen flex justify-center items-center">
        Video del hero{" "}
      </p>
    </div>
  );
}

export default Hero;
