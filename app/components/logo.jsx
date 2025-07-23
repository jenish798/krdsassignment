import Image from "next/image"

export default function Logo({src,alt}){
    return(
        <>
        <Image src={src} alt={alt} width={200} height={100} className="Logo"/>
        </>
    )
}