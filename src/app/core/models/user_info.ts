export class UserInfo {
  accessToken: string;
  userId: string;

  constructor(accessToken: string, userId: string) {
    this.accessToken = accessToken;
    this.userId = userId;
  }
}