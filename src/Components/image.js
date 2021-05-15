import ModalImage from "react-modal-image";

const Image = (props) => {

    const urlToTinyImageFile = props.imageUrl;
    const urlToHugeImageFile = props.imageUrl
    

    return (
        <ModalImage
            small={urlToTinyImageFile}
            large={urlToHugeImageFile}
            alt="Image"
        />
    )
}

export default Image;