interface ITitle {
  text: string
  classes?: string
}

export const Title: React.FC<ITitle> = ({ text, classes }) => (
  <p className={classes ? classes : 'text-[40px] my-[60px] text-black'}>
    {text}
  </p>
)
