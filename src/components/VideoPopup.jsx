import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/css/modal-video.css";

const VideoPopup = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
          
        <div className="ts-testimonial-play-btn">
          <a className="popup-video" data-video="https://www.youtube.com/watch?v=TfU0qjuZkJ4" onClick={() => setOpen(true)}>
            <i className="fas fa-play" />
          </a>  
        </div>
        
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="TfU0qjuZkJ4"
          onClose={() => setOpen(false)} 
        />
        
        </>
    );
};

export default VideoPopup;