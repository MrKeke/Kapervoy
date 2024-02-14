import React, { useEffect, useState } from 'react'

export const Navbar: React.FC = () => {
  const [inputValue, setInputValue] = useState('Поиск по каталогу')
  const [activeInput, setActiveInput] = useState(false)
  useEffect(() => {
    if (activeInput) {
      setInputValue('')
    }
  }, [activeInput])
  return (
    <nav className="bg-[#1F1E1E] px-24 pt-[59px] pb-[22px] w-full h-[120px] flex text-[#F6DBBB] text-xs">
      <img
        className="mr-[27px] mb-[12px] cursor-pointer"
        src="/logo.svg"
        alt="Логотип"
      />
      <div className="flex flex-row gap-[20px] items-center relative whitespace-nowrap">
        <a href="#" className="cursor-pointer select-none">
          О нас
        </a>
        <a href="#" className="cursor-pointer select-none">
          Каталог
        </a>
        <a href="#" className="cursor-pointer select-none">
          Условия сотрудничества
        </a>
        <a href="#" className="cursor-pointer select-none">
          Оплата
        </a>
        <a href="#" className="cursor-pointer select-none">
          Доставка
        </a>
        <a href="#" className="cursor-pointer select-none">
          Услуги
        </a>
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
          <p className="absolute text-[#FCF5D8] -right-2 top-0 text-[16px]">
            1
          </p>
        </div>
      </div>
    </nav>
  )
}
