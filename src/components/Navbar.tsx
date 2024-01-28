import React, { useState } from 'react'

export const Navbar: React.FC = () => {
  const [inputValue, setInputValue] = useState('Поиск по каталогу')
  return (
    <nav className="bg-[#1F1E1E] px-24 pt-[59px] pb-[22px] w-full h-[120px] flex text-[#F6DBBB] text-xs">
      <img className="mr-[27px] mb-[12px]" src="/logo.svg" alt="Логотип" />
      <div className="flex flex-row gap-[20px] items-center relative whitespace-nowrap">
        <p>О нас</p>
        <p>Каталог</p>
        <p>Условия сотрудничества</p>
        <p>Оплата</p>
        <p>Доставка</p>
        <p>Услуги</p>
        <p>Отзывы</p>
        <p>Галерея</p>
        <p>Контакты</p>
        <div className="flex items-center text-center border border-solid py-[9px] pr-[22px] gap-[7px] pl-[10px] h-[35px] rounded-[15px]">
          <img src="/search.svg" alt="search"></img>
          <input
            value={inputValue}
            type="text"
            className="inputFix text-[15px] bg-[#1F1E1E] w-[166px]"
            onChange={(e) => {
              console.log(e)
              setInputValue(e.target.value)
            }}
          ></input>
        </div>
        <div className="flex gap-[14px] items-center justify-center ">
          <img src="/avatar.svg" alt="Кабинет" />
          <img src="/heart.svg" alt="Избранное" />
          <img src="/shopBag.svg" alt="Корзина" />
          <p className="absolute text-[#FCF5D8] -right-2 top-0 text-[16px]">
            1
          </p>
        </div>
      </div>
    </nav>
  )
}
