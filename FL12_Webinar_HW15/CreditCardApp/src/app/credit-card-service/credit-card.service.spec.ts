import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });

  it(`should return message: 'Unknown card type'`, () => {
    expect(service.testCreditCard('6011 0000 0000 0004', 'Vissa'))
      .toEqual({
        isValid: false,
        message: 'Unknown card type'
      })
  });

  it(`should return message: 'Credit card number is in invalid format' if number is short`, () => {
    expect(service.testCreditCard('6011 0000 0000', 'Visa'))
      .toEqual({
        isValid: false,
        message: 'Credit card number is in invalid format'
      });
  });

  it(`should return message: 'Credit card number is in invalid format' if number is long`, () => {
    expect(service.testCreditCard('6011 0000 0000 0000 0000', 'Visa'))
      .toEqual({
        isValid: false,
        message: 'Credit card number is in invalid format'
      });
  });

  it(`should return message: 'Credit card number is invalid' if module ten digits is invalid`, () => {
    expect(service.testCreditCard('4000 0000 0000 9999', 'Visa'))
      .toEqual({
        isValid: false,
        message: 'Credit card number is invalid'
      });
  });

  it(`should return message: 'Credit card number is invalid' if card number prefix invalid`, () => {
    expect(service.testCreditCard('3000 0000 0000 9997', 'Visa'))
      .toEqual({
        isValid: false,
        message: 'Credit card number is invalid'
      });
  });

  it(`should return message: 'Warning! This credit card number is associated with a scam attempt'`, () => {
    expect(service.testCreditCard('5490 9977 7109 2064', 'MasterCard'))
      .toEqual({
        isValid: false,
        message: 'Warning! This credit card number is associated with a scam attempt'
      });
  });

  it(`should return message: 'Credit card number has an inappropriate number of digits`, () => {
    expect(service.testCreditCard('4000 0000 0000 998', 'Visa'))
      .toEqual({
        isValid: false,
        message: 'Credit card number has an inappropriate number of digits'
      });
  });

  it(`should return message: 'Credit card has a valid format`, () => {
    expect(service.testCreditCard('4111 1111 1111 1111', 'Visa'))
      .toEqual({
        isValid: true,
        message: 'Credit card has a valid format'
      });
  });
});
