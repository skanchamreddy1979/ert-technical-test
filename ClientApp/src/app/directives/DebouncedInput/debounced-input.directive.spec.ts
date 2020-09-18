import { ElementRef } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { DebouncedInputDirective } from './debounced-input.directive';

class MockElementRef extends ElementRef {}

describe('DebouncedInputDirective', () => {
  let element;

  beforeEach(async(() => {
    element = new MockElementRef({});
  }));

  afterEach(() => {
    element = null;
  });

  it('should create an instance', () => {
    const directive = new DebouncedInputDirective(element);
    expect(directive).toBeTruthy();
  });
});
