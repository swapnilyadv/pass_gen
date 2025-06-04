# Password Generator

![image](https://github.com/user-attachments/assets/26cb3609-04ab-4cdc-a84b-e5cae19985e8)


This project is a luxury UI web application that allows users to generate random passwords based on their preferences. The application is built using React and Vite, providing a fast and modern development experience.

## Features

- User-friendly interface for generating secure passwords.
- Customizable password preferences, including length and character types.
- Responsive design for a seamless experience across devices.

## Project Structure

```
luxury-password-generator
├── src
│   ├── assets               # Static assets (images/icons)
│   ├── components           # React components
│   │   ├── PasswordGenerator.tsx  # Logic for generating passwords
│   │   └── PreferencesForm.tsx    # User preferences form
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point of the application
│   └── styles              # CSS styles
│       └── luxury.css      # Styles for luxury UI
├── public
│   └── favicon.svg         # Favicon for the website
├── index.html              # Main HTML file
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd luxury-password-generator
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Use the `PreferencesForm` component to select your desired password length and character types.
- Click the button to generate a password based on your preferences.
- The generated password will be displayed for you to copy and use.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
