import axios from 'axios';

const baseUrl = 'http://localhost:5000'

export async function getProducts (){
  try {
    const response = await axios({
      url: `${baseUrl}/productos`,
      method: 'GET',
    })
    
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function saveProduct (productData){
  try {
    console.log(productData);
    const formData = new FormData();

    formData.append('nombre', productData.nombre);
    formData.append('categoria', productData.categoria);
    formData.append('precio', productData.precio);
    formData.append('ingredientes', productData.ingredientes);

    const response = await axios({
      url: `${baseUrl}/productos`,
      method: 'POST',
      data: formData,
    })
    
    return response
  } catch (error) {
    console.log(error)
  }
}