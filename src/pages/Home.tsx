import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FeedbackTicket } from '../components/FeedbackTicket'
import { Title } from '../components/shared/Title'

export const Home: React.FC = () => {
  const responsive = {
    all: {
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
        <div className=" ml-[98px] flex flex-col ">
          <Title text={'Каталог товаров'} />
          <div className="flex items-center text-white">
            <div className="relative ">
              <img src="/JPG/girlInWhite.jpg" alt="WomenCollection" />
              <p className="absolute px-[77px] bottom-[26px] left-[180px] shadow-[#514A7E] shadow border border-[#514A7E] bg-[#514A7E] py-[23px] rounded-[20px]">
                Женская коллекция
              </p>
            </div>
            <div className="relative">
              <img src="/JPG/manInBlack.jpg" alt="MenCollection" />
              <p className="absolute px-[77px] bottom-[26px] left-[180px] border border-white py-[23px] rounded-[20px]">
                Мужская коллекция
              </p>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="flex items-center flex-col ">
          <Title text={'Как мы работаем'} />
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
      <>
        <div className="mt-[114px] bg-[#1F1E1E] text-[#FCF5D8] px-[100px] h-[776px] mb-[121px] flex gap-[47px] relative">
          <div style={{ transform: 'translateY(-54px)' }}>
            <img
              className="w-[620px] h-[830px]"
              alt="PeopleInMerch"
              src="/JPG/twoPeopleInWhite.jpg"
            />
          </div>
          <div className="flex-col flex justify-center items-center mt-[36px] max-w-[614px] gap-[27px]">
            <p className="text-2xl self-start font-bold">О нас</p>
            <p className="text-xl">
              KAPERVOY — это те самые толстовки, о которых вы слышали. Зимой
              2011 среди студентов МГУ экономического факультета набирают
              популярность серые толстовки MSU в стиле американских колледжей.
              Уже через несколько месяцев молодежь в толстовках можно встретить
              на каждом факультете главного университета страны. Сегодня Универ
              Клаб — это качественные толстовки для 500 вузов России. И более
              15.000 довольных компаний, индивидуальных предпринимателей и
              частных лиц. Мы занимаемся университетскими толстовками,
              толстовками для команд, черлидеров и мерчем для организаций.
              <br></br> <br></br> У нас есть собственное швейное и печатное
              производство, поэтому вам не нужно сначала искать то на чем
              печатать, а потом где. Мы отдадим ваш заказ полностью упакованным
              и готовым для ваших целей. Мы убеждены, что не обязательно быть
              дизайнером, чтобы создать свою уникальную вещь, достаточно
              обратиться к профессионалам, которые знают как реализовать идею.
              Мы одинаково хорошо выполним заказы разными методами нанесения,
              будь то прямая печать, шелкография, термоперенос или вышивка.
            </p>
          </div>
        </div>
      </>
      <>
        <div className="flex flex-col gap-[14px] mx-[14px]text-black">
          <div
            style={{ backgroundImage: `url(/JPG/womanInMerch.jpg)` }}
            className="w-[1424px] bg-center bg-no-repeat pl-[70px] pr-[72px] bg-cover pt-[24px] pb-[33px] flex flex-col items-start gap-[252px]  justify-between"
          >
            <p className="text-3xl">Услуги</p>
            <button className="self-end border rounded-[20px] border-black py-[20px] px-[44px]">
              Перейти
            </button>
          </div>
          <div
            style={{ backgroundImage: `url(/JPG/womanInMerch2.jpg)` }}
            className="w-[1424px] bg-center bg-no-repeat pl-[70px] pr-[72px] bg-cover pt-[24px] pb-[33px] flex flex-col items-start gap-[252px]  justify-between"
          >
            <p className="text-3xl">Галерея</p>
            <button className=" text-white self-end border rounded-[20px] border-[#514A7E] py-[20px] px-[44px] bg-[#514A7E]">
              Перейти
            </button>
          </div>
        </div>
      </>
      <>
        <div className=" px-[100px]">
          <Title text={'Отзывы наших клиентов'} />
        </div>
      </>
      <>
        <div className="flex gap-[40px] items-center justify-center ">
          <FeedbackTicket
            description="Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна."
            avatar="/JPG/womanInMerch2.jpg"
            rate={4}
            name="Басков Олег"
            date="07.01.2004"
          />
          <FeedbackTicket
            description="Заказываю постоянно одежду в этом магазине! Хорошие цены, хорошее качество! Приятные менеджеры! Все быстро, доступно, удобно! Спасибо."
            avatar="/JPG/womanInMerch.jpg"
            rate={2}
            name="Кристина Василюк"
            date="01.01.2004"
          />
        </div>
      </>
      <>
        <div className="flex px-[109px] flex-col justify-center">
          <Title text={'Контакты'} />
          <p className="text-[20px] text-[#514A7E]  text-xl mb-[20px]">
            Адрес: Озерковская набережная, 22/24с1, Москва(магазин, склад и
            офис)
          </p>
          <div>
            <iframe
              className="w-full p-0 h-[180px]"
              src="https://yandex.ru/map-widget/v1/?ll=37.636224%2C55.740391&mode=poi&poi%5Bpoint%5D=37.636152%2C55.740429&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1155758911&z=20.96"
            ></iframe>
            `
            <div className="flex justify-between text-[20px] text-[#514A7E] items-start  ">
              <div className="flex flex-col  gap-2 ">
                <p>
                  Телефон:
                  <a className="underline" href="tel:+74959664792">
                    {' '}
                    +7 (495) 966-47-92
                  </a>
                </p>
                <p>
                  WhatsApp:
                  <a
                    className="underline"
                    target="_blank"
                    href="https://wa.me/74959664792?text=Добрый%20день,"
                  >
                    {' '}
                    +7 (926) 168-83-47
                  </a>
                </p>
                <p>
                  Telegram:
                  <a
                    className="underline"
                    target="_blank"
                    href="https://t.me/univerclubbot"
                  >
                    @univerclubbot
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Часы работы: Ежедневно с 10:00 до 21:00 </p>
                <p>
                  E-mail:
                  <a className="underline" href="mailto:team@univer-club.ru">
                    {' '}
                    team@univer-club.ru
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className="flex flex-col px-[100px]">
          <Title text={'Способы оплаты'} />
          <div className="flex gap-[25px]"></div>
        </div>
      </>
    </>
  )
}
