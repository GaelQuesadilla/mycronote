export class storageModel {
  constructor(storageId = "default") {
    this.setStorageId(storageId);
  }

  setStorageId(newStorageId) {
    // Checks if the new storage id is valid and verify if it exist on localstorage; if not it creates a new item
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

  #createStorage() {
    const storageTemplate = [this.#getTemplateItem("root", "root")];
    this.#saveData(storageTemplate);
  }

  #storageExist() {
    let storage = this.#getStorage();
    console.debug("Exist storage", !!storage);
    return !!storage;
  }

  #getItemIndex(itemName) {
    const data = this.getData();
    const index = data.findIndex((element) => element.name === itemName);
    return index;
  }

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

  #getStorage() {
    const storage = window.localStorage.getItem(this.storageId);
    return storage;
  }

  #saveData(data) {
    console.debug("New data", data)
    window.localStorage.setItem(this.storageId, JSON.stringify(data));
  }
  getData() {
    return JSON.parse(this.#getStorage());
  }

  createitem(name, parent) {
    const newItem = this.#getTemplateItem(name, parent);
    let data = this.getData();
    data.push(newItem);
    this.#saveData(data);
  }

  getItem(itemName) {
    const data = this.getData();
    const item = data.filter((element) => element.name === itemName);
    return item[0];
  }

  updateItem(name, newValue) {
    const item = this.getItem(name);
    const index = this.#getItemIndex(name);
    const data = this.getData();
    
    item.content = newValue;
    item.updatedAt = new Date().getTime();
    
    console.debug(item)
    data[index] = item;

    console.debug("item", item)
    console.debug("data", data)
    console.debug("")
    this.#saveData(data);
  }
}
