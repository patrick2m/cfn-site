import './Gallery.scss';

import imgGalery from '../../assets/img/about_1.jpg';

export default function Gallery() {
    return (
        <table>
            <tbody>
                <tr>
                    <td><img src={imgGalery} alt="teste" /></td>
                    <td><img src={imgGalery} alt="teste" /></td>
                    <td><img src={imgGalery} alt="teste" /></td>
                </tr>
                <tr>
                    <td><img src={imgGalery} alt="teste" /></td>
                    <td><img src={imgGalery} alt="teste" /></td>
                    <td><img src={imgGalery} alt="teste" /></td>
                </tr>
                <tr>
                    <td><img src={imgGalery} alt="teste" /></td>
                    <td><img src={imgGalery} alt="teste" /></td>
                    <td><img src={imgGalery} alt="teste" /></td>
                </tr>
            </tbody>
        </table>
    );
}
