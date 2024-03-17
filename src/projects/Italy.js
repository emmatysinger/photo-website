import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Italy = () => {
    const imageArray = [];

    for (var i = 1; i <= 22; i++) {
    imageArray.push(require('../img/italy/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Italy;


