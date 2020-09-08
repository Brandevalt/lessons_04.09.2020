$(function () {
  let fruit = []
  let arrFruits = [
    {
      id: 1,
      name: "Apple",
      img: "./image/apple.png",
      counry: "Ukraine",
      weight: 20,
      price: 1,
    },
    {
      id: 2,
      name: "Orange",
      img: "./image/orange.png",
      counry: "Azerbaijan",
      weight: 20,
      price: 2,
    },
    {
      id: 3,
      name: "Pineapple",
      img: "./image/pineapple.png",
      counry: "India",
      weight: 19,
      price: 1.3,
    },
    {
      id: 4,
      name: "Pear",
      img: "./image/pear.png",
      counry: "Ukraine",
      weight: 29,
      price: 1.5,
    },
    {
      id: 5,
      name: "Banana",
      img: "./image/banana.png",
      counry: "India",
      weight: 23,
      price: 1.8,
    },
    {
      id: 6,
      name: "Cherry",
      img: "./image/cherry.png",
      counry: "Ukraine",
      weight: 14,
      price: 2.3,
    },
    {
      id: 7,
      name: "Pomegranate",
      img: "./image/pomegranate.png",
      counry: "Azerbaijan",
      weight: 34,
      price: 2,
    },
    {
      id: 8,
      name: "Mango",
      img: "./image/mango.png",
      counry: "India",
      weight: 34,
      price: 6.5,
    },
  ]

  // $.getJSON("./js/product.json", function (data) {
  //   $.each(data, function (key, val) {
  //     console.log(val)
  //   })
  // })

  // $.getJSON("./js/product.json", {
  //   header: "Access-Control-Allow-Origin: *",
  // }).done(function (data) {
  //   $.each(data.items, function (i, item) {
  //     console.log(item)
  //   })
  // })

  let fruitsJSON = JSON.stringify(arrFruits)
  localStorage.setItem("fruits", fruitsJSON)

  const getFruits = JSON.parse(localStorage.getItem("fruits"))

  getFruits.length > 0 &&
    getFruits.map((item, i) => {
      fruit.push(`<tr><td>${i}</td><td>${item.name}</td><td>
        <img src="${item.img}" alt="${item.name}" />
      </td>
      <td>${item.counry}</td>
      <td>${item.weight} kg</td>
      <td>${item.price} $</td>
      <td class="edit">
        <img src="./image/icons/edit.svg" alt="edit" data-id="${i}" />
      </td>
      <td class="delete">
        <img src="./image/icons/delete.svg" alt="delete" />
      </td>
    </tr>`)
    })

  $("table tbody#fruit-list").append(fruit)

  $(".edit").on("click", "img", function () {
    let id = $(this).data("id")

    console.log(getFruits[id])
  })
})
