import { useEffect, useState } from "react"
import getToken from "totp-generator"

type CodeProps = {
    privateKey: string
}

const Code: React.FC<CodeProps> = props => {
    const [token, setToken] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setToken(getToken(props.privateKey))
        }, 10000)
        return () => clearInterval(interval)
    }, [props.privateKey])

    return <p className="Code">{token}</p>
}

export default Code
