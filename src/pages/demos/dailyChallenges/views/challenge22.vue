<template>
  <div class="view-challenge">
    <nav>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
</template>

<style lang="less" scoped>
  .view-challenge {
    background: linear-gradient(cadetblue, darkcyan);
  }

  nav {
    width: 300px;
    height: 300px;
    /*--bgcolor: lemonchiffon;*/
    background-color: lemonchiffon;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 30px 0;
    box-sizing: border-box;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
  }

  nav ul li {
    color: brown;
    font-size: 20px;
    font-family: sans-serif;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    transition: 0.5s ease-out;
    cursor: pointer;
  }

  nav ul li:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1),
    0 8px 8px rgba(0, 0, 0, 0.1),
    0 12px 12px rgba(0, 0, 0, 0.1);
    transform: scale(1.05) translateY(-0.25em) perspective(300px) rotateX(20deg) ;
  }
</style>
