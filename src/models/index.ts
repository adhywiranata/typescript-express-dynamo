const AWS = require('aws-sdk');

require('dotenv').config();

const ENDPOINT = 'https://dynamodb.ap-southeast-1.amazonaws.com';

if (process.env.NODE_ENV === 'production') {
  AWS.config.update({
    region: process.env.REGION || 'ap-southeast-1',
    endpoint: ENDPOINT || '',
  });
} else {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    region: process.env.REGION || 'ap-southeast-1',
    endpoint: ENDPOINT || '',
  });
}

const documentClient = new AWS.DynamoDB.DocumentClient();

const model = (tableName) => ({
  findAll: () => new Promise((resolve, reject) => {
    documentClient.scan({
      TableName: tableName,
    }, (err, data) => {
      if (err) reject(err.message);
      else resolve(data.Items);
    });
  }),
  findByKey: key => new Promise((resolve, reject) => {
    documentClient.get({
      TableName: tableName,
      Key: key,
    }, (err, data) => {
      if (err) reject(err.message);
      else resolve(data.Item);
    });
  }),
  put: item => new Promise((resolve, reject) => {
    documentClient.put({
      TableName: tableName,
      Item: item,
    }, (err, data) => {
      if (err) reject(err.message);
      else resolve(data.Item);
    });
  }),
  patch: (key, item) => new Promise((resolve, reject) => {
    documentClient.update({
      TableName: tableName,
      Key: key,
      Item: item,
    }, (err, data) => {
      if (err) reject(err.message);
      else resolve(data.Item);
    });
  }),
  delete: key => new Promise((resolve, reject) => {
    documentClient.delete({
      TableName: tableName,
      Key: key,
    }, (err, data) => {
      if (err) reject(err.message);
      else resolve(data.Item);
    });
  }),
});

export { model };