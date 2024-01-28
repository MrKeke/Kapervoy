export const Footer: React.FC = () => {
  return (
    <div className="bg-[#1F1E1E] flex items-center justify-between text-[#F6DBBB] h-[188px] px-[108px]">
      <div className="flex flex-col ">
        <p>© 2011–2024г Универ Клаб</p>
        <p>
          Москва, Озерковский переулок, 22/24с1
          <br />
          (м. Новокузнецкая).
        </p>
        <div className="flex gap-[18px] mt-5">
          <img src="/FooterIcons/VKIcon.svg" alt="Vk" />
          <img src="/FooterIcons/TelegramIcon.svg" alt="Telegram" />
          <img src="/FooterIcons/WhatsAppIcon.svg" alt="WhatsApp" />
          <img src="/FooterIcons/InstagramIcon.svg" alt="Instagram" />
          <img src="/FooterIcons/FaceBookIcon.svg" alt="Facebook" />
        </div>
      </div>
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="flex flex-col ">
        <p>example@gmail.com</p>
        <p>+7 (920) 123-45-67</p>
      </div>
    </div>
  )
}
