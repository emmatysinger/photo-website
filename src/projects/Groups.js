import '../pages/gallery.css';
import Gallery from '../components/Gallery'

const Groups = () => {
    const imageArray = [];

    for (var i = 1; i <= 6; i++) {
    imageArray.push(require('../img/groups/EPT-' + i + '.jpg'));
    }

    return (
        <Gallery data={imageArray} />
    )
}

export default Groups;


