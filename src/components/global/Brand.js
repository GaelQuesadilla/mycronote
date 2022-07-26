//Components 
import { FaAtom as BrandIcon} from "react-icons/fa"

/**
 * @returns {Component} Brand component
 */
export const Brand = () => {
  return (
    <div className="brand">
      <span className="brand__icon"><BrandIcon/></span>
      <span className="brand__name">Mycronote</span>
    </div>
  );
};
