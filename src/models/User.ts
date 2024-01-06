import type { IUser } from '@/interfaces/IUser'

export class User implements IUser {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null

  constructor(
    uid: string,
    photoURL: string | null,
    displayName: string | null,
    email: string | null
  ) {
    this.uid = uid
    this.displayName = displayName
    this.email = email
    this.photoURL = photoURL
  }
}
