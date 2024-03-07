import Image from 'next/image'
import painting from "@/public/painting.jpg";
 
const ResponsiveImage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    {/* Локальная картинка */}
        <div style={{ width: '29vw', height: '40vh', position: 'relative', display: 'block'}}>
            <Image
                alt="painting"
                src={painting}
                // You should add the priority property to the image that will be the Largest Contentful Paint (LCP) element
                priority 
                fill // картинка будет заполнять родительский элемент
                sizes="(min-width: 400px) 40vw, 100vw"
                // для стилизации советуют использовать className или атрибут style 
                style={{
                    padding: '40px 15px 0px 40px'
                }}
            />
        </div>
        <div>
          {/* Для картинки я другого ресурса нужно указывать высоту и ширину, потому что удаленные ресурсы недоступны во время билда
        + нужно добавить remotePatterns в config */}
        <Image
            src="https://jealousgallery.com/cdn/shop/products/StanleyDonwood-WatchingLR_720x.jpg?v=1647366946"
            alt="another painting of the author"
            width={500}
            height={500}
            style={{
                padding: '40px'
            }}
        />

        </div>
      
    </div>
  )
}
export default ResponsiveImage;

