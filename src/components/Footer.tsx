export const Footer: React.FC = () => {
  return (
    <div className="bg-[#1F1E1E] 2xl:text-xl relative h-44 flex items-center justify-center text-[#F6DBBB] py-4 px-[108px]">
      <div className="flex flex-col absolute left-16">
        <p>© 2011–2024г Универ Клаб</p>
        <p
          className="cursor-pointer"
          onClick={({ target }) => {
            const p = target as HTMLElement
            if (p.textContent) {
              navigator.clipboard.writeText(p.textContent).catch((e) => {
                console.log(e)
              })
            }
          }}
        >
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
      <div className="flex flex-col absolute right-16">
        <p>example@gmail.com</p>
        <p>+7 (920) 123-45-67</p>
      </div>
    </div>
  )
}
