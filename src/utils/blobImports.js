const BLOB_PHOTOS =
  'https://farmatechdata.blob.core.windows.net/products/photos';
const BLOB_SDS = 'https://farmatechdata.blob.core.windows.net/products/sds/';

function getImageUrl(name) {
  return BLOB_PHOTOS + name;
}

function getSdsUrl(name) {
  return BLOB_SDS + name;
}

export { getImageUrl, getSdsUrl };
