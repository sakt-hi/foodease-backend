# FoodEase Backend

![foodease_logo](https://github.com/user-attachments/assets/ff574af7-296d-42a5-ac18-a4323cd61101)

FoodEase backend provides RESTful API services for the FoodEase food delivery app. It includes JWT authentication and connects to a MongoDB cloud database.

## Features
- **JWT Authentication:** Secure login and registration.
- **Dish Management:** API endpoints for adding and managing dishes.
- **Order Management:** API endpoints for placing and checking order status.
- **Image Uploads:** Multer is used for handling image uploads.

## Tech Stack
- **Node.js**: Runtime environment.
- **Express**: Web framework.
- **MongoDB**: Cloud database.
- **JWT**: For authentication.
- **Multer**: For handling image uploads.

## API Endpoints

- **Food Routes:**
  - `POST /api/food/add`: Add a new dish (admin only).
  - `GET /api/food/list`: List all dishes (for admin & normal user).
  - `POST /api/food/remove`: Remove a dish (admin only).

- **Cart Routes:**
  - `POST /api/cart/add`: Add an item to the cart (authentication required).
  - `POST /api/cart/remove`: Remove an item from the cart (authentication required).
  - `POST /api/cart/get`: Get cart details (authentication required).

- **User Routes:**
  - `POST /api/user/register`: Register a new user.
  - `POST /api/user/login`: Authenticate and get a JWT token.

- **Order Routes:**
  - `POST /api/order/place`: Place a new order (authentication required).
  - `POST /api/order/verify`: Verify an order.
  - `POST /api/order/userOrders`: Get user-specific orders (authentication required).
  - `GET /api/order/list`: List all orders (admin only).
  - `POST /api/order/status`: Update the status of an order (admin only).

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any issues or suggestions, please open an issue or contact [sakthivel.ganesan@hotmail.com](mailto:sakthivel.ganesan@hotmail.com).
