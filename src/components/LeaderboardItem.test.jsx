/**
 * skenario test LeaderboardItem Component
 *   - should render LeaderboardItem with user information and score
 *   - should display the correct score
 */

import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import LeaderboardItem from './LeaderboardItem'

describe('LeaderboardItem Component', () => {
  it('should render LeaderboardItem with user information and score', () => {
    // Arrange
    const user = { name: 'Seprian Dani', avatar: 'avatar.jpg' }
    const score = 100

    // Act
    const { getByText, getByAltText } = render(
      <LeaderboardItem user={user} score={score} />,
    )

    // Assert
    expect(getByText(user.name)).toBeTruthy()
    expect(getByAltText('Avatar').getAttribute('src')).toBe(user.avatar)
    expect(getByText(score.toString())).toBeTruthy()
  })

  it('should display the correct score', () => {
    // Arrange
    const user = { name: 'Seprian Dani', avatar: 'avatar2.jpg' }
    const score = 150

    // Act
    const { getByText } = render(<LeaderboardItem user={user} score={score} />)

    // Assert
    expect(getByText(score.toString())).toBeTruthy()
  })
})
