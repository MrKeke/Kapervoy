import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
  const [inputValue, setInputValue] = useState('Поиск по каталогу')
  const [activeInput, setActiveInput] = useState(false)
  useEffect(() => {
    if (activeInput) {
      setInputValue('')
    }
  }, [activeInput])

  return (
    <nav className="bg-[#1F1E1E] 2xl:text-2xl  pt-[59px] pb-[22px] w-full h-[120px] items-center justify-center flex text-[#F6DBBB] text-xs">
      <Link to="/">
        <img
          className="mr-[27px] mb-[12px] cursor-pointer"
          src="/logo.svg"
          alt="Логотип"
        />
      </Link>
      <div className="flex flex-row gap-[20px] items-center relative whitespace-nowrap">
        <Link to="/about" className="cursor-pointer select-none">
          О нас
        </Link>
        <a href="#" className="cursor-pointer select-none">
          Каталог
        </a>
        <Link to="/conditions" className="cursor-pointer select-none">
          Условия сотрудничества
        </Link>
        <Link to="/payment" className="cursor-pointer select-none">
          Оплата
        </Link>

        <Link to="/delivery" className="cursor-pointer select-none">
          Доставка
        </Link>
        <Link to="/services" className="cursor-pointer select-none">
          Услуги
        </Link>
        <a href="#" className="cursor-pointer select-none">
          Отзывы
        </a>
        <a href="#" className="cursor-pointer select-none">
          Галерея
        </a>
        <a href="#" className="cursor-pointer select-none">
          Контакты
        </a>
        <div className="flex items-center text-center border border-solid py-[9px] pr-[22px] gap-[7px] pl-[10px] h-[35px] rounded-[15px]">
          <img
            height="22px"
            width="22px"
            src="/SVG/search.svg"
            alt="search"
          ></img>
          <input
            value={inputValue}
            type="text"
            className={`inputFix text-[15px] bg-[#1F1E1E] w-[166px] ${
              !activeInput && 'text-gray-400'
            }`}
            onClick={() => {
              setActiveInput(true)
            }}
            onBlur={() => {
              setActiveInput(false)
              if (inputValue.length == 0) setInputValue('Поиск по каталогу')
            }}
            onChange={(e) => {
              console.log(e)
              setInputValue(e.target.value)
            }}
            onKeyUp={(e) => {
              console.log(e)
            }}
          ></input>
        </div>
        <div className="flex gap-[14px] items-center justify-center ">
          <img src="/SVG/avatar.svg" alt="Кабинет" />
          <img src="/SVG/heart.svg" alt="Избранное" />
          <img src="/SVG/shopBag.svg" alt="Корзина" />
          <p className="absolute text-[#FCF5D8] -right-1 2xl:-top-3 top-0  2xl:text-xl text-[16px]">
            1
          </p>
        </div>
      </div>
    </nav>
  )
}
