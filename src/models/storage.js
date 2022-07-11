/**
 * Class to create a new local storage model
 */
export class storageModel {
  /**
   * @param {string} storageId  - The name of the local storage item
   */
  constructor(storageId = "default") {
    this.setStorageId(storageId);
  }

  /**
   * Checks if the new storage id is valid and verify if it exist on local storage; if not it creates a new item
   * @param {string} newStorageId - The id of the new local storage item
   */

  setStorageId(newStorageId) {
    if (!newStorageId || newStorageId.length === 0) {
      console.error("Cancel");
      return null;
    }
    if (newStorageId === "default") {
      console.warn("Using default storage");
    }

    this.storageId = `mycronote-${newStorageId}`;
    if (!this.#storageExist()) {
      console.warn("Storage dont exist, creating a new one");
      this.#createStorage();
    }
  }

  /**
   * Saves a new local storage item with a template item as content
   */
  #createStorage() {
    const storageTemplate = [this.#getTemplateItem("root", "root")];
    this.#saveData(storageTemplate);
  }

  /**
   * Checks if the item exist
   * @returns {boolean} - Exist the item in local storage
   */
  #storageExist() {
    let storage = this.#getStorage();
    console.debug("Exist storage", !!storage);
    return !!storage;
  }

  /**
   * Search an item index
   * @param {string} itemName - The item name to find
   * @returns {int} Item index
   */
  #getItemIndex(itemName) {
    const data = this.getData();
    const index = data.findIndex((element) => element.name === itemName);
    return index;
  }

  /**
   * Creates a new item as templatwe
   * @param {string} name - Name of the new template item
   * @param {string} parent - Parent of the new template item
   * @returns {object} Template item modified to be added as a new item
   */
  #getTemplateItem(name, parent) {
    const templateItem = {
      name,
      content: "",
      parent,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };

    return templateItem;
  }

  /**
   * Get the item from the local storage
   * @returns {JSON} The content of the item in local storage
   */
  #getStorage() {
    const storage = window.localStorage.getItem(this.storageId);
    return storage;
  }

  /**
   * Stringify an object and set it in the item on local storage
   * @param {object} data - The new data of the item
   */
  #saveData(data) {
    console.debug("New data", data);
    window.localStorage.setItem(this.storageId, JSON.stringify(data));
  }

  /**
   * Get the value from local storage and parse it
   * @returns {object} Data of the local storage item
   */
  getData() {
    return JSON.parse(this.#getStorage());
  }
  /**
   *  Create and save a template item
   * @param {ItemName} name - Name of the item to create
   * @param {string} parent - Parent of the item to create
   */

  createitem(itemName, parent) {
    const newItem = this.#getTemplateItem(itemName, parent);
    let data = this.getData();
    data.push(newItem);
    this.#saveData(data);
  }

  /**
   * Filter a data from the local storage to find a specified item
   * @param {string} itemName - Name of the item to find
   * @returns {object} The item object
   */

  getItem(itemName) {
    const data = this.getData();
    const item = data.filter((element) => element.name === itemName);
    return item[0];
  }

  /**
   * Changes and save an item in local storage
   * @param {string} itemName - Name of the item to update 
   * @param {string} newValue - New value of the content of the item 
   */

  updateItem(itemName, newValue) {
    const item = this.getItem(itemName);
    const index = this.#getItemIndex(itemName);
    const data = this.getData();

    item.content = newValue;
    item.updatedAt = new Date().getTime();

    console.debug(item);
    data[index] = item;

    console.debug("item", item);
    console.debug("data", data);
    console.debug("");
    this.#saveData(data);
  }
}
