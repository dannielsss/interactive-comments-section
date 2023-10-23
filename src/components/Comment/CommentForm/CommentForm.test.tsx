import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, it } from 'vitest';
import CommentForm from './CommentForm';

describe('Comment form component', () => {
  beforeEach(() => {
    render(<CommentForm />);
  });
  afterEach(cleanup);

  it('should have the user"s profile picture', () => {
    screen.getByAltText('profile picture');
  });

  it('there should be a form', () => {
    screen.getByRole('form');
  });

  it('the form should have a textarea for comments', () => {
    screen.getByTestId('comment-input');
  });

  it('the form should have its button to send data', () => {
    screen.getByTestId('send-button');
  });
});
