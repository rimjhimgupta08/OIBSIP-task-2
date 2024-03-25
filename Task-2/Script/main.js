function convertTemperature() {
      const temperatureInput = parseFloat(document.getElementById("temperature").value);
      const unit = document.getElementById("unit").value;
      let result;
      
      if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
      }
      
      switch (unit) {
        case "celsius":
          result = {
            fahrenheit: (temperatureInput * 9/5) + 32,
            kelvin: temperatureInput + 273.15
          };
          break;
        case "fahrenheit":
          result = {
            celsius: (temperatureInput - 32) * 5/9,
            kelvin: (temperatureInput - 32) * 5/9 + 273.15
          };
          break;
        case "kelvin":
          result = {
            celsius: temperatureInput - 273.15,
            fahrenheit: (temperatureInput - 273.15) * 9/5 + 32
          };
          break;
      }
      
      document.getElementById("result").innerHTML = `
        
        <ul>
          ${result.celsius ? `<li>${result.celsius.toFixed(2)} &deg;C </li>` : ''}
          ${result.fahrenheit ? `<li>${result.fahrenheit.toFixed(2)} F</li>` : ''}
          ${result.kelvin ? `<li>${result.kelvin.toFixed(2)} K</li>` : ''}
        </ul>
      `;
    }
  
  