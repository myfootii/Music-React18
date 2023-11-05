import './scss/carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y ,EffectCoverflow,Autoplay} from 'swiper/modules';
import { Image } from 'antd';
import a from '@/assets/img/model66.jpg'

const Carousel=()=>{
  return (
    <div className="banner">
      <Swiper
      // install Swiper modules
      modules={[Pagination, A11y,EffectCoverflow,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      effect="coverflow"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image className='banner_img' preview={false} src={a} width={280} height={180} /></SwiperSlide>
      <SwiperSlide><Image className='banner_img' preview={false} src={a} width={280} height={180} /></SwiperSlide>
      <SwiperSlide><Image className='banner_img' preview={false} src={a} width={280} height={180} /></SwiperSlide>
      <SwiperSlide><Image className='banner_img' preview={false} src={a} width={280} height={180} /></SwiperSlide>
    </Swiper>
    </div>
  )
}
export default Carousel