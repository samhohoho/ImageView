import React, {useEffect, useState} from 'react'
import Image from './Image'
import styles from './MoreRandomImages.module.css'

const MoreRandomImages = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchReq = async () => {
    try {
      setIsLoading(true)

      const response = await fetch(
        'https://api.unsplash.com/photos/random?client_id=N9a24y9OSM_GZ38koCo4bZs8JXcW9yEabZe7BbJUKcQ&count=3&query=stars&w=1600'
      )

      if (!response.ok) throw new Error('Request failed!')

      const data = await response.json()

      const imagesData = data.map((obj: any) => ({
        imageUrl: obj.urls.full,
        id: obj.id,
        modalTitle: obj.alt_description,
        unsplashUrl: obj.links.html,
        downloadUrl: obj.links.download,
      }))

      setImages(imagesData)
      // console.log(imagesData)
      console.log(data)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchReq()
  }, [])

  // console.log(images)

  return (
    <section className={styles.lower_section_images}>
      <div className={styles.images_header}>
        <a href="#">
          <h3>Stars</h3>
        </a>
      </div>
      <div className={styles.images_container}>
        {images.length > 0 &&
          images.map((obj: any) => (
            <Image
              key={obj.id}
              imageUrl={obj.imageUrl}
              modalTitle={obj.modalTitle}
              unsplashUrl={obj.unsplashUrl}
              downloadUrl={obj.downloadUrl}
            />
          ))}
        {/* <Image />
        <Image />
        <Image /> */}
      </div>
    </section>
  )
}

export default MoreRandomImages
