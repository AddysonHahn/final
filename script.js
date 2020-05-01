new Vue({
  el: "#store",
  data: {
    items: [
      {
        name: "Stratocaster Guitar",
        type: "String",
        price: "249.99",
        brand: "FENDER",
        image: "https://shop.fender.com/on/demandware.static/-/Library-Sites-Fender-Shared/default/dw4dbb6d60/fender/nav-2019/taxonomy-electric-guitar-vintera-stratocaster2%402x.png",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Trumpet",
        type: "Brass",
        price: "225.00",
        brand: "YAMAHA",
        image: "https://usa.yamaha.com/files/47029_12073_1_2000x2000_b227ca900400a2710864fac25528b777.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "5 Piece Drum Set",
        type: "Percussion",
        price: "1859.99",
        brand: "YAMAHA",
        image: "https://media.sweetwater.com/api/i/q-82__ha-3939739a2ee12a58__hmac-7a12cef008c1c857442e0d2d433797162b93541b/images/items/750/SCBIRCHSPRB-large.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Acoustic Guitar",
        type: "String",
        price: "309.99",
        brand: "MATON",
        image: "https://maton.com.au/assets/uploads/products/Messiah_12_Front.png",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Banjo",
        price: "319.99",
        type: "String",
        brand: "MATON",
        image: "https://d1aeri3ty3izns.cloudfront.net/media/16/167798/600/preview_1.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Keytar",
        type: "Keyboard",
        price: "599.99",
        brand: "FENDER",
        image: "https://cdn.shopify.com/s/files/1/1923/5439/products/9271137e025368d933cadf158b6f2fb760c10c990b7998fe9ba1c6e96bd5113a.jpg?v=1583589689",
        hover: false,
        hasPopUp: false
      },
      {
        name: "French Horn",
        type: "Brass",
        price: "199.99",
        brand: "FENDER",
        image: "https://cdn10.bigcommerce.com/s-sjkuycrcgv/products/1040/images/2957/Single-Horn-Rental__89384.1515887582.1280.1280.jpg?c=2",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Flute",
        type: "Woodwind",
        price: "189.99",
        brand: "YAMAHA",
        image: "https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products23535-1200x1200-62959.jpg",
        hover: false,
        hasPopUp: false
      },
      {
        name: "Triangle",
        type: "Percussion",
        price: "39.99",
        brand: "MATON",
        image: "https://images-na.ssl-images-amazon.com/images/I/41NxetwrFyL.jpg",
        hover: false,
        hasPopUp: false
      }
    ],
    showPopUp: false,
    popUpItem: {},
    cart: [],
    newName: "",
    newPrice: "",
    newBrand: "FENDER",
    newType: "",
    cartImage: "https://static7.depositphotos.com/1000422/791/i/450/depositphotos_7911561-stock-photo-shopping-cart.jpg",
    noImage: "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6"
  },

  methods: {
    newItem: function() {
      if (this.newName.trim() != "" && this.newPrice.trim() != "") {
        this.items.push({
          name: this.newName.trim(),
          type: this.newType.trim(),
          price: this.newPrice.trim(),
          brand: this.newBrand,
          noImage: true,
          hover: false
        });
      } else {
        alert("Please fill in missing fields to submit.");
      }
      this.newName = "";
      this.newPrice = "";
      this.newType = "";
      this.newCategory = "";
    },
    addToCart: function(item, index) {
        this.cart.push(item);
      this.items.splice(index,1)
    },
    popUp: function(item) {
      this.showPopUp=!this.showPopUp;
      window.scrollTo(0,0);
      this.popUpItem=item;
    },
    empty: function() {
      this.items=this.items.concat(this.cart);
      this.cart=[];
    }
  }
});