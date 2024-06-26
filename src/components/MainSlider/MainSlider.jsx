import CenterMode from './CenterMode'
import styles from './MainSlider.module.css'

function MainSlider() {
  return (
    <div className={styles.slider__container}>
      <div className={styles.slider__title}>
        <p className={styles.title}>TOP LUXURY CAR</p>
        <p className={styles.title}>RENTAL DUBAI</p>
        <div className={styles.sub__title_block}>
          <p className={styles.sub__title}>
            Best sports car & supercar rental Dubai, Exclusive offers on luxury
            car rental Dubai Cheap price
          </p>
        </div>
        <p className={styles.link__text}>RENT A CAR DUBAI CATALOG</p>
      </div>
      <CenterMode />
    </div>
  )
}

export default MainSlider
