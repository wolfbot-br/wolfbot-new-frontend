const loadLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const removeLocalStorageItem = key => {
  localStorage.removeItem(key);
};

export default { loadLocalStorage, removeLocalStorageItem };
