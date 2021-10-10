import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  beforeEach(async () => {
    productsService = new ProductsService();
    productsController = new ProductsController(productsService);
  });

  describe('findAll', () => {
    it('should retourn an array of products', async () => {
      const result = [
        {
          name: 'Test',
          category: 'Product under SUT',
          description: 'Lorem Ipsum',
        },
      ];
      jest.spyOn(productsService, 'findAll').mockImplementation(() => result);

      expect(await productsController.findAll()).toBe(result);
    });
  });
});
