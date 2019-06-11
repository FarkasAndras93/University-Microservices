import { UserProvider, ACCESS_TOKEN_KEYS } from './../user/user.provider';
import { User } from './../../model/backend/user/user';
import { MessageModel } from './../../model/backend/message/message';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageProvider } from '../tehnical/storage/storage.provider';
// import { GroceryList } from '../../model/backend/grocery-list/message';
import { AppConfig, APP_CONFIG_TOKEN } from '../../app/app.config';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class MessageProvider {

  constructor(public http: HttpClient, private storage: StorageProvider, @Inject(APP_CONFIG_TOKEN) private config: AppConfig,
  private userProvider: UserProvider) {
  }

  /**
   * Method to return messages for logged user.
   * @returns {Promise<MyProduct[]>}
   * @memberof ProductProvider
   */
  async getMessagesForUser(): Promise<any> {
    // let messages: MessageModel[] = [];
    // messages.push(new MessageModel("Name1", "Phone1", "Subject1", "Message1 Message1 Message1Message1Message1Message1 Message1Message1Message1Message1", "Email1", "1"));
    // messages.push(new MessageModel("Name2", "Phone2", "Subject2", "Message2", "Email2", "1"));
    // messages.push(new MessageModel("Name3", "Phone3", "Subject3", "Message3", "Email3", "1"));
    // messages.push(new MessageModel("Name4", "Phone4", "Subject4", "Message4", "Email4", "1"));
    // messages.push(new MessageModel("Name5", "Phone5", "Subject5", "Message5", "Email5", "1"));
    // return Promise.resolve(messages);

    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.get(this.config.basePath + "/messages/get/", { headers: headers }).subscribe((messages: MessageModel[]) => {
        return resolve(messages);
      }, error => {
        console.error("Error while getting my messages", error);
        return reject(error);
      });
    });
  }

  /**
   * Method to creamte message for user.
   *
   * @param {number} userId
   * @param {MyProduct} product
   * @memberof ProductProvider
   */
  createMessage(message: MessageModel): Promise<MessageModel> {
    // message.id = "1";
    // return Promise.resolve(message);

    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.config.basePath + "/message/add", message).subscribe((message: MessageModel) => {
        return resolve(message);
      }, error => {
        console.error("Error while creating my product", error);
        return reject(error);
      });
    });
  }

}
