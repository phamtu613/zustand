import { themeStore } from 'src/zustand/themeStore'
import Dark from '../assets/images/dark.png'
import Light from '../assets/images/light.png'

export default function Theme() {
  const {
    themeState: { dark },
    toggleDarkMode
  } = themeStore()
  return (
    <div style={{ cursor: 'pointer', padding: '15px' }}>
      {dark ? (
        <button type='button' className='border-0 outline-none' onClick={() => toggleDarkMode(false)}>
          <img src={Dark} alt='Dark' width={50} />
        </button>
      ) : (
        <button type='button' className='border-0 outline-none' onClick={() => toggleDarkMode(true)}>
          <img src={Light} alt='Light' width={50} />
        </button>
      )}
    </div>
  )
}
