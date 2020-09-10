$(function () {
  let fruit = []
  let arrFruits = [
    {
      id: 1,
      name: "Apple",
      img: "./image/apple.png",
      country: "Ukraine",
      weight: 20,
      price: 1,
    },
    {
      id: 2,
      name: "Orange",
      img: "./image/orange.png",
      country: "Azerbaijan",
      weight: 20,
      price: 2,
    },
    {
      id: 3,
      name: "Pineapple",
      img: "./image/pineapple.png",
      country: "India",
      weight: 19,
      price: 1.3,
    },
    {
      id: 4,
      name: "Pear",
      img: "./image/pear.png",
      country: "Ukraine",
      weight: 29,
      price: 1.5,
    },
    {
      id: 5,
      name: "Banana",
      img: "./image/banana.png",
      country: "India",
      weight: 23,
      price: 1.8,
    },
    {
      id: 6,
      name: "Cherry",
      img: "./image/cherry.png",
      country: "Ukraine",
      weight: 14,
      price: 2.3,
    },
    {
      id: 7,
      name: "Pomegranate",
      img: "./image/pomegranate.png",
      country: "Azerbaijan",
      weight: 34,
      price: 2,
    },
    {
      id: 8,
      name: "Mango",
      img: "./image/mango.png",
      country: "India",
      weight: 34,
      price: 6.5,
    },
  ]
  // local storage
  let fruitsJSON = JSON.stringify(arrFruits)
  localStorage.setItem("fruits", fruitsJSON)
  let getFruits = JSON.parse(localStorage.getItem("fruits"))

  // Yura
  function addFruit() {
    getFruits.length == 0
      ? $("table tbody#fruit-list").empty()
      : getFruits.map((item, i) => {
          fruit.push(`<tr><td>${i}</td><td>${item.name}</td><td>
        <img src="${item.img}" alt="${item.name}" />
      </td>
      <td>${item.country}</td>
      <td>${item.weight} kg</td>
      <td>${item.price} $</td>
      <td class="edit">
        <img src="./image/icons/edit.svg" alt="edit" data-id="${i}" />
      </td>
      <td class="delete">
        <img src="./image/icons/delete.svg" alt="delete" data-id="${i}" />
      </td>
    </tr>`)
          $("table tbody#fruit-list").empty().append(fruit)
        })

    $(".edit").on("click", "img", function () {
      $(".modal-edit form").empty()
      let id = $(this).data("id")
      let ourElement = getFruits[id]
      $(".modal-edit form").append(`
      <div class="item">
        <label for="title">Title: </label>
        <input type="text" id="title" required value="${ourElement.name}">
      </div>
      <div class="item">
        <label for="icon">Icon url: </label>
        <input type="text" id="icon" required value="${ourElement.img}">
      </div>
      <div class="item">
        <label for="country">Country: </label>
        <input type="text" id="country" required value="${ourElement.country}">
      </div>
      <div class="item">
        <label for="quantity">Quantity: </label>
        <input type="number" id="quantity" required min="0" value="${ourElement.weight}">
      </div>
      <div class="item">
        <label for="price">Price: </label>  
        <input type="number" id="price" required min="0" value="${ourElement.price}">
      </div>
      <div  class="btn save">Save</div>
    `)

      $(".modal-edit").css({ display: "block" }).hide(0).show(1000)

      $(".modal-edit form").on("click", ".save", function () {
        let newObj = {
          id: ourElement.id,
          name: $("#title").val(),
          img: $("#icon").val(),
          country: $("#country").val(),
          weight: $("#quantity").val(),
          price: $("#price").val(),
        }
        getFruits.splice(id, 1, newObj)
        fruitsJSON = JSON.stringify(getFruits)
        localStorage.setItem("fruits", fruitsJSON)
        getFruits = JSON.parse(localStorage.getItem("fruits"))
        $(".modal-edit").hide(1000)
        fruit = []
        addFruit()
      })
    })

    $(".delete").on("click", "img", function () {
      id = $(this).data("id")
      getFruits.splice(id, 1)
      fruitsJSON = JSON.stringify(getFruits)
      localStorage.setItem("fruits", fruitsJSON)
      getFruits = JSON.parse(localStorage.getItem("fruits"))
      fruit = []
      addFruit()
    })

    $(".admin-page").on("click", ".addNewFruit", function () {
      $(".modal-edit form").empty()

      $(".modal-edit h2").text("Add product")
      $(".modal-edit form").append(`
        <div class="item">
          <label for="title">Title: </label>
          <input type="text" id="title" required value="">
        </div>
        <div class="item">
          <label for="icon">Icon url: </label>
          <input type="text" id="icon" required value="">
        </div>
        <div class="item">
          <label for="country">Country: </label>
          <input type="text" id="country" required value="">
        </div>
        <div class="item">
          <label for="quantity">Quantity: </label>
          <input type="number" id="quantity" required min="0" value="">
        </div>
        <div class="item">
          <label for="price">Price: </label>  
          <input type="number" id="price" required min="0" value="">
        </div>
        <div  class="btn add">Add</div>
      `)
      $(".modal-edit").css({ display: "block" }).hide(0).show(1000)
    })
  }

  addFruit()

  $(".modal-edit form").on("click", ".add", function () {
    let newObj = {
      id: getFruits.length + 1,
      name: $("#title").val(),
      img: $("#icon").val(),
      country: $("#country").val(),
      weight: $("#quantity").val(),
      price: $("#price").val(),
    }

    getFruits.push(newObj)
    fruitsJSON = JSON.stringify(getFruits)
    localStorage.setItem("fruits", fruitsJSON)
    getFruits = JSON.parse(localStorage.getItem("fruits"))
    $(".modal-edit").hide(1000)
    fruit = []
    addFruit()
  })

  //
  //
})

// let basket = []
// let arrBasket = [
//   {
//     id: 1,
//     name: "Apple",
//     country: "Ukraine",
//     weight: 20,
//     price: 1,
//   }]

//   // local storage
// let basketJSON = JSON.stringify(arrBasket)
// localStorage.setItem("basket", basketJSON)
// const getBasket = JSON.parse(localStorage.getItem("basket"))

// getBasket.length > 0 &&
//   getBasket.map((item, i) => {
//     basket.push(`<tr><td>${i}</td><td>${item.name}</td>
//     <td>${item.weight} kg</td>
//     <td>${item.price} $</td>

//   </tr>
//   `)
//   })
//   basket.push(`<tr>
//   <td colspan="3">Total:</td>
//   <td>Sum</td>
//   </tr>`)
// $("table tbody#basket-list").append(basket)
