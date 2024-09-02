import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class PhotoStore {
  photos = [];
  isLoading = true;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPhotos() {
    this.isLoading = true;
    this.error = null;
    try {
      const response = await axios.get('http://localhost:8055/items/photos');
      this.photos = response.data.data;  
    } catch (err) {
      this.error = err.message;
    } finally {
      this.isLoading = false;
    }
  }
}

export default new PhotoStore();
