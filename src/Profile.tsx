import { useState } from 'react'
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from 'react-google-login'

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

const Profile : React.FC<ProfileProps> = props => {
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
            clientId={props.clientId}
            buttonText="Logg inn"
            isSignedIn={true}
            onSuccess={successfulResponse}
            onFailure={failedResponse}
        />
        :
        <div>
            <p><img src={profile.imageUrl} alt="Profile" /></p>
            <p>Velkommen, {profile.name} </p>
            <GoogleLogout
                clientId={props.clientId}
                buttonText="Logg ut"
                onLogoutSuccess={logout}
            />
            {props.children}
        </div>
}

export default Profile
