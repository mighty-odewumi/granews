# GraNews

GraNews is a modern news application designed to provide users with the latest news articles from various sources. The application aggregates news from multiple categories, ensuring that users stay informed about current events, sports, technology, entertainment, and more.

## Features

- **Real-time News Updates**: Get the latest news articles as they are published.
- **User-friendly Interface**: Enjoy a clean and intuitive user interface.
- **Bookmark Articles**: Save articles to read later.
- **Search Functionality**: Search for specific news articles or topics.
<!-- - **Multiple Categories**: Browse news by categories such as World, Business, Technology, Sports, Entertainment, and Health. -->
<!-- - **Share News**: Share interesting articles with friends and family via social media or email. -->

### Tech Stacks
* React Native
* Redux Toolkit
* [NewsData API](https://newsdata.io)
  

## Usage

To run the GraNews application on your local machine, follow these steps:

1. **Clone the repository**:
  ```bash
  git clone https://github.com/mighty-odewumi/granews.git
  ```
2. **Navigate to the project directory**:
  ```bash
  cd granews
  ```
3. **Install dependencies**:
  ```bash
  npm install
  ```
4. **Obtain an API key from [NewsData](https://newsdata.io)**:
  * Save the API key in a ```.env``` file with ```EXPO_PUBLIC_API_KEY```.
  * This is fetched by the ```/constants/Apikey.ts``` file and exported for every module needing it.
  * Add your ```.env``` to a ```.gitignore``` file for security.
5. **Start the application**:
  ```bash
  npx expo start
  ```

6. **Run on your device**:
   - For iOS: Use the Expo Go app to scan the QR code generated in your terminal.
   - For Android: Use the Expo Go app to scan the QR code or run the project on an Android emulator.
  
7. **Preview/APK builds**:
  - To make an APK build of the project, save the API key retrieved earlier as an environment variable in your Expo account using the same naming system. Set visibility to ```Sensitive```.
  - Run ```eas build -p android --profile preview```.


Once the application is running, you can start using GraNews on your device.


### Future Features
1. Loading news by Categories e.g. Sports, Health, Technology, etc.
2. Improved UI.

<!-- ## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. -->

<!-- ## Contact

For any questions or suggestions, please contact us at support@granews.com. -->
