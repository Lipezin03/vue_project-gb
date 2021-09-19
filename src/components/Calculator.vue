<template>
  <div>
    <div class="calculator container">
      <h2 class="calculator__title">Калькулятор</h2>

      <div class="calculator__content">
        <div class="calculator__block-input">
          <input
            v-model.number="operand1"
            class="calculator__input"
            placeholder="Введите первое число"
            type="text"
          />
          <input
            v-model.number="operand2"
            class="calculator__input"
            placeholder="Введите второе число или возвести в Cтепень"
            type="text"
          />
        </div>

        <div class="calculator__block-button">
          <button
            v-for="el in buttonElements"
            :key="el"
            @click="getResult(el)"
            class="calculator__button"
          >
            {{ el }}
          </button>
        </div>

        <div class="calculator__result">
          Результат: <span>{{ result }}</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: "",
      operand2: "",
      result: "",
      buttonElements: [
        "Плюс",
        "Минус",
        "Умножить",
        "Разделить",
        "Возведение в степень",
        "Целочисленное деление",
      ],
    };
  },

  methods: {
    getResult(operation) {
      switch (operation) {
        case "Плюс":
          this.result = this.operand1 + this.operand2;
          break;
        case "Минус":
          this.result = this.operand1 - this.operand2;
          break;
        case "Умножить":
          this.result = this.operand1 * this.operand2;
          break;
        case "Разделить":
          this.result = this.operand1 / this.operand2;
          break;
        case "Возведение в степень":
          this.result = this.getDegreeOfNumber(this.operand1, this.operand2);
          break;
        case "Целочисленное деление":
          this.result = this.getinteger(this.operand1, this.operand2);
          break;
      }
    },

    getDegreeOfNumber(number, degree) {
      if (degree === 0) return 1;

      let count = number;

      for (let i = 1; i < degree; i++) {
        count *= number;
      }
      return count;
      // return Math.pow(number, degree);
    },

    getinteger(num1, num2) {
      return (num1 - (num1 % num2)) / num2;
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  max-width: 1160px;
  padding: 0 10px;
  margin: 0 auto;
}
.calculator {
  &__title {
    margin-top: 20px;
    text-align: center;
    font-size: 30px;
    color: brown;
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  &__block-input {
    display: flex;
    justify-content: center;
  }

  &__input {
    margin: 20px;
    border-bottom: 1px solid teal;
    width: 100%;
    font-size: 26px;
    text-align: center;
  }
  &__input:focus {
    outline: none;
  }
  &__input::placeholder {
    font-size: 14px;
    text-align: left;
  }

  &__block-button {
    padding-top: 20px;
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 30px;
  }

  &__button {
    background: none;
    border: 1px solid teal;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 18px;
    color: rgb(57, 63, 46);
    transition-duration: 0.5s;
  }
  &__button:hover {
    background-color: teal;
    color: wheat;
  }
  &__result {
    margin-top: 40px;
    font-size: 28px;
    text-align: center;
  }
  &__result span {
    color: red;
    font-size: 32px;
  }
}
</style>