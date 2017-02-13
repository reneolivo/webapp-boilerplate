import App from './app';

describe('App', () => {
  it('should be defined', shouldBeDefined);

  it('should define a .name property', defineNameProperty);
});



function shouldBeDefined() {
  expect(typeof App).toBe('function');
}

function defineNameProperty() {
  const app = new App();

  expect(app.name).toBe('Sample App');
}
