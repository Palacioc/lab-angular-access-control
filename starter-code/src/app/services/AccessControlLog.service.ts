import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class Log {

    logMessages: Array<object> = [];

    getRegisters(){
      return this.logMessages;
    }

    addRegister(person : string, message : string){
      let newEntry = {
        person: person,
        message: message,
        createdAt: new Date()
      }
      this.logMessages.push(newEntry);
    }

}
