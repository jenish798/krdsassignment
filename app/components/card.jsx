import Image from "next/image"

export default function Card({feature,bgColor}){

  const logoSizeMap = {
    'logo-f-secure.png': { width: 45, height: 30 },
    'logo-digitainment.png': { width: 55, height: 40 },
    'logo-adaptxt.png': { width: 80, height: 35 },
    'logo-hungama.png': { width: 90, height: 35 },
    'logo-adaptxt.png': { width: 130, height: 40 },
    'logo-read-where.png': { width: 60, height: 45 },
  };

  const fileName = feature.logo.split('/').pop();
  const logoSize = logoSizeMap[fileName] || { width: 100, height: 40 };

    return(
        <div
      className="card"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="card-content">
                <Image
          src={feature.logo}
          alt="Feature logo"
          width={logoSize.width}
          height={logoSize.height}
          className="card-logo"
        />
        <h2 className="card-title">{feature.title}</h2>
        <p className="card-desc">{feature.desc}</p>
      </div>
      <Image
        src={feature.image}
        alt="Feature image"
        width={200}
        height={340}
        className="card-image"
      />
    </div>
    )
}