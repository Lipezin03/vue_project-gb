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
            name="operand1"
          />
          <input
            v-model.number="operand2"
            class="calculator__input"
            placeholder="Введите второе число или возвести в Cтепень"
            type="text"
            name="operand2"
          />
        </div>

        <div class="calculator__block-button">
          <button
            v-for="el in buttonElements"
            :key="el"
            @click="getResult(el)"
            class="calculator__button"
            :name="el"
          >
            {{ el }}
          </button>
        </div>

        <div class="calculator__result">
          Результат: <span>{{ resultAndClear }}</span>
        </div>

        <div class="virtual-keyboard">
          <div class="virtual-keyboard__checkbox">
            <input
              class="virtual-keyboard__checkbox-input"
              v-model="checkboxValue"
              id="check"
              type="checkbox"
            />
            <label for="check" class="virtual-keyboard__checkbox-label">
              Отобразить экранную клавиатуру
            </label>
          </div>

          <div v-show="checkboxValue" class="virtual-keyboard__content">
            <button
              @click="writeWithKeyboardInInput"
              v-for="item in virtKeyboardBtn"
              :key="item"
              class="virtual-keyboard__button"
              :name="item"
            >
              {{ item }}
            </button>

            <button
              @click="deleteSymbolOnKeyboard"
              class="virtual-keyboard__button"
              name="Удалить"
            >
              Удалить
            </button>

            <div class="virtual-keyboard__radio-block">
              <input
                v-model="radioPositoinKeyboard"
                type="radio"
                checked
                id="radio1"
                class="virtual-keyboard__radio-block-input"
                name="position1"
                value="writeOperand1"
              />
              <label for="radio1" class="virtual-keyboard__radio-block-label">
                Поле для ввода 1</label
              >
              <input
                v-model="radioPositoinKeyboard"
                type="radio"
                id="radio2"
                class="virtual-keyboard__radio-block-input"
                name="position2"
                value="writeOperand2"
              />
              <label for="radio2" class="virtual-keyboard__radio-block-label">
                Поле для ввода 2
              </label>
            </div>
          </div>
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
      checkboxValue: false,
      radioPositoinKeyboard: "writeOperand1",
      isValueButtonKeyboardInput1: [],
      isValueButtonKeyboardInput2: [],
      buttonElements: [
        "Плюс",
        "Минус",
        "Умножить",
        "Разделить",
        "Возведение в степень",
        "Целочисленное деление",
      ],
      virtKeyboardBtn: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },

  computed: {
    resultAndClear() {
      if (/\D/.test(this.operand1) || /\D/.test(this.operand2)) {
        return "Ошибка: введите цифру";
      } else if (this.operand1 === "" || this.operand2 === "") {
        return "";
      } else {
        return this.result;
      }
    },
  },

  methods: {
    getResult(operation) {
      switch (operation) {
        case "Плюс":
          this.add();
          break;
        case "Минус":
          this.substract();
          break;
        case "Умножить":
          this.multiply();
          break;
        case "Разделить":
          this.divide();
          break;
        case "Возведение в степень":
          this.result = this.getDegreeOfNumber(this.operand1, this.operand2);
          break;
        case "Целочисленное деление":
          this.result = this.getinteger(this.operand1, this.operand2);
          break;
      }
    },

    add() {
      this.result = +this.operand1 + +this.operand2;
    },

    substract() {
      this.result = +this.operand1 - +this.operand2;
    },

    multiply() {
      this.result = +this.operand1 * +this.operand2;
    },

    divide() {
      this.result = +this.operand1 / +this.operand2;
    },

    getDegreeOfNumber(number, degree) {
      this.fibResult = "";
      if (degree === 0) return 1;

      let count = +number;

      for (let i = 1; i < +degree; i++) {
        count *= number;
      }
      return count;
      // return Math.pow(number, degree);
    },

    getinteger(num1, num2) {
      this.fibResult = "";
      return (+num1 - (+num1 % +num2)) / +num2;
    },

    writeWithKeyboardInInput(event) {
      if (this.radioPositoinKeyboard === "writeOperand1") {
        this.isValueButtonKeyboardInput1.push(event.target.textContent);

        this.operand1 +=
          this.isValueButtonKeyboardInput1[
            this.isValueButtonKeyboardInput1.length - 1
          ];
      } else if (this.radioPositoinKeyboard === "writeOperand2") {
        this.isValueButtonKeyboardInput2.push(event.target.textContent);

        this.operand2 +=
          this.isValueButtonKeyboardInput2[
            this.isValueButtonKeyboardInput2.length - 1
          ];
      }
    },

    deleteSymbolOnKeyboard() {
      if (this.radioPositoinKeyboard === "writeOperand1") {
        this.isValueButtonKeyboardInput1 = this.operand1.toString().split("");
        let count = "";

        let currentNumber = this.isValueButtonKeyboardInput1.slice(
          0,
          this.isValueButtonKeyboardInput1.length - 1
        );

        this.isValueButtonKeyboardInput1.pop();

        currentNumber.forEach((el) => (count += el));

        this.operand1 = count;
      } else if (this.radioPositoinKeyboard === "writeOperand2") {
        this.isValueButtonKeyboardInput2 = this.operand2.toString().split("");

        let count = "";

        let currentNumber = this.isValueButtonKeyboardInput2.slice(
          0,
          this.isValueButtonKeyboardInput2.length - 1
        );

        this.isValueButtonKeyboardInput2.pop();

        currentNumber.forEach((el) => (count += el));

        this.operand2 = count;
      }
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
    cursor: pointer;
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

.virtual-keyboard {
  padding-top: 20px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__checkbox {
    position: relative;
  }

  &__checkbox-input {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
  }

  &__checkbox-label {
    font-size: 16px;
    color: brown;
    padding-left: 27px;
  }
  &__checkbox-label::before {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid teal;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 1;
    transition: opacity 0.7s;
  }
  &__checkbox-label::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background-color: teal;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.7s;
  }
  &__checkbox-input:checked + &__checkbox-label::after {
    opacity: 1;
    border: 1px solid teal;
  }
  &__checkbox-input:checked + &__checkbox-label::before {
    opacity: 0;
  }

  &__content {
    margin-top: 20px;
  }

  &__button {
    margin-left: 10px;
    padding: 20px;
    cursor: pointer;
    background: none;
    border: 1px solid teal;
  }
  &__button:hover {
    background-color: teal;
    color: wheat;
  }

  &__radio-block {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
  }

  &__radio-block-input {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
  }

  &__radio-block-label {
    font-size: 16px;
    color: brown;
    padding-left: 27px;
    position: relative;
  }
  &__radio-block-label::before {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border: 1px solid teal;
    border-radius: 50%;
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: 1;
    opacity: 1;
    transition: opacity 0.7s;
  }
  &__radio-block-label::after {
    content: "";
    display: block;
    width: 17px;
    height: 17px;
    border: 1px solid teal;
    background: teal;
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.7s;
  }
  &__radio-block-input:checked + &__radio-block-label::after {
    opacity: 1;
    border: 1px solid teal;
  }
}
</style>