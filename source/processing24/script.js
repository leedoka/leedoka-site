addEventListener('DOMContentLoaded', () => {
  const fuelAmountInput = document.getElementById('fuel_volume');
  const fuelAmountRangeInput = document.getElementById('fuel_volume_range');
  const fuelTotalPriceContainer = document.getElementById('fuel_total_price');
  const fuelDiscountContainer = document.getElementById('fuel_discount');

  fuelAmountInput.addEventListener('input', (event) => {
    const value = event.target.value;
    handleFuelAmountInputChange(value);
  });

  fuelAmountInput.addEventListener('change', (event) => {
    const value = event.target.value;
    handleFuelAmountInputChange(value);
  });

  fuelAmountRangeInput.addEventListener('input', (event) => {
    console.log('fuelAmountRangeInput input',  event.target.value);
    const value = event.target.value;
    handleFuelAmountRangeInputChange(value);
  });

  const handleFuelAmountInputChange = ((value) => {
    let fuelAmount = parseInt(value);

    if (fuelAmount < 0) {
      fuelAmount = 0;
      fuelAmountInput.value = 0;
    }

    if (fuelAmount > 5000) {
      fuelAmount = 5000;
      fuelAmountInput.value = 5000;
    }

    fuelAmountRangeInput.value = fuelAmount;

    updateFuelPrice(fuelAmount);
  });

  const handleFuelAmountRangeInputChange = ((value) => {
    const fuelAmount = parseInt(value);

    fuelAmountInput.value = fuelAmount;

    updateFuelPrice(fuelAmount);
  });

  const OUR_FUEL_PRICE = 4550;
  const MAX_FUEL_PRICE = 4959;

  // 6 953.00 ₽
  const calculateFuelTotalPrice = ((fuelAmount) => {
    return fuelAmount * OUR_FUEL_PRICE;
  });

  const calculateFuelMaxPrice = ((fuelAmount) => {
    return fuelAmount * MAX_FUEL_PRICE;
  });

  const calculateFuelDiscount = ((fuelAmount) => {
    return calculateFuelMaxPrice(fuelAmount) - calculateFuelTotalPrice(fuelAmount);
  });

  const updateFuelPrice = ((fuelAmount) => {
    const fuelPrice = calculateFuelTotalPrice(fuelAmount) / 100;
    const fuelDiscount = calculateFuelDiscount(fuelAmount) / 100;

    // Format currency string
    const options = { style: 'currency', currency: 'RUB' };
    const numberFormat = new Intl.NumberFormat('ru-RU', options);

    fuelTotalPriceContainer.innerText = numberFormat.format(fuelPrice);
    fuelDiscountContainer.innerHTML = numberFormat.format(fuelDiscount);
  });
});
