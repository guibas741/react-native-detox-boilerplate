/* eslint-disable no-undef */
describe('Login test suit', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    const emailInput = element(by.id('email-input'));
    const button = element(by.label('ENTRAR'));

    await emailInput.typeText('exemplo@aurum.com.br');
    await button.tap();

    await expect(element(by.text('Senha obrigatória'))).toBeVisible();
  });

  it('should render message when email is empty', async () => {
    const emailInput = element(by.id('password-input'));
    const button = element(by.label('ENTRAR'));

    await emailInput.typeText('123');
    await button.tap();

    await expect(element(by.text('Email obrigatório'))).toBeVisible();
  });
});
