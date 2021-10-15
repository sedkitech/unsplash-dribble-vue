<template style="background-color: #f9f8fd">
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>

    <div class="dark:bg-gray-800" style="margin-bottom: -00px">
      <div
        class="
          text-center
          w-full
          mx-auto
          py-12
          px-4
          sm:px-6
          lg:py-16
          lg:px-8
          z-20
        "
      >
        <h2
          class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
        >
          <span class="block"> Discover the world’s top </span>
          <span class="block text-pink-400"> designers & creatives </span>
        </h2>

        <p style="" class="text-xl mt-4 max-w-md mx-auto text-gray-400">
          Dribbble is the leading destination to find & showcase creative work
          and home to the world's best design professionals.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex rounded-md shadow"></div>
        </div>
      </div>
    </div>

    <!-- testing position  -->

    <!-- <button id="myBtn">Open Modal</button> -->

    <!-- The Modal -->
    <div id="photoModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content w-2/6" style="border-radius: 5px">
        <div style="border-radius: 5px" class="modal-header bg-gray-800 p-4">
          <span
            class="
              close
              closeBtn
              float-right
              text-lg
              font-bold
              hover:text-gray-500
              no-underline
              cursor-pointer
            "
            >&times;</span
          >
          <div style="border-radius: 5px">
            <h2>Author: {{ pressedPhoto?.user?.username }}</h2>
            <i
              v-bind:style="{
                color: pressedPhoto?.liked_by_user ? 'red' : 'white',
              }"
              @click="toggleLike(pressedPhoto)"
              class="fa fa-heart"
            ></i>
          </div>
        </div>
        <div style="border-radius: 5px" class="modal-body">
          <img
            style="border-radius: 5px; margin: auto"
            :src="pressedPhoto?.urls?.small"
          />

          <!-- <img
            :src="image"
            width="500"
            height="500"
            style="border-radius: 5px"
          /> -->
        </div>
        <div style="border-radius: 5px" class="modal-footer bg-gray-800">
          <h3>
            Description: <br />
            {{ pressedPhoto?.alt_description }}
          </h3>
        </div>
      </div>
    </div>

    <!-- <div
      id="modal"
      class="
        modal-bg
        transition-opacity
        duration-500
        opacity-0
        pt-16
        fixed
        w-full
        h-full
        left-0
        z-10
        overflow-auto
        
      "
      style="margin-top: -200px;"
    >
      <div class="modal-content relative m-auto bg-gray-100 w-2/5  shadow-lg " >
        <div class="p-4 bg-pink-700 text-white">
          <span
            class="
              closeBtn
              float-right
              text-lg
              font-bold
              hover:text-gray-500
              no-underline
              cursor-pointer
            "
            >&times;</span
          >
          <h2>Username</h2>
        </div>
        <div class="p-4">
          <img
            :src="image"
            width="300"
            height="300"
            style="border-radius: 5px"
          />
        </div>
        <div class="p-4 text-white bg-pink-500 uppercase text-sm">
          <h3>
            description: 9 lives isn't enough to capture the amazing-ness of
            cats. You need high-quality, professionally photographed images to
            do that. Unsplash's collection of cat images capture the wonder of
            the kitty in high-definition, and you can use these images however
            you wish for free.
          </h3>
        </div>
      </div>
    </div> -->

    <!-- testing posoition  -->

    <div class="filterSection cards-list" style="margin-top: -30px">
      <div class="catagories" style="margin-bottom: 30px">
        <label class="text-gray-700" for="animals">
          Categories
          <select
            @change="categoryChanged()"
            id="categories"
            class="
              block
              w-52
              py-2
              px-3
              border border-gray-300
              bg-white
              rounded-md
              shadow-sm
              focus:outline-none
              focus:ring-primary-500
              focus:border-primary-500
            "
            name="categories"
          >
            <option value="all">Select a category</option>
            <option value="animals">Animals</option>
            <option value="nature">Nature</option>
            <option value="humans">Humans</option>
            <option value="cities">cities</option>
          </select>
        </label>
      </div>

      <div class="search" style="margin-bottom: 30px">
        <div class="relative">
          <label for="name-with-label" class="text-gray-700">
            Search by username
          </label>
          <!--  <input
            type="text"
            id="name-with-label"
            class="
              rounded-lg
              border-transparent
              flex-1
              appearance-none
              border border-gray-300
              w-full
              py-2
              px-4
              bg-white
              text-gray-700
              placeholder-gray-400
              shadow-sm
              text-base
              focus:outline-none
              focus:ring-2
              focus:ring-purple-600
              focus:border-transparent
            "
            name="email"
            placeholder="Search for a designer"
          />
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                class="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  class="w-4 h-4 text-coolGray-800"
                >
                  <path
                    d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"
                  ></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              class="
                w-32
                py-2
                pl-10
                text-sm
                rounded-md
                sm:w-auto
                focus:outline-none
                bg-coolGray-100
                text-coolGray-800
                focus:bg-coolGray-50 focus:border-violet-600
              "
            />
          </div>
