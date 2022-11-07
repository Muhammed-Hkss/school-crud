import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './CustomizeStyle.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useParams } from 'react-router-dom'
import { getToCardSlider } from '../../config'




const Customize = () => {
  const [activeThumb , setThumbActive] = React.useState()
	const [cardData, setSliderCardData] = React.useState(null)
	const [reviewersData, setReviewersData] = React.useState(null)
  const {id} = useParams()






  const getProduct = () => {
		getToCardSlider(id).then(r => {
			if (r) {
				setSliderCardData(r.data)
				r.data && (
					setReviewersData(() => {
						return Object.entries(r.data).map(([id, item]) => {
							return {
								id,
								...item
							}
						})
					})
				)
			}
		})
	}

  React.useEffect(() => {
    getProduct()
  } ,[id])


  return (
    <>
      <div id='Blog' className='customize_container'>
        <div className='customize_row'>
          <div className='customize_image_data'>
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation , Thumbs]}
              grabCursor={true}
              thumbs={{swiper: activeThumb}}
              className='product_imags_slider'
            >
              {
                reviewersData && reviewersData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item.image} alt="product image" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className='customize_text_data'>
            <h1 className='customize_text_h1'>ИНДИВИДУАЛЬНЫЙ УЧЕБНЫЙ ПЛАН</h1>
            <p className='customize_text_p'>Преподаватели Санкт-Петербурга и Москвы разрабатывают каждому ученику индивидуальную программу обучения, которая зависит от знаний и успеваемости ребенка по всем базовым предметам, а также от личных предпочтений в науках и способностей.</p>
            <Swiper
              onClick={setThumbActive}
              loop={true}
              spaceBetween={10}
              slidesPerView={3}
              navigation={true}
              modules={[Navigation , Thumbs]}
              grabCursor={true}
              className='product_imags_slider_thumbs'
            >
              {
                 reviewersData && reviewersData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className='product_imags_slider_thumbs_wrapper'>
                      <img src={item.image} alt="product image" />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Customize