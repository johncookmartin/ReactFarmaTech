const BLOB_PHOTOS =
  'https://farmatechdata.blob.core.windows.net/products/photos';

function getImageUrl(name) {
  return BLOB_PHOTOS + name;
}

export { getImageUrl };
