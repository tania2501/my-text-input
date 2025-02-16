
import { Input } from './assets/components/input'
import s from './app.module.scss'
import { Typography } from './assets/components/typography'
function App() {


  return (
    <>
      <div className={s.main}>
        <Typography as='h2'>Text input</Typography>
        <div className={s.inputsBlock}>
          <div className={s.input}>
            <Typography as='p' className={s.title}>Search input</Typography>
            <Input placeholder='Placeholder' label='Input search' type='search' />
          </div>
          <div className={s.input}>
            <Typography as='p' className={s.title}>Default input</Typography>
            <Input placeholder='Placeholder' label='Input' />
          </div>
          <div className={s.input}>
            <Typography as='p' className={s.title}>Warning input</Typography>
            <Input placeholder='Placeholder' label='Input'  warningMessage='Warning' />
          </div>
          <div className={s.input}>
            <Typography as='p' className={s.title}>Danger input</Typography>
            <Input placeholder='Placeholder' label='Input' errorMessage='Danger'
             />
          </div>
        </div>

      </div >
    </>
  )
}

export default App
