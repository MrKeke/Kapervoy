import { uniqueId } from 'lodash'

export interface IFeedbackTicket {
  description: string
  avatar?: string
  rate: number
  name: string
  date: string
}

export const FeedbackTicket: React.FC<IFeedbackTicket> = ({
  description,
  avatar,
  rate,
  name,
  date,
}) => {
  return (
    <div
      style={{ boxShadow: '0px 10px 15px 0px rgba(81, 74, 126, 0.30)' }}
      className="w-[562px] h-[250px] bg-[#FFFDF5] py-[50px] px-[30px] flex items-center justify-center gap-[60px]"
    >
      <div>
        {avatar && (
          <img
            className="max-w-[120px] max-h-[120px] rounded"
            src={avatar}
            alt={avatar}
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-[30px] justify-between text-[12px]">
          <div className="flex gap-1 h-[20px]">
            {Array(rate)
              .fill(0)
              .map(() => (
                <img key={uniqueId(name)} src="/SVG/star.svg" alt="rateStar" />
              ))}
            {Array(5 - rate)
              .fill(0)
              .map(() => (
                <img
                  key={uniqueId(description)}
                  src="/SVG/emptyStar.svg"
                  alt="rateStar"
                />
              ))}
          </div>
          <p className="text-[#7D7D7D] ">{description}</p>
          <div className="flex justify-between">
            <p>{name}</p>
            <p className="text-[#514A7E]">{date}</p>
          </div>
        </div>

        <></>
      </div>
    </div>
  )
}
