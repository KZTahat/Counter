import React from "react";

function Intro() {
  return (
    <div id="introDiv">
      <h1>Welcom to MoviesDB</h1>
      <p>
        This is a single webpage full-stack Raect app which use mongo databases
        to manage data, this website is only for practising and rehearsing
        purposes, I used
        <a href="https://www.themoviedb.org/"> Themoviedb</a> API to import some
        movies data in the Products Page after saving them in a mongo database,
        just for practising the shopping cart I used each movie's vote count
        coming from the API as price to calculate the total price later in the
        cart. I used as well Auth0 library to athenticate user befor showing the
        products and befor he can test the functionalities of this webpage
      </p>
      <p>
        After you log in you can show what products we have in the products
        page, you can purchase whatever and however movies you want, you can't
        purchase the same item twice it won't let you. after that you are free
        to see your purchased items in the cart page, you have many choices to
        make, Incrementing the number of the same item where each item has a
        limit to reach, as well Decrementing the number of the item where you
        can't reach Zero because this means delete which is the third feature is
        to delete the whole item from the cart list. And offcourse you can
        commit and checkout to move to the purchasing process.
      </p>
      <span>If You Like This Webpage Hit Like</span>
    </div>
  );
}

export default Intro;
