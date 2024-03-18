import '../scss/carousel.scss';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination,EffectCoverflow,Autoplay} from 'swiper/modules';
import { Image,Skeleton,App } from 'antd';
import { useState,useEffect } from 'react';
import { getBanner } from '@/apis/home.js';
import a from '@/assets/img/model66.jpg'

const Carousel=()=>{
  const [ loading, setLoading ] = useState(true);
  const { message } = App.useApp();
  const [ list, setList ] = useState([]);
  const getBannerHandler = async () => {
    // 获取轮播图数据
      const { data: res } = await getBanner()

      if (res.code !== 200) {
          return message.error({
              content: res.message
          });
      }
  
      setList(res.banners);
      setLoading(false);
      console.log(list)
  }

  useEffect(() => {
      getBannerHandler();
  }, []);

  return (
    <div className="carousel">
      {
        <Skeleton loading={loading} active paragraph={false} className='Skeleton-banner'>
          <Swiper
             spaceBetween={50}
             slidesPerView={3}
             autoplay={{ delay: 3000 }}
             pagination={{ clickable: true }}
             modules={[Pagination, Autoplay]}
             className="banner_wrap"
          >
            {/* <SwiperSlide><Image  preview={false} src={a} width={280} height={200}/></SwiperSlide>
            <SwiperSlide><Image  preview={false} src={a} width={280} height={200}/></SwiperSlide>
            <SwiperSlide><Image  preview={false} src={a} width={280} height={200}/></SwiperSlide>
            <SwiperSlide><Image  preview={false} src={a} width={280} height={200}/></SwiperSlide> */}
            {list.map(item=><SwiperSlide key={item.imageUrl}><Image className='banner_img' preview={false} src={item.imageUrl}/></SwiperSlide>)}
          </Swiper>
        </Skeleton>
        
    }
  </div>
  )
}
export default Carousel