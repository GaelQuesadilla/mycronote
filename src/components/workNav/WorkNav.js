// Dependencies
import { useParams } from "react-router-dom";
import { storageModel } from "../../models/storage";
import { Brand } from "../global/Brand";

//Styles
import "./WorkNav.scss"

/**
 * Basic navigation var to redirect to the parent item
 * @returns {Component} WorkNav component
 */
export const WorkNav = () => {
  const { itemId, storageName } = useParams();
  const appStorage = new storageModel(storageName);
  const item = appStorage.getItem(itemId);
  const parent = item?item.parent:null;
  return (
    <div className="nav">

      <div className="nav__element nav__element-brand">
        <Brand/>
      </div>
      <div className="nav__element nav__element-link">
        <a className="link link--nav" href={`/${storageName}/${parent}`}>parent: {parent}</a>
      </div>
    </div>
  );
};