-->
          <div class="pt-2 relative mx-auto text-gray-600">
            <input
              class="
                border-2 border-gray-300
                bg-white
                h-10
                px-5
                pr-16
                rounded-lg
                text-sm
                focus:outline-none
              "
              type="search"
              name="search"
              id="inputUsernameSearch"
              placeholder="Search"
            />
            <button
              type="submit"
              @click="searchForUsername()"
              class="absolute right-0 top-0 mt-5 mr-4"
            >
              <svg
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Username 404 section  -->

    <h1 v-if="errorSearch" style="color: red; text-align: center">
      Couldn't find a user linked to this username.
    </h1>

    <div v-if="myLoader" class="loader">Loading...</div>

    <!-- CARDS section  -->

    <div class="cards-list">
      <div class="card 1" v-for="item of allPhotos">
        <div class="card_image" @click="openUp(item)">
          <img :src="item.urls.small" />
        </div>

        <div class="card_title title-white" style="margin-top: -90px">
          <i
            v-bind:style="{ color: item.liked_by_user ? 'red' : 'white' }"
            @click="toggleLike(item)"
            class="fa fa-heart"
          ></i>
          <p>
            {{ item.alt_description }}
            <!-- <button  class="heart-shape dark-heart"></button> -->
          </p>
        </div>
      </div>
    </div>

    <!-- footer -->

    <div
      class="my-footer"
      style="
        color: #f9f8fd;

        margin-top: 500px;
      "
    >
      © 2021
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import VueAxios from 'vue-axios'
// import Vue from 'vue';
// Vue.use(VueAxios,axios);

import axios from "axios";
import PhotoService from "../service/PhotoServices";

