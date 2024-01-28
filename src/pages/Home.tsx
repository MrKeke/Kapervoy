import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const Home: React.FC = () => {
  const responsive = {
    all: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
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
          <img src="/CarouselIcons/Icon1.jpg" alt="Rec" />
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
          <img src="/CarouselIcons/Icon3.jpg" alt="Rec" />
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
          <img className="blur-sm" src="/CarouselIcons/Icon2.jpg" alt="Rec" />
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
      <>
        <div className="mt-[60px] ml-[98px] flex flex-col ">
          <p className="text-[40px]">Каталог Товаров</p>
          <div className="flex items-center mt-[60px] text-white">
            <div className="relative ">
              <img src="/JPG/DSC_5138%206.jpg" alt="WomenCollection" />
              <p className="absolute px-[77px] bottom-[26px] left-[180px] shadow-[#514A7E] shadow border border-[#514A7E] bg-[#514A7E] py-[23px] rounded-[20px]">
                Женская коллекция
              </p>
            </div>
            <div className="relative">
              <img src="/JPG/DSC_5138%202.jpg" alt="MenCollection" />
              <p className="absolute px-[77px] bottom-[26px] left-[180px] border border-white py-[23px] rounded-[20px]">
                Мужская коллекция
              </p>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="flex items-center flex-col mt-[60px] ">
          <p className="text-[40px] font-[400]">Как мы работаем</p>
          <div className="flex mt-[38px] mx-[96px]">
            <div className="flex flex-col gap-[20px] items-center justify-center text-center">
              <img
                className="w-[180px] h-[180px]"
                loading="lazy"
                src="/PNG/pocket.png"
                alt="pocketIcon"
              />
              <p className="font-[600] text-[20px] leading-[160%]">
                Оформление заказа
              </p>
              <p>Вы оставляете заявку на сайте или по телефону</p>
            </div>
            <div className="flex flex-col gap-[20px] items-center justify-center text-center">
              <img
                className="w-[180px] h-[180px]"
                loading="lazy"
                src="/PNG/phone.png"
                alt="phoneIcon"
              />
              <p className="font-[600] text-[20px] leading-[160%]">
                Подстверждение заказа
              </p>
              <p>Менеджер связывается с Вами для подтверждения заказа</p>
            </div>
            <div className="flex flex-col gap-[20px] items-center justify-center text-center">
              <img
                className="w-[180px] h-[180px]"
                loading="lazy"
                src="/PNG/track.png"
                alt="trackIcon"
              />
              <p className="font-[600] text-[20px] leading-[160%]">Доставка</p>
              <p>Мы быстро доставляем Вашу посылку по указанному адресу</p>
            </div>
            <div className="flex flex-col gap-[20px] items-center justify-center max-w-[216px] text-center">
              <img
                className="w-[180px] h-[180px]"
                loading="lazy"
                src="/PNG/bag.png"
                alt="bagIcon"
              />
              <p className="font-[600] text-[20px] leading-[160%]">
                Получение товара
              </p>
              <p>Любым для Вас удобным способом</p>
            </div>
          </div>
        </div>
      </>
    </>
  )
}
