import React from 'react'
import ImageGallery from 'react-image-gallery'

import SEO from '../components/seo'

import exia from '../images/pg_exia.jpg'
import dmExia from '../images/dm_exia.jpeg'
import providence from '../images/providence.jpeg'
import sFreedom from '../images/pg_strike_freedom.jpeg'

class Gunpla extends React.PureComponent {
  render () {
    const images = [
      {
        original: dmExia,
        thumbnail: dmExia
      },
      {
        original: providence,
        thumbnail: providence
      },
      {
        original: exia,
        thumbnail: exia
      },
      {
        original: sFreedom,
        thumbnail: sFreedom
      }
    ]

    return (
      <div>
        <SEO title="Gunpla" />
        <div className="gunplaContainer">
          <ImageGallery items={images} thumbnailPosition='top' />
        </div>
      </div>
    )
  }
}

export default Gunpla
