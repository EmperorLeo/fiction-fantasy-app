import { Injectable, Inject } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { ENVIRONMENT } from './injection-tokens';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInfo } from './models/user_info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _userManager: UserManager;

  constructor(@Inject(ENVIRONMENT) private environment: any) {
    var settings = {
      authority: this.environment.authorityUrl,
      client_id: this.environment.clientId,
      redirect_uri: `${this.environment.baseUrl}/assets/signin-callback.html`,
      silent_redirect_uri: `${this.environment.baseUrl}/assets/silent-callback.html`,
      post_logout_redirect_uri: `${this.environment.baseUrl}`,
      response_type: 'id_token token',
      scope: this.environment.requestedScope
    };
    this._userManager = new UserManager(settings);
  }

  public getUser(): Observable<User> {
    return from(this._userManager.getUser());
  }

  public getUserCredentials(): Observable<UserInfo> {
    return this.getUser().pipe(
      map(u => new UserInfo(u.access_token, u.profile.sub))
    )
  }

  public login() {
    this._userManager.signinRedirect();
  }

  public renewToken(): Observable<User> {
    return from(this._userManager.signinSilent());
  }

  public logout() {
    this._userManager.signoutRedirect();
  }

}
