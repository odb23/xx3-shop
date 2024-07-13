import { auth, googleAuthProvider } from '@/configs/firebase'
import type { IUser } from '@/interfaces/IUser'
import { User } from '@/models/User'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut
} from 'firebase/auth'

export async function signInWithUserEmailAndPassword(
  _email: string,
  _password: string
): Promise<IUser | Error | null> {
  try {
    const userCred = await signInWithEmailAndPassword(auth, _email.trim(), _password.trim())
    if (!userCred) return null

    const { email, uid, photoURL, displayName } = userCred.user
    return new User(uid, photoURL, displayName, email)
  } catch (error: any) {
    return new Error(error.message)
  }
}

export async function signInWithUserGoogleAccount() {
  try {
    const authResult = await signInWithPopup(auth, googleAuthProvider)
    // {
    //   persistence: browserSessionPersistence,
    //   popupRedirectResolver: browserPopupRedirectResolver,
    // }
    if (!authResult) return null

    const { email, uid, photoURL, displayName } = authResult.user
    return new User(uid, photoURL, displayName, email)
  } catch (error: any) {
    console.log({ error })
    return new Error(error.message)
  }
}

export async function createUseAccountWithEmailAndPassword(
  _email: string,
  _password: string,
  _displayName: string
) {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, _email.trim(), _password)
    if (!userCred) return null

    const { email, uid, photoURL, displayName } = userCred.user
    if (!displayName) {
      try {
        await updateProfile(userCred.user, {
          displayName: _displayName.trim()
        })
        return new User(uid, photoURL, _displayName.trim(), email)
      } catch (error: any) {
        // Do nothing for now
      }
    }
    return new User(uid, photoURL, displayName, email)
  } catch (error: any) {
    return new Error(error.message)
  }
}

export async function signOutUserAccount() {
  return signOut(auth)
}
