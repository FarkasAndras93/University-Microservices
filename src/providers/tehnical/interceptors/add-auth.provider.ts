import { ACCESS_TOKEN_KEYS, UserProvider } from './../../user/user.provider';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { AppConfig, APP_CONFIG_TOKEN } from "../../../app/app.config";
import { Events } from "ionic-angular";

/**
 * Interceptor to add the access token for cache backend.
 *
 * @export
 * @class AddAuthInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class AddAuthInterceptor implements HttpInterceptor {

  /**
   * The access token used for bearer header.
   * It's set during login.
   *
   * @private
   * @type {string}
   * @memberof AddAuthInterceptor
   */
  private _accessToken: string;

  constructor(private events: Events, @Inject(APP_CONFIG_TOKEN) private config: AppConfig, private userProvider: UserProvider) {

    this.subscribeToUpdatedTokensAvailableEvent();

    this.subscribeToLogoutEvent();
  }
  /**
   * Adds the Bearer to request header for if the the cache backend will be requested.
   *
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   * @memberof AddAuthInterceptor
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepting:", req);

    if (req.url.startsWith(this.config.basePath)) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._accessToken}`
        }
      });
      return next.handle(req);
    } else {
      return next.handle(req);
    }
  }


  /**
   * Subscribe to the LoggedInEvent.
   * If it is fired the accessToken will be adopted.
   * @private
   *
   * @memberOf AddAuthInterceptor
   */
  private subscribeToUpdatedTokensAvailableEvent() {

    this.events.subscribe(this.config.loginConfig.updatedTokensAvailableEventKey, (newTokens) => {
      this._accessToken = newTokens.accessToken;
    });

  }

  /**
   * Removes the access token if user logged out.
   *
   * @private
   *
   * @memberof AddAuthInterceptor
   */
  private subscribeToLogoutEvent(): void {

    this.events.subscribe(this.config.loginConfig.logoutEventKey, () => {
      this._accessToken = null;
    });

  }

}