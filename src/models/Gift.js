export class Gift {
  constructor(data) {
    this.id = data._id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.creatorId = data.creatorId
  }
}

const gift = {
  "_id": "65382924fa45ebb7d9a85120",
  "tag": "postman post",
  "url": "",
  "opened": false,
  "creatorId": "652575a13cff8feb64c0f680",
  "createdAt": "2023-10-24T20:29:24.191Z",
  "updatedAt": "2023-10-24T20:29:24.191Z",
  "__v": 0,
  "id": "65382924fa45ebb7d9a85120"
}