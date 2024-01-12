/**
 * skenario test CommentInput Component
 *   - should handle content input correctly
 *   - should call onAddComment when "Kirim" button is clicked
 */

import React from 'react'
import { describe, it, afterEach, expect, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import CommentInput from './CommentInput'

expect.extend(vi)

describe('CommentInput Component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle content input correctly', async () => {
    // Arrange
    const { getByTestId } = render(
      <MemoryRouter>
        <CommentInput onContentInput={() => {}} onAddComment={() => {}} />
      </MemoryRouter>,
    )
    const contentInput = getByTestId('comment-input')

    // Action
    await userEvent.type(contentInput, 'Hello, ViTest!')

    // Assert
    expect(contentInput.textContent).toBe('Hello, ViTest!')
  })

  it('should call onAddComment when "Kirim" button is clicked', async () => {
    // Arrange
    const mockOnAddComment = vi.fn()
    const { getByRole } = render(
      <MemoryRouter>
        <CommentInput
          onContentInput={() => {}}
          onAddComment={mockOnAddComment}
        />
      </MemoryRouter>,
    )
    const addButton = getByRole('button', { name: 'Kirim' })

    // Action
    await userEvent.click(addButton)

    // Assert
    expect(mockOnAddComment).toHaveBeenCalled()
  })
})
