import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const LowerAlps = () => {
    const imageArray = [];

    for (var i = 1; i <= 19; i++) {
    imageArray.push(require('../img/lower_alps/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default LowerAlps;


