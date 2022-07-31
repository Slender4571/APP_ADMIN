import { IOClients } from '@vtex/api';
import { ComboAPI } from './combo'

export class Clients extends IOClients { 
    public get comboAPI () {
      return this.getOrSet('comboAPI',ComboAPI)
    }
}
