import { getPieces } from '@/network/pieces/pieces';

const pieces = {
  actions: {
    GetPieces () {
      return new Promise((resolve, reject) => {
        getPieces().then(res => resolve(res)).catch(err => reject(err));
      });
    }
  }
};
