import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    handleError(error: any): Promise<any> {
        console.error('[Error] Por favor, verifique su conexión de Internet y vuelva a intentarlo.', error);
        return Promise.reject(error.message || error);
    }
}
