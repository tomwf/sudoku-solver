<script>
export default {
  data() {
    return {
      puzzleString: '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'
    }
  },
  mounted() {
    const inputString = document.getElementById('text-input')
    inputString.value = this.puzzleString

    inputString.addEventListener('input', () => {
      this.fillPuzzle(inputString.value)
    })

    /* console.log(inputString.value) */
    this.fillPuzzle(inputString.value)
  },
  methods: {
    fillPuzzle(data) {
      let len = data.length < 81 ? data.length : 81
      for (let i = 0; i < len; i++) {
        let rowLetter = String.fromCharCode('A'.charCodeAt(0) + Math.floor(i / 9))
        let col = (i % 9) + 1
        if (!data[i] || data[i] === ".") {
          document.getElementsByClassName(rowLetter + col)[0].innerText = " "
          continue
        }
        document.getElementsByClassName(rowLetter + col)[0].innerText = data[i]
      }
      return
    },
    async getSolved() {
      const textArea = document.getElementById("text-input")
      const errorMsg = document.getElementById("error-msg")
      const stuff = {"puzzle": textArea.value}

      const data = await fetch("/api/solve", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(stuff)
      })
      const parsed = await data.json()
      if (parsed.error) {
        errorMsg.innerHTML = `<code>${JSON.stringify(parsed, null, 2)}</code>`
        return
      }
      this.fillPuzzle(parsed.solution)
    },
    async getChecked() {
      const textArea = document.getElementById("text-input")
      const coordInput = document.getElementById("coordinate")
      const valInput = document.getElementById("value")
      const errorMsg = document.getElementById("error-msg")

      const stuff = {"puzzle": textArea.value, "coordinate": coordInput.value, "value": valInput.value}

      const data = await fetch("/api/check", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(stuff)
      })
      const parsed = await data.json()
      errorMsg.innerHTML = `<code>${JSON.stringify(parsed, null, 2)}</code>`
}
  }
}
</script>

<template>
  <form>
    <p id="error-msg"></p>
    <textarea id="text-input"></textarea>
    <button id="solve" @click.prevent="getSolved">Solve</button>
    <div>
      <input id="coordinate" type="text" placeholder="Coordinate (A1)">
      <input id="value" type="text" placeholder="Value (1-9)">
    </div>
    <button id="check" @click.prevent="getChecked">Check Placement</button>
  </form>
</template>

<style lang="scss">
  @import "./InputForm.scss"
</style>
