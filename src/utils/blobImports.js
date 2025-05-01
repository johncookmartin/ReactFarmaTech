const BLOB_PRODUCT_PHOTOS =
  'https://farmatechdata.blob.core.windows.net/products/photos';
const BLOB_SDS = 'https://farmatechdata.blob.core.windows.net/products/sds/';
const BLOB_FLY_PHOTOS =
  'https://farmatechdata.blob.core.windows.net/flies/flies/';

function getImageUrl(name) {
  return name == null ? null : BLOB_PRODUCT_PHOTOS + name;
}

function getSdsUrl(name) {
  return name == null ? null : BLOB_SDS + name;
}

function getFlyUrl(name) {
  return name == null ? null : BLOB_FLY_PHOTOS + name;
}

export { getImageUrl, getSdsUrl, getFlyUrl };
