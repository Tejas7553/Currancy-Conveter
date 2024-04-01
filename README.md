# Currency Converter README

## Overview

This project is a simple currency converter web application that allows users to convert between different currencies using real-time exchange rates. It utilizes HTML, CSS, and JavaScript to create the user interface and fetch exchange rate data from an external API.

## Features

- **Currency Selection**: Users can select the currency they want to convert from and to using dropdown menus.
- **Real-time Exchange Rates**: Exchange rates are fetched from an external API to ensure accuracy.
- **Visual Representation**: Flags representing countries are displayed alongside currency options for better user experience.

## Files

- **index.html**: This file contains the structure of the web page, including input fields, dropdown menus, and the exchange rate display.
- **style.css**: This file contains the styles for formatting the appearance of the web page elements.
- **codes.js**: JavaScript file containing currency code mappings.
- **script.js**: JavaScript file responsible for fetching exchange rates and handling user interactions.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter the amount you want to convert.
3. Select the currency you want to convert from and to.
4. Click the "Get Exchange Rate" button to see the converted amount.

## Dependencies

- **Flags API**: Flags representing countries are fetched dynamically using the Flags API.
- **Currency Exchange API**: Exchange rates are fetched from an external API provided by `@fawazahmed0/currency-api`.

## Setup

No additional setup is required to run this project locally. Ensure an internet connection is available to fetch exchange rate data from the external API.

## Contributing

Contributions to this project are welcome. If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## Credits

- **API**: Exchange rates are fetched from [@fawazahmed0/currency-api](https://www.npmjs.com/package/@fawazahmed0/currency-api)
- **Flags API**: Flags representing countries are fetched from [Flags API](https://flagsapi.com/)


