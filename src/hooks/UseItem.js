// Dependencies
import { useState, useEffect } from "react";
import { storageModel } from "../models/storage";


/**
 * Hook to get and set the content of a item content 
 * @param {string} storageName - Name of the item in local storage 
 * @param {string} itemId  - Id of the item to use
 * @returns {list<string, function, objects>} content state, set content state, item value
 */
export const UseItem = (storageName, itemId) => {
  const appStorage = new storageModel(storageName);
  const item = appStorage.getItem(itemId);

  const [content, setContent] = useState(item.content);

  useEffect(() => {
    appStorage.updateItem(itemId, content);
  }, [content]);

  return [content, setContent, item];
};
