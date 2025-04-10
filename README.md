# User Catalog

## Description

This project is a user catalog where users can search, filter, and sort information about users fetched from an API (JSONPlaceholder). Users can filter by name, email, city, and sort by name and email. Basic pagination is also implemented to load more data.

## Features

1. **Fetching User Data**  
   Data is fetched from the API (JSONPlaceholder): `https://jsonplaceholder.typicode.com/users`.

2. **User Search**  
   Users can search by name or email. Search works in real-time.

3. **Filtering**  
   Users can filter by:
   - City
   - Company

4. **Sorting**  
   Users can sort the list by:
   - Name (A-Z, Z-A)
   - Email (A-Z, Z-A)

5. **Pagination**  
   Users can load more results with the "Show More" button.

## Technologies Used

- **React** - for building the user interface
- **JSONPlaceholder API** - for fetching user data
- **CSS** - for styling the interface

## Running the Project

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/user-catalog.git
    ```

2. Navigate to the project directory:
    ```bash
    cd user-catalog
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the project:
    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Additional Features (Optional)

- For deploying to GitHub Pages:
    1. Install the deployment package:
        ```bash
        npm install gh-pages --save-dev
        ```

    2. Add the deployment scripts to your `package.json`:
        ```json
        "scripts": {
          "predeploy": "npm run build",
          "deploy": "gh-pages -d build"
        }
        ```

    3. Run the deploy script:
        ```bash
        npm run deploy
        ```

    Your project will be available at: `https://yourusername.github.io/user-catalog`.

## License

This project is licensed under the MIT License. For more details, please see the [LICENSE](LICENSE) file.
