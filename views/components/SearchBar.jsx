const React = require("react");
function SearchBar() {
    return (
      <div class="cover occupy-space" >
        <h1>Zero waste lifestile tips</h1>
        <form class="flex-form">
          <input id="seacrh-bar" autocomplete ="off" class="shadow" type="search" placeholder="Ditch papar towels" />
          <input id="search-button" class="shadow" type="submit" value="Search" />
        </form>
      </div>
  );
}

module.exports = SearchBar;