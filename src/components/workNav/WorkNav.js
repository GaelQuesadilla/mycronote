// Dependencies
import { useParams } from "react-router-dom";
import { storageModel } from "../../models/storage";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const WorkNav = (props) => {
  const { itemId, storageName } = { itemId: "root", storageName: "default" };
  const appStorage = new storageModel(storageName);
  const item = appStorage.getItem(itemId);
  const parent = item.parent;
  return (
    <div>
      <div>Mycronote</div>
      <a href={`/${storageName}/${parent}`}>to: {parent}</a>
    </div>
  );
};
