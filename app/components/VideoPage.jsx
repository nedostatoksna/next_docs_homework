import { list } from '@vercel/blob'
import { Suspense } from 'react'

export default function VideoPage() {
    return (
        // suspens позволяет показывать fallback, пока видео не загрузится
      <Suspense fallback={<p>Loading video...</p>}> 
        <VideoComponent fileName="houseShort-TNj7PxBZxQKIxGpc6n86UUmOEkAYtC.mp4" />
      </Suspense>
    )
  }
// <video> для самостоятельно хостящихся файлов
//   - включать fallback
//  - субтитры
//  - обеспечить навигацию с помощью клавиатуры и совместимость с программами чтения экрана

// <iframe> для видео с внешних платформ

async function VideoComponent ({ fileName }) {

    let token = "************";

    const { items } = await list({
        prefix: fileName,
        limit: 1,
        token
      })
      const { url } = items[0]

    return (
        <div style={{ padding: '40px'}}>
            <video controls preload="none" aria-label="Video player">
                <source src={url} type="video/mp4" />
                <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    )
  }