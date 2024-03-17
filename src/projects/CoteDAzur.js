import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const CoteDAzur = () => {
    const imageArray = [];

    for (var i = 1; i <= 65; i++) {
    imageArray.push(require('../img/cotedazur/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default CoteDAzur;


