import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import CommentList from './CommentList';

describe('Comment list component', () => {
  beforeEach(() => {
    render(<CommentList />);
  });
  afterEach(cleanup);

  it('the list comments should have two comment', () => {
    const commentListDiv = screen.getByTestId('comment-list');
    const length = commentListDiv.childElementCount;
    expect(length).toBe(1);
  });

  it('the list comments should have the username "edel"', () => {
    screen.getByText('edel');
  });
});