export default {
  name: "HelloWorld",
  data() {
    return {
      dataStored: [],
      myQuery: null,
      mytext: null,
      Services: null,
      data: {},
      allPhotos: [],
      photoParam: {},
      image: "",
      accesKey: "UZpMWkqqrQEP0g6t2Z2MWPcIV-jyHfuWPldICb8dBGQ",
      url: "https://api.unsplash.com/photos/random",
      // url: "https://api.unsplash.com/search/photos",
      page: 1,
      per_page: 28,
      query: null,
      pressedPhoto: null,
      username: null,
      errorSearch: false,
      filtredUsernameArray: [],
      colorChanged: false,
      pressedHeart: false,
      myLoader: false,
    };
  },
  created() {
    // this.fetchRandomPhoto();
    this.photoService = new PhotoService();
  },
  methods: {
    toggleLike(item) {
      item.liked_by_user = !item.liked_by_user;
    },

    // toggleLike(x){
    //   // x.classList.toggle("fa-thumbs-down");
    //   x.target.classList.toggle("fa-thumbs-down");
    // },

    // changeMyColor(item){
    // item.liked_by_user = !item.liked_by_user;

    // e.liked_by_user = !e.liked_by_user;
    //  e.target.classList.toggle('heart');

    //   this.pressedHeart = pic ;
    // liked_by_user
    // },

    openUp(photo) {
      this.pressedPhoto = photo;

      var modal = document.getElementById("photoModal");
      modal.style.display = "block";
    },
    categoryChanged() {
      this.errorSearch = false;
      this.myLoader = true;
      this.query = document.getElementById("categories").value;
      console.log(this.query);
      this.photoService
        .getPhotos(this.page, this.per_page, this.query)
        .then((data) => {
          this.allPhotos = data;
          this.myLoader = false;

          console.log("all photos", this.allPhotos);
        });

      document.getElementById("inputUsernameSearch").value = "";
    },

    sumbitUsernameSearch() {
      this.errorSearch = false;

      this.username = document.getElementById("inputUsernameSearch").value;
      console.log(this.username);

      if (this.username != "") {
        this.photoService
          .getUsernamePhotos(this.username, this.per_page)
          .then((data) => {
            if (data.length > 0) {
              this.allPhotos = data;
            } else {
              this.errorSearch = true;
            }

            console.log("all username photos", this.allPhotos);
          });

        document.getElementById("categories").value = "all";
      }
    },
    searchForUsername() {
      this.errorSearch = false;
      // this.allPhotos = this.dataStored;

      this.username = document.getElementById("inputUsernameSearch").value;
      console.log("searchForUsername", this.username);

      this.filtredUsernameArray = [];
      for (var i = 0; i < this.allPhotos.length; i++) {
        if (this.username == this.allPhotos[i].user.username) {
          this.filtredUsernameArray.push(this.allPhotos[i]);
        } else {
          this.errorSearch = true;
        }
      }

      if (this.filtredUsernameArray.length !== 0 && this.username.length > 0) {
        this.allPhotos = this.filtredUsernameArray;
        this.errorSearch = false;
      } else if (this.filtredUsernameArray.length == 0 || this.username == "") {
        this.allPhotos = this.dataStored;
      }
    },
  },

  mounted() {
    this.query = document.getElementById("categories").value;
    console.log(this.query);
    this.myLoader = true;
    this.photoService
      .getPhotos(this.page, this.per_page, this.query)
      .then((data) => {
        this.allPhotos = data;
        this.dataStored = data;
        this.myLoader = false;

        console.log("all photos", this.allPhotos);
      });

    var modal = document.getElementById("photoModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    // btn.onclick = function () {
    //   modal.style.display = "block";
    // };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
};
</script>

<style scoped>
/*spinner */

.loader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #eb60b1;
  background: -moz-linear-gradient(
    left,
    #eb60b1 10%,
    rgba(235, 96, 177, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #eb60b1 10%,
    rgba(235, 96, 177, 0) 42%
  );
  background: -o-linear-gradient(left, #eb60b1 10%, rgba(235, 96, 177, 0) 42%);
  background: -ms-linear-gradient(left, #eb60b1 10%, rgba(235, 96, 177, 0) 42%);
  background: linear-gradient(to right, #eb60b1 10%, rgba(235, 96, 177, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #eb60b1;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
}
.loader:after {
  background: #f9f8fd;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: "";
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* spinner */
.redClass {
  color: red;
}
.whiteClass {
  color: white;
}

.fa {
  font-size: 30px;
  cursor: pointer;
  user-select: none;
  color: #f3166e;
  /*   
  top: -250px;
  right: -80px; */
}
.heart-shape {
  border-radius: 50%;
  display: block;
  height: 200px;
  margin: 5em auto 0;
  text-align: center;
  width: 200px;
}
/*
  color of heart pink
   color: #f3166e; */

.dark-heart {
  color: #412929bc;
  content: "❤";
  font-size: 2em;
  position: relative;

  top: -330px;
  right: -120px;
}

.pink-heart {
  color: #f3166e;
  content: "❤";
  font-size: 2em;
  position: relative;

  top: -330px;
  right: -120px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {
  padding: 2px 16px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.my-footer {
  background-color: #2c3e50;
}

/* open model */
/* .modal-bg {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -9999;
} */
/* open model */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  font-family: "Raleway", sans-serif;
  background: #2f3238;
}

.container {
  margin: 30px;
}

.row {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.image {
  background: #50a7ff;
  position: relative;
  flex: 1;
  max-width: 460px;
  height: 300px;
  margin: 20px;
  overflow: hidden;
}

.image img {
  opacity: 0.8;
  position: relative;
  vertical-align: top;
  transition: 0.6s;
  transition-property: opacity;
}

.image:hover img {
  opacity: 1;
}

.image .details {
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  width: 100%;
  height: 100%;
}

.image .details h2 {
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 300;
  margin-top: 70px;
  transition: 0.4s;
  transition-property: transform;
}

.image .details h2 span {
  font-weight: 900;
}

.image:hover .details h2 {
  transform: translateY(-30px);
}

.image .details p {
  margin: 30px 30px 0 30px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  opacity: 0;
  transition: 0.6s;
  transition-property: opacity, transform;
}

.image:hover .details p {
  opacity: 1;
  transform: translateY(-40px);
}

.more {
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  bottom: -60px;
  transition: 0.6s;
  transition-property: bottom;
}

.image:hover .more {
  bottom: 0;
}

.more .read-more {
  color: #000;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
}

.more .read-more span {
  font-weight: 900;
}

.more .icon-links i {
  color: #000;
  font-size: 20px;
}

.more .icon-links a:not(:last-child) i {
  margin-right: 20px;
}

/* Responsive CSS */

@media (max-width: 1080px) {
  .image {
    flex: 100%;
    max-width: 480px;
  }
}

@media (max-width: 400px) {
  .image .details p {
    font-size: 16px;
  }

  .more .read-more,
  .more .icon-links a i {
    font-size: 18px;
  }
}

/* */
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 15px;
  margin-top: -60px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}

/*
.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  background-image: url('https://i.redd.it/b3esnz5ra34y.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  transition: 0.4s;
}
*/

.filterSection {
  display: flex;
  justify-content: space-evenly;
}

a {
  color: #42b983;
}
.container {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100px;
}
.container .search {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background: crimson;
  border-radius: 50%;
  transition: all 1s;
  z-index: 4;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
}
.container .search:hover {
  cursor: pointer;
}
.container .search::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 22px;
  right: 0;
  bottom: 0;
  left: 22px;
  width: 12px;
  height: 2px;
  background: white;
  transform: rotate(45deg);
  transition: all 0.5s;
}
.container .search::after {
  content: "";
  position: absolute;
  margin: auto;
  top: -5px;
  right: 0;
  bottom: 0;
  left: -5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid white;
  transition: all 0.5s;
}
.container input {
  font-family: "Inconsolata", monospace;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  background: crimson;
  color: white;
  text-shadow: 0 0 10px crimson;
  padding: 0 80px 0 20px;
  border-radius: 30px;
  box-shadow: 0 0 25px 0 crimson, 0 20px 25px 0 rgba(0, 0, 0, 0.2);
  transition: all 1s;
  opacity: 0;
  z-index: 5;
  font-weight: bolder;
  letter-spacing: 0.1em;
}
.container input:hover {
  cursor: pointer;
}
.container input:focus {
  width: 300px;
  opacity: 1;
  cursor: text;
}
.container input:focus ~ .search {
  right: -250px;
  background: #151515;
  z-index: 6;
}
.container input:focus ~ .search::before {
  top: 0;
  left: 0;
  width: 25px;
}
.container input:focus ~ .search::after {
  top: 0;
  left: 0;
  width: 25px;
  height: 2px;
  border: none;
  background: white;
  border-radius: 0%;
  transform: rotate(-45deg);
}
.container input::placeholder {
  color: white;
  opacity: 0.5;
  font-weight: bolder;
}
</style>
