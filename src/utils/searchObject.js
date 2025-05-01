function searchObject(object, searchText) {
  if (!searchText.trim()) {
    return true;
  } else {
    const fullObjectString = JSON.stringify(object).toLowerCase();
    return fullObjectString.includes(searchText.toLowerCase());
  }
}

export { searchObject };
