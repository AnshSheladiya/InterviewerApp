- project-name
  - config/
    - default.json
    - development.json
    - staging.json
    - production.json
  - src/
    - app.js
    - api/
      - controllers/
        - authController.js
        - productController.js
      - middlewares/
        - authMiddleware.js
        - errorHandler.js
        - loggerMiddleware.js
        - validateRequest.js
      - models/
        - User.js
        - Product.js
      - routes/
        - authRoutes.js
        - productRoutes.js
      - services/
        - authService.js
        - productService.js
      - utils/
        - config.js
        - logger.js
        - db.js
        - mailer.js
        - paymentGateway.js
  - test/
    - api/
      - controllers/
        - authController.test.js
        - productController.test.js
      - models/
        - User.test.js
        - Product.test.js
    - utils/
      - logger.test.js
      - db.test.js
      - mailer.test.js
      - paymentGateway.test.js
  - seeds/
    - 20220101120000-seed-users.js
    - 20220101120001-seed-products.js
  - scripts/
    - build.js
    - start.js
    - deploy.js
    - migrate.js
    - seed.js
    - test.js
  - docs/
    - schema-docs/
      - Schemas.documentation.md
    - api-docs/
      - api-documentation.pdf
    - project-structure.md
  - infra/
    - Dockerfile
    - docker-compose.yml
    - kubernetes/
      - deployment.yml
      - service.yml
    - terraform/
      - main.tf
      - variables.tf
      - outputs.tf
  - package.json
  - .editorconfig
  - .gitignore
  - .prettierignore
  - .prettierrc
  - server.js
  - terser.config.js
  - README.md