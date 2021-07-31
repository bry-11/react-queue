import { createContext } from 'react'

const GeneralContext = createContext({
    notification: { type: '', message: '' },
})

export default GeneralContext
