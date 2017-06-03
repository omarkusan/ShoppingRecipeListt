import { ShoppingRecipeListtPage } from './app.po';

describe('shopping-recipe-listt App', () => {
  let page: ShoppingRecipeListtPage;

  beforeEach(() => {
    page = new ShoppingRecipeListtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
