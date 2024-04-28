const HighLightButton = ({text, textColor, borderColor}) => {
  return (
    <button
     className={
        `  text-[${textColor}] border border-[${borderColor}] Uppercase
        px-6 py-[1px] rounded-[100px]
        `
     }
    >{
        text
    }</button>
  )
}

export default HighLightButton