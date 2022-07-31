import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export class ComboAPI extends ExternalClient {

    constructor(context: IOContext, options?: InstanceOptions) {
        super('http://ec2-18-231-164-74.sa-east-1.compute.amazonaws.com:3000/combos', context, {
            ...options,
            retries: 2,
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
    
    // Get dos Combos

    public getCombo = async () => {
        const response = await this.http.get("", {
          metric: 'combo-get'
        })
        return response.Items
      }
}       