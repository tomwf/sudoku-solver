<template>
  <div class="puzzle">
    <table class="xAxisLegend">
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
      </tr>
    </table>
    <table class="yAxisLegend">
      <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
        <td>D</td>
        <td>E</td>
        <td>F</td>
        <td>G</td>
        <td>H</td>
        <td>I</td>
      </tr>
    </table>
    <table class="grid">
      <tr>
        <td class="A1 grid__input grid__light" title="A1">1</td>
        <td class="A2 grid__input grid__light" title="A2">2</td>
        <td class="A3 grid__input grid__light" title="A3">3</td>
        <td class="A4 grid__input grid__dark" title="A4">4</td>
        <td class="A5 grid__input grid__dark" title="A5">5</td>
        <td class="A6 grid__input grid__dark" title="A6">6</td>
        <td class="A7 grid__input grid__light" title="A7">7</td>
        <td class="A8 grid__input grid__light" title="A8">8</td>
        <td class="A9 grid__input grid__light" title="A9">9</td>
      </tr>
      <tr>
        <td class="B1 grid__input grid__light" title="B1">1</td>
        <td class="B2 grid__input grid__light" title="B2">2</td>
        <td class="B3 grid__input grid__light" title="B3">3</td>
        <td class="B4 grid__input grid__dark" title="B4">4</td>
        <td class="B5 grid__input grid__dark" title="B5">5</td>
        <td class="B6 grid__input grid__dark" title="B6">6</td>
        <td class="B7 grid__input grid__light" title="B7">7</td>
        <td class="B8 grid__input grid__light" title="B8">8</td>
        <td class="B9 grid__input grid__light" title="B9">9</td>
      </tr>
      <tr>
        <td class="C1 grid__input grid__light" title="C1"></td>
        <td class="C2 grid__input grid__light" title="C2"></td>
        <td class="C3 grid__input grid__light" title="C3"></td>
        <td class="C4 grid__input grid__dark" title="C4"></td>
        <td class="C5 grid__input grid__dark" title="C5"></td>
        <td class="C6 grid__input grid__dark" title="C6"></td>
        <td class="C7 grid__input grid__light" title="C7"></td>
        <td class="C8 grid__input grid__light" title="C8"></td>
        <td class="C9 grid__input grid__light" title="C9"></td>
      </tr>
      <tr>
        <td class="D1 grid__input grid__dark" title="D1"></td>
        <td class="D2 grid__input grid__dark" title="D2"></td>
        <td class="D3 grid__input grid__dark" title="D3"></td>
        <td class="D4 grid__input grid__light" title="D4"></td>
        <td class="D5 grid__input grid__light" title="D5"></td>
        <td class="D6 grid__input grid__light" title="D6"></td>
        <td class="D7 grid__input grid__dark" title="D7"></td>
        <td class="D8 grid__input grid__dark" title="D8"></td>
        <td class="D9 grid__input grid__dark" title="D9"></td>
      </tr>
      <tr>
        <td class="E1 grid__input grid__dark" title="E1"></td>
        <td class="E2 grid__input grid__dark" title="E2"></td>
        <td class="E3 grid__input grid__dark" title="E3"></td>
        <td class="E4 grid__input grid__light" title="E4"></td>
        <td class="E5 grid__input grid__light" title="E5"></td>
        <td class="E6 grid__input grid__light" title="E6"></td>
        <td class="E7 grid__input grid__dark" title="E7"></td>
        <td class="E8 grid__input grid__dark" title="E8"></td>
        <td class="E9 grid__input grid__dark" title="E9"></td>
      </tr>
      <tr>
        <td class="F1 grid__input grid__dark" title="F1"></td>
        <td class="F2 grid__input grid__dark" title="F2"></td>
        <td class="F3 grid__input grid__dark" title="F3"></td>
        <td class="F4 grid__input grid__light" title="F4"></td>
        <td class="F5 grid__input grid__light" title="F5"></td>
        <td class="F6 grid__input grid__light" title="F6"></td>
        <td class="F7 grid__input grid__dark" title="F7"></td>
        <td class="F8 grid__input grid__dark" title="F8"></td>
        <td class="F9 grid__input grid__dark" title="F9"></td>
      </tr>
      <tr>
        <td class="G1 grid__input grid__light" title="G1"></td>
        <td class="G2 grid__input grid__light" title="G2"></td>
        <td class="G3 grid__input grid__light" title="G3"></td>
        <td class="G4 grid__input grid__dark" title="G4"></td>
        <td class="G5 grid__input grid__dark" title="G5"></td>
        <td class="G6 grid__input grid__dark" title="G6"></td>
        <td class="G7 grid__input grid__light" title="G7"></td>
        <td class="G8 grid__input grid__light" title="G8"></td>
        <td class="G9 grid__input grid__light" title="G9"></td>
      </tr>
      <tr>
        <td class="H1 grid__input grid__light" title="H1"></td>
        <td class="H2 grid__input grid__light" title="H2"></td>
        <td class="H3 grid__input grid__light" title="H3"></td>
        <td class="H4 grid__input grid__dark" title="H4"></td>
        <td class="H5 grid__input grid__dark" title="H5"></td>
        <td class="H6 grid__input grid__dark" title="H6"></td>
        <td class="H7 grid__input grid__light" title="H7"></td>
        <td class="H8 grid__input grid__light" title="H8"></td>
        <td class="H9 grid__input grid__light" title="H9"></td>
      </tr>
      <tr>
        <td class="I1 grid__input grid__light" title="I1"></td>
        <td class="I2 grid__input grid__light" title="I2"></td>
        <td class="I3 grid__input grid__light" title="I3"></td>
        <td class="I4 grid__input grid__dark" title="I4"></td>
        <td class="I5 grid__input grid__dark" title="I5"></td>
        <td class="I6 grid__input grid__dark" title="I6"></td>
        <td class="I7 grid__input grid__light" title="I7"></td>
        <td class="I8 grid__input grid__light" title="I8"></td>
        <td class="I9 grid__input grid__light" title="I9"></td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
  @import "./Puzzle.scss"
</style>
