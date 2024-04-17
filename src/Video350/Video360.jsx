import React from 'react';

const Video360 = ({ videoId }) => {
  return (
    <div>
      <iframe
        title="360-degree video"
        width="100%"
        height="1000"
        src={`https://www.youtube.com/embed/${videoId}?controls=1&loop=1&rel=0&modestbranding=1&showinfo=0&autohide=1&fs=0&enablejsapi=1&iv_load_policy=3&playlist=${videoId}&start=0&end=0&playsinline=1&mute=0&origin=https://yourwebsite.com`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Video36 = () => {
  const videoId = 'FicdWhMgadQ'; // Replace with your video ID

  return (
    <div className='my-44'>
      <h1 className='text-6xl text-center font-poppins'>Explore Our Stunning Property in 360 Degrees</h1>
      <br />
      <br />
      <p className='text-xl text-center font-poppins'>Step inside and experience our exquisite property like never before with our immersive 360-degree video tour. <br /> Navigate through every room, admire the elegant interiors, and envision your future in this beautiful home.</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Video360 videoId={videoId} />
    </div>
  );
};

export default Video36;
