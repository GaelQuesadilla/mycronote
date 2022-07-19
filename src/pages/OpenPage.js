// Dependencies
import { useNavigate, useParams } from "react-router-dom";
import { storageModel } from "../models/storage";
import { useEffect } from "react";

/**
 * Component to create/get and redirect to the new item Id that will be generated
 * @returns {Component} Redirect page
 */
export const OpenPage = () => {
  const navigate = useNavigate();
  const { storageName, itemId, scoop, itemName } = useParams();

  useEffect(() => {
    let newItemId;
    if (scoop === "g") {
      newItemId = `global ${itemName}`;
    } else if (scoop === "p") {
      newItemId = `private ${itemId}-${itemName}`;
    } else {
      newItemId = `unknown ${itemName}`;
    }
    // Create and redirect to the new item
    const appStorage = new storageModel(storageName);
    appStorage.createitem(newItemId, itemId);
    navigate(`/${storageName}/${newItemId}`);
  }, [,]);

  return <>REDIRECTING...</>;
};
