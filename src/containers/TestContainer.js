import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Description from '../components/Message/Description';
import './test.scss';

class TestContainer extends Component {
  constructor(props) {
    super(props);
    this.click1 = this.click1.bind(this);
  }

  click1 () {
    alert(1);
  }

  render() {
    const descriptions = [
      `A collection of fifty-four contemporary residences, 570 Broome, draws inspiration from the history and style of West SoHo. From acclaimed architect Tahir Demircioglu, with impeccable interiors by Skidmore, Owings and Merrill, the design references the area's industrial past via soaring ceiling heights and a silhouette evocative of staggered cubes.`,
      `PHB is a full floor residence on the 25th floor overlooking beautiful and iconic visual treasures from every window. Sweeping cinematic views grace every room, from the Hudson River, south to One World Trade and all points north with the Empire State Building a glowing beacon at night. Enter the home via the key-lock elevator to a private entry gallery leading to the beautiful Great Room. With ceilings nearly 11 feet tall, the immediate dramatic effect of this 3 bedroom, 3 bath 1,943 SF home is wonderful for entertaining.`,
      `PHB features an expansive open SOM designed kitchen with Miele five-burner gas range and wine refrigerator, Calacatta Alto Marble slab countertops & backsplash, and Lineadecor Walnut stained cabinets showcasing beautiful natural wood.`,
      `The master suite enjoys southern light and views, a walk-in closet, and a luxurious 5 fixture master bath. The en suite bath features custom designed double vanity by SOM, Calacatta Alto marble countertop, separate shower, custom medicine cabinet with integrated lighting, honed Calacatta Alto marble walls cut from one slab for vein continuity and radiant-heated Dolomiti Blanco marble floors in chevron pattern. An Alape sink, black matte Zucchetti fixtures and accessories are special features of this room.`,
      `Each secondary bedroom will enjoy glorious views north to the Empire State Building. Adding to the beautiful detailing in this apartment is the 5" wide hardwood solid oak floor with custom walnut finish throughout the apartment, 4-pipe heating and cooling system, and a full-sized washer/dryer.`,
      `Amenity areas at 570 Broome are designed to connect spaces as well as residents. The street level view of the back-garden beckons from the moment of arrival. On the second floor, a private resident lounge with a game room opens onto a landscaped outdoor terrace. The fitness center includes Peloton bikes and a yoga studio. Additional services include a twenty-four-hour attended lobby, full-time super and building porter, complimentary indoor bike storage and private storage units available for purchase.`,
      `Quaint cobblestone streets and traditional cast iron buildings point to SoHo's rich history as a manufacturing hub turned avant-garde artist enclave. Today, the neighborhood remains integral to the city's creative culture with its many boutiques, art galleries and nightlife hotspots. The former factories of West SoHo are now likely to house media and tech companies as upscale cocktail bars and modern hotels continue to debut in the area. 570 Broome's central position in West SoHo places it within close proximity to other popular downtown neighborhoods such as Tribeca, the West Village and NoLita.`
    ];
    return (
      <div className='test_container'>
        <Description
          descriptions={descriptions}
          line={5}
        />
      </div>
    );
  }
}

export default TestContainer;