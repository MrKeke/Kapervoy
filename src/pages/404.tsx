import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export const NotFound: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {
      window.scrollTo(0, 0)
    }
  }, [])
  return (
    <div className="page404">
      <span className="span404" title="404">
        404
      </span>
      <Link
        onClick={() => {
          window.scrollTo(0, 0)
        }}
        to="/"
        className="text-[48px] tracking-tight "
      >
        Вернуться домой
      </Link>
    </div>
  )
}
