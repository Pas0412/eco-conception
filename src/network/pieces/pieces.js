import {request} from '../request';

export function getPieces () {
  return new Promise((resolve, reject) => {
    request({
      url: 'queryAllPieceByType?type=text',
      method: 'get',
      params: {
      }
    }).then(data => resolve(data)).catch(err => reject(err));
  });
}
