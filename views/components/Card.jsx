const React = require("react");

function Card(props) {
  return (
    <div id="search-results" class="container occupy-space">
      <h3>Tip</h3> 
      <ul class="posts-box">
        <p>{props.title}</p>
        <p>{props.description}</p>
      </ul>
      <div class="modal" id="modal-name">
        <div class="modal-sandbox"></div>
          <div class="modal-box">
            <div class="modal-header">
              <img src="" class="inner-img" alt=""/>
            </div>
            <div class="modal" id="modal-name">
              <div class="modal-sandbox"></div>
              <div class="modal-box">
                <div class="modal-header">
                  <img src="" class="inner-img" alt=""/>
                </div>
                <div class="modal-body">
                  <h2 class="inner-title"></h2>
                  <div class="inner-text"></div>
                  <button class="prev-post">Previous</button>
                  <button class="next-post">Next</button>
                  <button class="close-post">Close</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}





module.exports = Card;
