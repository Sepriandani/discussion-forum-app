/**
 * skenario test LoginForm component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react'
import { describe, it, afterEach, expect, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import { MemoryRouter } from 'react-router-dom'
import LoginForm from './LoginForm'

expect.extend(matchers)

describe('LoginForm component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle email typing correctly', async () => {
    // Arrange
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <LoginForm login={() => {}} />
      </MemoryRouter>,
    )
    const emailInput = getByPlaceholderText('Email')

    // Action
    await userEvent.type(emailInput, 'emailtest@gmail.com')

    // Assert
    expect(emailInput.value).toBe('emailtest@gmail.com')
  })

  it('should handle password typing correctly', async () => {
    // Arrange
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <LoginForm login={() => {}} />
      </MemoryRouter>,
    )
    const passwordInput = getByPlaceholderText('Password')

    // Action
    await userEvent.type(passwordInput, 'inipassword')

    // Assert
    expect(passwordInput.value).toBe('inipassword')
  })

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLoginFunction = vi.fn()
    const { getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <LoginForm login={mockLoginFunction} />
      </MemoryRouter>,
    )
    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')
    const loginButton = getByRole('button', { name: 'Login' })

    // Action
    await userEvent.type(emailInput, 'emailtest@gmail.com')
    await userEvent.type(passwordInput, 'inipassword')
    await userEvent.click(loginButton)

    // Assert
    expect(mockLoginFunction).toHaveBeenCalled()
  })
})
