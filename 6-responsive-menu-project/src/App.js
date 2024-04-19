import { useState } from "react";
import "./App.css";

function App() {
  let [menuStatus, setMenuStatus] = useState(false);

  return (
    <div className="App">
      <button className="mIcon" onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <h1>Chandan Kumar</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, assumenda quaerat voluptatem libero cupiditate consequuntur veritatis at ad quis animi aut similique maiores ullam nam voluptate porro quidem officia asperiores perspiciatis ipsam quas qui harum blanditiis. Minima, aperiam explicabo fugiat assumenda ipsam quia id, animi cumque, delectus quibusdam possimus tenetur. Omnis, quo architecto dolor ipsam, qui quasi natus rem suscipit officiis at voluptate aut maiores iusto praesentium nam deleniti asperiores. Dolorum vel iusto odit sequi recusandae id eligendi ipsum perspiciatis asperiores hic sapiente voluptas magnam optio similique aperiam laboriosam incidunt deleniti, molestias, commodi itaque, numquam natus cupiditate at! Nihil itaque veritatis, dolores ab, corporis dolorem dicta qui hic beatae animi quaerat similique quidem consequatur delectus! Est consectetur, saepe optio aperiam reiciendis iste, ad velit fugiat neque maxime doloremque commodi ipsam iusto nulla dolor itaque ducimus cupiditate rem ipsa ratione eligendi repudiandae, qui quibusdam unde? Alias, doloribus provident quisquam optio laborum similique praesentium placeat. Odio id expedita cumque saepe magnam magni sed mollitia in numquam aliquam. Deleniti consequuntur rerum sit quam fugit eius perferendis sint odit. Velit quo alias, in perferendis repudiandae animi, iure earum sunt, quidem odit amet consequuntur veniam et neque nobis ipsum. Animi veritatis commodi repellat rerum, sequi eligendi temporibus saepe possimus itaque, nostrum minus error nihil assumenda reiciendis ex? Doloribus corporis quod maiores magni quo, at, rerum tenetur eligendi, doloremque dolorem ab soluta corrupti culpa? Alias fugiat praesentium omnis aliquid soluta consequatur corporis amet quaerat. Eum vero quasi blanditiis temporibus assumenda non ipsum et minima incidunt adipisci. Perferendis ad porro doloremque nesciunt veniam sit quia, aliquam, omnis sapiente aut deleniti obcaecati non dolores quibusdam, doloribus quo dignissimos tempore! Quo adipisci nobis similique rem laudantium voluptate vel, incidunt quam dicta harum, quod unde repellendus at exercitationem quisquam quos rerum consequatur pariatur ullam alias laboriosam! Expedita doloribus animi voluptatem consequatur iste obcaecati temporibus asperiores, provident qui aliquid. Repellendus excepturi nesciunt velit aperiam, culpa sed ipsam placeat magnam veniam, pariatur nobis corrupti quisquam maiores libero fuga non atque nostrum adipisci? Est, dolorum facere! Exercitationem animi a repellendus nam, dolores quaerat magni delectus aliquid in, aut hic magnam nostrum ad perferendis quam nobis, ducimus quae excepturi esse ab maiores. Facilis, impedit vel nulla quam harum ipsum nostrum soluta culpa voluptatum alias est ratione hic nam voluptatem magnam deleniti, aspernatur aliquid saepe, odit vero? Aliquam dolorem minus minima praesentium esse provident impedit blanditiis nostrum quia ab, ipsam aperiam aliquid explicabo, atque maiores aspernatur eaque nam eius, at recusandae unde illum voluptatibus quae? Temporibus, modi labore, nesciunt repellendus dolorem sunt iure non quod a magnam nam voluptatum, obcaecati ducimus doloremque ipsum? Corrupti ea quos perferendis sequi voluptatibus? Distinctio adipisci assumenda velit, tempore quasi expedita nobis ducimus sit veritatis autem praesentium quae exercitationem labore.</p>
    </div>
  );
}

export default App;
