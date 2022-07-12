// Dependencies
import { useState, useEffect } from "react";
import { storageModel } from "../models/storage";
import { useNavigate } from "react-router-dom";


/**
 * Hook to get and set the content of a item content 
 * @param {string} storageName - Name of the item in local storage 
 * @param {string} itemId  - Id of the item to use
 * @returns {list<string, function, objects>} content state, set content state, item value
 */
export const UseItem = (storageName, itemId) => {
  const navigate = useNavigate()
  const appStorage = new storageModel(storageName);
  const item = appStorage.getItem(itemId);

  const [content, setContent] = useState(item?item.content:null);

  console.debug("Using item hook", {storageName, itemId, item})

  useEffect(() => {
    console.debug("Cheking if item exist")
    if(!appStorage.existItem(itemId)){
      console.warn("Item dont exist, returning to root item")
      navigate(`/${storageName}/root`)
      setContent(appStorage.getItem("root").content)
    }
  }, [,]);

  useEffect(() => {
    appStorage.updateItem(itemId, content);
  }, [content]);

  return [content, setContent, item];
};
