import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class BootstrapCarouselComponent extends React.Component {
render() {
return (
<div>
<div className='container-fluid' >
<div className="row">
<div className="col-sm-12">
</div>
</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item>
<img
className="d-block w-100 carpusel-img"
src="https://ar.limu.edu.ly/wp-content/uploads/sites/18/2020/10/pure-white-background-85a2a7fd.jpg"
alt="First slide"
/>
<Carousel.Caption>
<p>Cayan has achieved the CCC controls and CCC Certificate .</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 carpusel-img"
src="https://ar.limu.edu.ly/wp-content/uploads/sites/18/2020/10/pure-white-background-85a2a7fd.jpg"
alt="Second slide"
/>
<Carousel.Caption>
<p>Cayan complies with the international standards <span className="standars-content"> (ISO 9001, ISO 14001 & ISO 45001) </span></p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100 carpusel-img"
src="https://ar.limu.edu.ly/wp-content/uploads/sites/18/2020/10/pure-white-background-85a2a7fd.jpg"
alt="Third slide"
/>
<Carousel.Caption>
<p>CAYAN is providing wide range of supporting services to all Oil & Gas companies.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}
export default BootstrapCarouselComponent;