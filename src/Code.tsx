import { useEffect, useState } from "react"
import getToken from "totp-generator"

const Code = () => {
    const [token, setToken] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setToken(getToken("JBSWY3DPEHPK3PXP"))
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    return <p className="Code">{token}</p>
}

export default Code
