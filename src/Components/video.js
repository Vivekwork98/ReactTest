import React,{useState} from 'react'
import ModalVideo from 'react-modal-video'
 
const Video = (props) => {
 
    const [isOpen, setOpen] = useState(false)
    console.log('video', props);
 
    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={props.videoId} onClose={() => setOpen(false)} />
 
            <button data-testid="trailer" className="btn-primary" onClick={()=> setOpen(true)}>View Trailer</button>
        </>
    )
}

export default Video;