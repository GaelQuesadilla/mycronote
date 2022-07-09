// Dependencies
import { useState, useEffect } from "react";
import { storageModel } from "../models/storage";

export const Item = (storageName, itemId) => {
  const appStorage = new storageModel(storageName);
  const item = appStorage.getItem(itemId);

  const [content, setContent] = useState(item.content);

  useEffect(() => {
    appStorage.updateItem(itemId, content);
  }, [content]);

  return [content, setContent, item];
};
