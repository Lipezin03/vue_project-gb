import { mount } from "@vue/test-utils"
import Calculator from "@/components/Calculator"

describe('Calculator tests', () => {

  it('Тест поля ввода для operand1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');
    operand1Input.setValue('1')

    expect(wrapper.vm.operand1).toBe(1)
  })

  //-------------------------------------------------------------------------------------------

  it('Тест поля ввода для operand2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    operand2Input.setValue('44')

    expect(wrapper.vm.operand2).toBe(44)
  })

  //-------------------------------------------------------------------------------------------

  it('Тест получить результат Сумму', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    operand1Input.setValue('10')

    const operand2Input = wrapper.find('input[name=operand2]');
    operand2Input.setValue('15')

    const btn = wrapper.find('button[name="Плюс"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(25)
  })

  //-------------------------------------------------------------------------------------------

  it('Тест получить результат Вычетание', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    operand1Input.setValue('15')

    const operand2Input = wrapper.find('input[name=operand2]');
    operand2Input.setValue('10')

    const btn = wrapper.find('button[name="Минус"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(5)
  })

  //-------------------------------------------------------------------------------------------

  it('Тест получить результат Деления', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    operand1Input.setValue('20')

    const operand2Input = wrapper.find('input[name=operand2]');
    operand2Input.setValue('2')

    const btn = wrapper.find('button[name="Разделить"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(10)
  })

  //-------------------------------------------------------------------------------------------

  it('Тест получить результат Умножение', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    operand1Input.setValue('2')

    const operand2Input = wrapper.find('input[name=operand2]');
    operand2Input.setValue('8')

    const btn = wrapper.find('button[name="Умножить"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(16)
  })

  //-------------------------------------------------------------------------------------------

  it('Тест получить результат Возведение в степень', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    operand1Input.setValue('4')

    const operand2Input = wrapper.find('input[name=operand2]');
    operand2Input.setValue('5')

    const btn = wrapper.find('button[name="Возведение в степень"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(1024)
  })

  //-------------------------------------------------------------------------------------------

  it('Тест получить результат Целочисленное деление', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name=operand1]');
    operand1Input.setValue('5')

    const operand2Input = wrapper.find('input[name=operand2]');
    operand2Input.setValue('2')

    const btn = wrapper.find('button[name="Целочисленное деление"]')
    btn.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })

  //-------------------------------------------------------------------------------------------

  it('Тест при нажатие на кнопку 0 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="0"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('0')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('0')

  })

  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 1 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="1"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('1')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('1')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 2 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="2"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('2')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('2')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 3 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="3"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('3')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('3')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 4 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="4"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('4')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('4')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 5 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="5"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('5')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('5')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 6 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="6"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('6')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('6')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 7 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="7"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('7')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('7')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 8 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="8"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('8')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('8')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 9 на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="9"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('9')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('9')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 0 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="0"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('0')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('0')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 1 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="1"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('1')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('1')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 2 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="2"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('2')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('2')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 3 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="3"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('3')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('3')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 4 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="4"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('4')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('4')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 5 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="5"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('5')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('5')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 6 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="6"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('6')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('6')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 7 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="7"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('7')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('7')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 8 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="8"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('8')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('8')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку 9 на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()


    const btn = wrapper.find('button[name="9"]')
    btn.trigger('click')

    expect(wrapper.vm.operand2).toBe('9')

    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('9')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку "Удалить" на вирт клавиатуре изменяет состояние input 1', () => {

    const wrapper = mount(Calculator);
    const operand1Input = wrapper.find('input[name="operand1"]');
    operand1Input.setValue('269')

    const radioInput1 = wrapper.find('input[name="position1"]');
    radioInput1.setChecked()

    const btn = wrapper.find('button[name="Удалить"]')
    btn.trigger('click')


    expect(wrapper.vm.operand1).toBe('26')


    operand1Input.setValue(wrapper.vm.operand1);

    expect(operand1Input.element.value).toBe('26')

  })


  //-------------------------------------------------------------------------------------------


  it('Тест при нажатие на кнопку "Удалить" на вирт клавиатуре изменяет состояние input 2', () => {

    const wrapper = mount(Calculator);
    const operand2Input = wrapper.find('input[name="operand2"]');
    operand2Input.setValue('135')

    const radioInput2 = wrapper.find('input[name="position2"]');
    radioInput2.setChecked()

    const btn = wrapper.find('button[name="Удалить"]')
    btn.trigger('click')


    expect(wrapper.vm.operand2).toBe('13')


    operand2Input.setValue(wrapper.vm.operand2);

    expect(operand2Input.element.value).toBe('13')

  })

})
