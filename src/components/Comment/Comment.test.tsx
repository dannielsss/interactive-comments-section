import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import Comment from './Comment';

describe('Comment component', () => {
  beforeEach(() => {
    render(<Comment username="amyrobson" datetime={new Date()} />);
  });
  afterEach(cleanup);

  /// HEADER TESTS
  it('displays the header', () => {
    screen.getByTestId('heading');
  });

  /// USER INFO TESTS
  it('displays the user profile picture', () => {
    screen.getByAltText('profile picture');
  });

  it('displays the user name', () => {
    screen.getByText('amyrobson');
  });

  /// CREATED AT TESTS
  it('displays the time as "0 seconds ago"', () => {
    screen.getByText('0 seconds ago');
  });

  /// REPLY BUTTON TESTS
  it('displays a reply button', () => {
    screen.getByText('Reply');
    screen.getByAltText('icon reply');
  });

  /// COMMENT CONTENT TESTS
  it('displays the content of the comment', () => {
    screen.getByTestId('content');
  });

  /// COUNTER TESTS
  it('displays a counter', () => {
    screen.getByTestId('counter');
  });

  it('the counter text should show "0"', () => {
    const counter = screen.getByTestId('counter-text');
    expect(counter.textContent).toBe('0');
  });

  it('the counter must have a "+" and "-" button.', () => {
    screen.getByText('+');
    screen.getByText('-');
  });

  it('the "+" button should add up the counter', () => {
    const plusButton = screen.getByText('+');
    fireEvent.click(plusButton);

    const counterText = screen.getByTestId(
      'counter-text'
    ) as HTMLParagraphElement;
    expect(counterText.textContent).toBe('1');
  });

  it('the "-" button should subtract the counter', () => {
    const subtractButton = screen.getByText('-');
    fireEvent.click(subtractButton);

    const counterText = screen.getByTestId(
      'counter-text'
    ) as HTMLParagraphElement;
    expect(counterText.textContent).toBe('-1');
  });

  it('click "+" three times, then "-" once, and the counter will be 2.', () => {
    const plusButton = screen.getByText('+');
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    const subtractButton = screen.getByText('-');
    fireEvent.click(subtractButton);

    const counterText = screen.getByTestId('counter-text');
    expect(counterText.textContent).toBe('2');
  });
});
