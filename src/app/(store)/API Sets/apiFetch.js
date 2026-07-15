const { default: axios } = require("axios")

const poufUpSpace =  () => {
   return axios.get("https://livingshapes.in/collections/poufs/products.json")
   .then((res) => {
    return res.data.products.slice(0, 10)

})
}

export {poufUpSpace}


