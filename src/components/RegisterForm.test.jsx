/**
 * skenario test RegisterForm component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import { describe, it, afterEach, expect, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import { MemoryRouter } from 'react-router-dom'
import RegisterForm from './RegiterForm'

expect.extend(matchers)

describe('RegisterForm component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle name typing correctly', async () => {
    // Arrange
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <RegisterForm register={() => {}} />
      </MemoryRouter>,
    )
    const nameInput = getByPlaceholderText('Name')

    // Action
    await userEvent.type(nameInput, 'nametest')

    // Assert
    expect(nameInput.value).toBe('nametest')
  })

  it('should handle email typing correctly', async () => {
    // Arrange
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <RegisterForm register={() => {}} />
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
        <RegisterForm register={() => {}} />
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
    const mockRegisterFunction = vi.fn()
    const { getByPlaceholderText, getByRole } = render(
      <MemoryRouter>
        <RegisterForm register={mockRegisterFunction} />
      </MemoryRouter>,
    )
    const nameInput = getByPlaceholderText('Name')
    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')
    const registerButton = getByRole('button', { name: 'Daftar' })

    // Action
    await userEvent.type(nameInput, 'nametest')
    await userEvent.type(emailInput, 'emailtest@gmail.com')
    await userEvent.type(passwordInput, 'inipassword')
    await userEvent.click(registerButton)

    // Assert
    expect(mockRegisterFunction).toHaveBeenCalled()
  })
})
