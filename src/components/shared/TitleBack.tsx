import { Link } from 'react-router-dom'

interface ITitleBack {
  title: string
  backURL?: string
}

export const TitleBack: React.FC<ITitleBack> = ({ title, backURL = '/' }) => {
  return (
    <div className="flex items-end gap-[8px] pt-[100px] pb-[60px]">
      <Link to={backURL}>
        <img className="w-[50px] h-[50px]" src="/SVG/btn.svg" alt="backBtn" />
      </Link>
      <p className="text-[40px] ">{title}</p>
    </div>
  )
}
