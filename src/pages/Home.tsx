import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const Home: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <>
      <Carousel
        autoPlaySpeed={10000}
        infinite={true}
        autoPlay={true}
        responsive={responsive}
        className="w-full"
      >
        <div className="relative">
          <img src="/CarouselIcons/Icon1.svg" alt="Rec" />
          <div className="absolute top-[178px] left-[210px] z-10">
            <p className="text-[90px] font-[400px] tracking-[9px] leading-[87%] font-sans">
              Анонс новой
              <br /> коллекции
            </p>
            <p className="text-[25px] mt-[48px] leading-[30px] font-[400px]">
              Футболок,толстовок и свитшотов <br /> с любыми принтами
            </p>
            <p className="text-[20px] font-[300px] tracking-[1px]  mt-[40px]">
              Твой комфорт на каждый день
            </p>
          </div>
        </div>
        <div>
          <img src="/CarouselIcons/Icon3.svg" alt="Rec" />
          <div className="absolute top-[178px] left-[210px] z-10">
            <p className="text-[90px] font-[400px] tracking-[9px] leading-[87%] font-sans">
              Зимняя <br /> коллекция
            </p>
            <p className="text-[25px] mt-[48px] leading-[30px] font-[400px]">
              То, что тебе действительно нужно <br /> на этот холодный год
            </p>
            <p className="text-[20px] font-[300px] tracking-[1px]  mt-[40px]">
              Эластичные резинки не теряют форму <br />
              Глубокий карман кенгуру
              <br />
              Удобный двойной капюшон
              <br />
              Двойные акуратные швы
              <br />
            </p>
          </div>
        </div>
        <div>
          <img className="blur-sm" src="/CarouselIcons/Icon2.svg" alt="Rec" />
          <div className="absolute top-[178px] left-[210px] z-10">
            <p className="text-[90px] font-[400px] tracking-[9px] leading-[87%] font-sans">
              Получи скидку <br /> на первый заказ
            </p>
            <p className="text-[25px] mt-[48px] leading-[30px] font-[400px]">
              То, что тебе действительно нужно <br />
              на этот холодный год
            </p>
            <p className="text-[20px] font-[300px] tracking-[1px]  mt-[40px]">
              Эластичные резинки не теряют форму <br />
              Глубокий карман кенгуру <br />
              Удобный двойной капюшон <br />
              Двойные акуратные швы <br />
            </p>
          </div>
        </div>
      </Carousel>
    </>
  )
}
