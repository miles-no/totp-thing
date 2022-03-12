import { useState } from 'react'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from 'react-google-login'
import Code from './Code'

type ProfileProps = {
    clientId: string
}

type UserProfile = {
    googleId: string
    imageUrl: string
    email: string
    name: string
    givenName: string
    familyName: string
}

const Profile = ({ clientId }: ProfileProps) => {
    const [profile, setProfile] = useState<UserProfile | undefined>(undefined)
    //const [error, setError] = useState<any|undefined>(undefined)

    const successfulResponse = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        const profile = (response as GoogleLoginResponse).profileObj
        setProfile(profile)
        //setError(undefined)
    }

    const failedResponse = (response: any) => {
        setProfile(undefined)
        //setError(response)
        console.log(response)
    }

    const logout = () => {
        setProfile(undefined)
    }

    return profile === undefined
        ?
        <GoogleLogin
            clientId="487484697431-82alkmmibo5lia2hlj8viet04tgbubom.apps.googleusercontent.com"
            buttonText="Logg inn"
            isSignedIn={true}
            onSuccess={successfulResponse}
            onFailure={failedResponse}
        />
        :
        <div>
            <p><img src={profile.imageUrl} /></p>
            <p>Velkommen, {profile.name} </p>
            <GoogleLogout
                clientId="487484697431-82alkmmibo5lia2hlj8viet04tgbubom.apps.googleusercontent.com"
                buttonText="Logg ut"
                onLogoutSuccess={logout}
            />
            <Code/>
        </div>
}

export default Profile
