import Image from "next/image"

const Loading = () => {
  return (
    <div>
        
        <Image 
        src={'/images/gifLoad.gif'}
        width={350}
        height={400}
        alt='Majin-Load'
        priority
        />
    </div>
  )
}

export default Loading